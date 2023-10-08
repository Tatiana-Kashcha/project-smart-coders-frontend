import { useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';

import { useTasks } from 'hooks/useTasks';
import { useDate } from 'hooks/useDate';

import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';

export default function CalendarPage() {
  const [periodType, setPeriodType] = useState('month');
  const { choosedDate } = useDate();
  const { tasks, getAllTasks } = useTasks();
  const currentDate = useMemo(() => new Date(), []);

  const month = currentDate.setMonth(currentDate.getMonth());
  const year = currentDate.setFullYear(currentDate.getFullYear());
  const monthMod = dayjs(month).format('MM');
  const yearMod = dayjs(year).format('YYYY');

  const isFirstVisit = useMemo(() => {
    const storedValue = sessionStorage.getItem('isFirstVisit');
    return storedValue ? JSON.parse(storedValue) : true;
  }, []);

  useEffect(() => {
    if (isFirstVisit) {
      sessionStorage.setItem('isFirstVisit', 'false');
    } else {
      setPeriodType('month');
    }
  }, [isFirstVisit]);

  useEffect(() => {
    if (tasks.length === 0 && currentDate === choosedDate) {
      getAllTasks({ month: monthMod, year: yearMod });
    }
  }, [choosedDate, currentDate, getAllTasks, monthMod, tasks.length, yearMod]);

  const handleChange = period => {
    setPeriodType(period);
  };

  return (
    <>
      <CalendarToolbar periodType={periodType} handleChange={handleChange} />
      {periodType === 'month' ? <ChoosedMonth /> : <ChoosedDay />}
    </>
  );
}

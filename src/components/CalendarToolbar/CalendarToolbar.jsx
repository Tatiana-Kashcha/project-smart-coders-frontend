import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import { useTasks } from 'hooks/useTasks';
import { useDate } from 'hooks/useDate';

import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';

import * as s from './CalendarToolbar.styled';

export const CalendarToolbar = ({ periodType, handleChange }) => {
  const { choosedDate, setChoosedDate } = useDate();
  const [date, setDate] = useState(choosedDate);
  const { getAllTasks } = useTasks();

  const navigate = useNavigate();
  const monthMod = dayjs(date).format('MM');
  const yearMod = dayjs(date).format('YYYY');
  const currentMonthModify = dayjs(date).format('MMMM-YYYY').toLowerCase();
  const currentDayModify = dayjs(date).format('DD-MMM-YYYY').toLowerCase();

  useEffect(() => {
    setChoosedDate(date);
  }, [date, setChoosedDate]);

  useEffect(() => {
    if (periodType === 'month') {
      navigate(`/calendar/month/${currentMonthModify}`);
    } else {
      navigate(`/calendar/day/${currentDayModify}`);
    }
  }, [periodType, currentMonthModify, currentDayModify, navigate]);

  useEffect(() => {
    getAllTasks({ month: monthMod, year: yearMod });
  }, [getAllTasks, monthMod, yearMod]);

  const upDateDate = PlusOrMinus => {
    if (periodType === 'month') {
      const newDateMonth = new Date(date);
      newDateMonth.setMonth(newDateMonth.getMonth() + PlusOrMinus);
      setDate(newDateMonth);
    } else {
      const newDateDay = new Date(date);
      newDateDay.setDate(newDateDay.getDate() + PlusOrMinus);
      setDate(newDateDay);
    }
  };

  return (
    <s.ToolbarWrapper>
      <PeriodPaginator
        date={date}
        periodType={periodType}
        upDateDate={upDateDate}
      />
      <PeriodTypeSelect periodType={periodType} handleChange={handleChange} />
    </s.ToolbarWrapper>
  );
};

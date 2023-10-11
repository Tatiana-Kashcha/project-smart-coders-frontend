import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import { useTasks } from 'hooks/useTasks';
import { useDate } from 'hooks/useDate';

import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';

import * as s from './CalendarToolbar.styled';

export const CalendarToolbar = ({ periodType, handleChange }) => {
  const { choosedDate, setChoosedDate } = useDate();
  const { getAllTasks } = useTasks();

  const navigate = useNavigate();
  const monthMod = dayjs(choosedDate).format('MM');
  const yearMod = dayjs(choosedDate).format('YYYY');
  const currentMonthModify = dayjs(choosedDate)
    .format('MMMM-YYYY')
    .toLowerCase();
  const currentDayModify = dayjs(choosedDate)
    .format('YYYY-MM-DD')
    .toLowerCase();

  useEffect(() => {
    setChoosedDate(choosedDate);
  }, [choosedDate, setChoosedDate]);

  useEffect(() => {
    if (periodType === 'month') {
      navigate(`/calendar/month/${currentMonthModify}`);
    } else {
      navigate(`/calendar/day/${currentDayModify}`);
    }
  }, [choosedDate, currentDayModify, currentMonthModify, navigate, periodType]);

  useEffect(() => {
    getAllTasks({ month: monthMod, year: yearMod });
  }, [getAllTasks, monthMod, yearMod]);

  const upDateDate = PlusOrMinus => {
    if (periodType === 'month') {
      const newDateMonth = new Date(choosedDate);
      newDateMonth.setMonth(newDateMonth.getMonth() + PlusOrMinus);
      setChoosedDate(newDateMonth);
    } else {
      const newDateDay = new Date(choosedDate);
      newDateDay.setDate(newDateDay.getDate() + PlusOrMinus);
      setChoosedDate(newDateDay);
    }
  };

  return (
    <s.ToolbarWrapper>
      <PeriodPaginator
        date={choosedDate}
        periodType={periodType}
        upDateDate={upDateDate}
      />
      <PeriodTypeSelect periodType={periodType} handleChange={handleChange} />
    </s.ToolbarWrapper>
  );
};

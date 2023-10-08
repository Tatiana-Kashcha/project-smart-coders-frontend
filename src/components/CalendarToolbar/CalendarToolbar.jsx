import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
// import { useTasks } from 'hooks/useTasks';

import * as s from './CalendarToolbar.styled';
import { useDate } from 'hooks/useDate';

export const CalendarToolbar = ({ periodType, handleChange }) => {
  const { choosedDate, setChoosedDate } = useDate();
  const [date, setDate] = useState(choosedDate);
  // const { tasks, getAllTasks } = useTasks();

  useEffect(() => {
    setChoosedDate(date);
  }, [date, setChoosedDate]);
  const navigate = useNavigate();

  // const month = dayjs(date).format('MM').toLowerCase();
  // const day = dayjs(date).format('DD').toLowerCase();
  // const monthMod = dayjs(date).format('MM');
  // const yearMod = dayjs(date).format('YYYY');
  const currentMonthModify = dayjs(date).format('MMMM-YYYY').toLowerCase();
  const currentDayModify = dayjs(date).format('DD-MMM-YYYY').toLowerCase();

  useEffect(() => {
    if (periodType === 'month') {
      navigate(`/calendar/month/${currentMonthModify}`);
    } else {
      navigate(`/calendar/day/${currentDayModify}`);
    }
  }, [periodType, currentMonthModify, currentDayModify, navigate]);

  // useEffect(() => {
  //   tasks.map(task => {
  //     const arrayOfData = task.date.split('-');

  //     if (!arrayOfData[1].includes(month) && !arrayOfData[2].includes(day)) {
  //       return null;
  //     }
  //     return getAllTasks({ month: monthMod, year: yearMod });
  //   });
  // }, [date]);

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
    <s.TestDiv>
      <PeriodPaginator
        date={date}
        periodType={periodType}
        upDateDate={upDateDate}
      />
      <PeriodTypeSelect periodType={periodType} handleChange={handleChange} />
    </s.TestDiv>
  );
};

/* 1. Компонент рендерить:
 - PeriodPaginator - дозволяє юзеру змінити дату періоду, задачі за який він хоче подивитись. ✅
 - PeriodTypeSelect - дозволяє юзеру змінити тип періоду, задачі за який він хоче подивитись. ✅
2. Компонент отримує тип періоду, та має локальний стейт з датою.✅
При зміні дати або типу періоду відбуваеться запит на отримання задач за обраний період, якщо задач з даного періоду досі немає в глобальному стейті.
Успіх - дані пишуться в глобальний стейт
Помилка - виводиться відповідне пуш повідомлення.
 
 */

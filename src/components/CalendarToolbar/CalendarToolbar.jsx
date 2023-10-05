import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';

import * as s from './CalendarToolbar.styled';

export const CalendarToolbar = ({ switchMonthOrDay, PeriodType }) => {
  const [date, setDate] = useState('');

  const currentDate = dayjs(new Date()).format('MMMM YYYY');
  const currentDay = dayjs(new Date()).format('D MMM YYYY');

  useEffect(() => {
    PeriodType ? setDate(currentDate) : setDate(currentDay);
  }, [PeriodType, currentDate, currentDay]);

  const changeDate = () => {};

  return (
    <s.TestDiv>
      <PeriodPaginator date={date} periodType={null} changeDate={changeDate} />
      <PeriodTypeSelect switchMonthOrDay={switchMonthOrDay} />
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

import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';

import * as s from './CalendarToolbar.styled';
import { useState } from 'react';

export const CalendarToolbar = ({ switchMonthOrDay, getPeriodType }) => {
  const [date, setDate] = useState(null);

  const changeDate = () => {};

  return (
    <s.TestDiv>
      <h1>CalendarToolbar в середні якого:</h1>
      <PeriodPaginator date={null} periodType={null} changeDate={changeDate} />
      <PeriodTypeSelect switchMonthOrDay={switchMonthOrDay} />
    </s.TestDiv>
  );
};

/* 1. Компонент рендерить:
 - PeriodPaginator - дозволяє юзеру змінити дату періоду, задачі за який він хоче подивитись. ✅
 - PeriodTypeSelect - дозволяє юзеру змінити тип періоду, задачі за який він хоче подивитись. ✅
2. Компонент отримує тип періоду, та має локальний стейт з датою.
При зміні дати або типу періоду відбуваеться запит на отримання задач за обраний період, якщо задач з даного періоду досі немає в глобальному стейті.
Успіх - дані пишуться в глобальний стейт
Помилка - виводиться відповідне пуш повідомлення.
 
 */

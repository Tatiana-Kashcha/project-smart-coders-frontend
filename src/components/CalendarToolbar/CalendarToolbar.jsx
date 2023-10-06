import { useState } from 'react';

import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';

import * as s from './CalendarToolbar.styled';

export const CalendarToolbar = ({ switchMonthOrDay, PeriodType }) => {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);

  const upDateDate = PlusOrMinus => {
    if (PeriodType) {
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() + PlusOrMinus);
      setDate(newDate);
    } else {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + PlusOrMinus);
      setDate(newDate);
    }
  };

  return (
    <s.TestDiv>
      <PeriodPaginator
        date={date}
        periodType={PeriodType}
        upDateDate={upDateDate}
      />
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

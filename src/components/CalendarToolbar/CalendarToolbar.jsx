import { useEffect, useState } from 'react';

import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';

import * as s from './CalendarToolbar.styled';

export const CalendarToolbar = ({ periodType, testDate }) => {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    testDate(date);
  }, [testDate, date]);

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
      <PeriodTypeSelect periodType={periodType} />
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

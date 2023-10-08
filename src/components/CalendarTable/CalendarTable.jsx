import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  CalendarGridWrapper,
  CellWrapper,
  DayWrapper,
  RowInCell,
} from './CalendarTable.styled';

moment.updateLocale('en', {
  week: {
    dow: 1, // Установите начальный день недели как понедельник (1)
  },
});

const initialDate = moment().startOf('month'); // Устанавливаем текущую дату на первый день месяца

const CalendarTable = () => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    // Выполняется при первом рендере и при изменении currentDate
    const startDay = moment(currentDate).startOf('week'); // Начало недели
    const day = startDay.clone();
    const endDay = moment(currentDate).endOf('month').endOf('week');
    const calendar = [];

    while (!day.isAfter(endDay)) {
      calendar.push(day.clone());
      day.add(1, 'day');
    }

    setCalendarDays(calendar);
  }, [currentDate]);

  // const currentDayOfMonth = moment(currentDate).format('D');
  const currentMonth = moment(currentDate).format('MMMM');

  return (
    <div>
      <h1>Current Month: {currentMonth}</h1>
      <CalendarGridWrapper>
        {calendarDays.map(dayItem => (
          <CellWrapper
            key={dayItem.format('DDMMYYYY')}
            IsWeekend={dayItem.day() === 0 || dayItem.day() === 6}
          >
            <DayWrapper>
              <RowInCell>
                {dayItem.month() === currentDate.month()
                  ? dayItem.format('D')
                  : null}
              </RowInCell>
            </DayWrapper>
          </CellWrapper>
        ))}
      </CalendarGridWrapper>
    </div>
  );
};

export default CalendarTable;

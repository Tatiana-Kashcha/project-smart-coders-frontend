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
    dow: 1,
  },
});

const initialDate = moment().startOf('month');

const CalendarTable = () => {
  const [currentDate] = useState(initialDate);
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    const startDay = moment(currentDate).startOf('week');
    const day = startDay.clone();
    const endDay = moment(currentDate).endOf('month').endOf('week');
    const calendar = [];

    while (!day.isAfter(endDay)) {
      calendar.push(day.clone());
      day.add(1, 'day');
    }

    setCalendarDays(calendar);
  }, [currentDate]);

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
                {dayItem.month() === currentDate.month() ? (
                  <span
                    style={{
                      color: dayItem.isSame(moment(), 'day') ? 'blue' : null,
                    }}
                  >
                    {dayItem.format('D')}
                  </span>
                ) : null}
              </RowInCell>
            </DayWrapper>
          </CellWrapper>
        ))}
      </CalendarGridWrapper>
    </div>
  );
};

export default CalendarTable;

import React from 'react';
import moment from 'moment';
import {
  CalendarGridWrapper,
  CellWrapper,
  DayWrapper,
  RowInCell,
} from './CalendarTable.styled';

const currentDate = moment();
const startDay = currentDate.startOf('month').startOf('week');
const day = startDay.clone().add(1, 'd');

moment.updateLocale('en', { week: { dow: 1 } });

const CalendarTable = ({ startDay }) => {
  const currentDayOfMonth = currentDate.format('D');
  const currentMonth = currentDate.format('MMMM');

  const endDay = currentDate.endOf('month').endOf('week');
  const calendar = [];

  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, 'day');
  }

  // window.moment = moment;

  const totalDays = 42;
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  return (
    <div>
      <h1>Current Month: {currentMonth}</h1>
      <CalendarGridWrapper>
        {daysArray.map(dayItem => (
          <CellWrapper
            key={dayItem.format('DDMMYYYY')}
            // IsWeekend={dayItem.day() === 6 || dayItem.day() === 0}
          >
            <DayWrapper>
              <RowInCell>
                {dayItem.format('D') === currentDayOfMonth ? (
                  <strong>{dayItem.format('D')}</strong>
                ) : (
                  dayItem.format('D')
                )}
              </RowInCell>
            </DayWrapper>
          </CellWrapper>
        ))}
      </CalendarGridWrapper>
    </div>
  );
};

export default CalendarTable;

import React from 'react';
import moment from 'moment';
import {
  CalendarGridWrapper,
  CellWrapper,
  DayWrapper,
  RowInCell,
  DivSelectLow,
  SelectLow,
  OptionSelectLow,
  DivSelectMedium,
  SelectMedium,
  OptionSelectMedium,
  DivSelectHigh,
  SelectHigh,
  OptionSelectHigh,
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

              <DivSelectLow>
                <SelectLow id="low" name="low">
                  <OptionSelectLow>Extranh </OptionSelectLow>
                  <OptionSelectLow>Small</OptionSelectLow>
                  <OptionSelectLow>Large</OptionSelectLow>
                </SelectLow>
              </DivSelectLow>

              <DivSelectMedium>
                <SelectMedium id="medium" name="medium">
                  <OptionSelectMedium>Extranh </OptionSelectMedium>
                  <OptionSelectMedium>Small</OptionSelectMedium>
                  <OptionSelectMedium>Large</OptionSelectMedium>
                </SelectMedium>
              </DivSelectMedium>

              <DivSelectHigh>
                <SelectHigh id="high" name="high">
                  <OptionSelectHigh>Extranh </OptionSelectHigh>
                  <OptionSelectHigh>Small</OptionSelectHigh>
                  <OptionSelectHigh>Large</OptionSelectHigh>
                </SelectHigh>
              </DivSelectHigh>
            </DayWrapper>
          </CellWrapper>
        ))}
      </CalendarGridWrapper>
    </div>
  );
};

export default CalendarTable;

import React, { useState, useEffect } from 'react';
import { useDate } from 'hooks/useDate';
import moment from 'moment';
import {
  CalendarGridWrapper,
  CellWrapper,
  DayWrapper,
  RowInCell,
  DivSelectLow,
  SelectLow,
  OptionSelectLow,
  // DivSelectMedium,
  // SelectMedium,
  // OptionSelectMedium,
  // DivSelectHigh,
  // SelectHigh,
  // OptionSelectHigh,
} from './CalendarTable.styled';

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
});

const CalendarTable = () => {
  const { choosedDate } = useDate();
  const selectedMonth = moment(choosedDate).month();

  const [calendarDays, setCalendarDays] = useState([]);
  const [initialDate, setInitialDate] = useState(
    moment(choosedDate).startOf('week')
  );

  useEffect(() => {
    setInitialDate(moment(choosedDate).startOf('month'));
  }, [choosedDate, selectedMonth]);

  useEffect(() => {
    const startDay = moment(initialDate).startOf('week');
    const day = startDay.clone();
    const endDay = moment(initialDate).endOf('month').endOf('week');
    const calendar = [];

    while (!day.isAfter(endDay)) {
      calendar.push(day.clone());
      day.add(1, 'day');
    }

    setCalendarDays(calendar);
  }, [initialDate]);

  return (
    <div>
      <CalendarGridWrapper>
        {calendarDays.map(dayItem => (
          <CellWrapper key={dayItem.format('DDMMYYYY')}>
            <DayWrapper>
              <RowInCell>
                {dayItem.month() === selectedMonth ? (
                  <span
                    style={{
                      color: dayItem.isSame(moment(), 'day') ? '#3e85f3' : null,
                    }}
                  >
                    {dayItem.format('D')}
                  </span>
                ) : null}
              </RowInCell>

              {dayItem.month() === selectedMonth ? (
                <DivSelectLow>
                  <SelectLow id="low" name="low">
                    <OptionSelectLow value="E">Extranh </OptionSelectLow>
                    <OptionSelectLow value="S"> Small</OptionSelectLow>
                    <OptionSelectLow value="l">Large</OptionSelectLow>
                  </SelectLow>
                </DivSelectLow>
              ) : null}
            </DayWrapper>
          </CellWrapper>
        ))}
      </CalendarGridWrapper>
    </div>
  );
};

export default CalendarTable;

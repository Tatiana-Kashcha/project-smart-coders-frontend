import React, { useState, useEffect } from 'react';
// import { createContext, useContext, useState } from 'react';
// const DateContext = createContext();
// export const useDate = () => useContext(DateContext);

// export const DateProvider = ({ children }) => {
//   const currentDate = new Date();
//   const [choosedDate, setChoosedDate] = useState(currentDate);

// import { useDate } from '../../hooks/useDate';
// import { selectUser } from '../../redux/auth/selectors';
// import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';

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

  return (
    <div>
      <CalendarGridWrapper>
        {calendarDays.map(dayItem => (
          <CellWrapper key={dayItem.format('DDMMYYYY')}>
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

              {dayItem.month() === currentDate.month() ? (
                <DivSelectLow>
                  <SelectLow id="low" name="low">
                    <OptionSelectLow>Extranh </OptionSelectLow>
                    <OptionSelectLow>Small</OptionSelectLow>
                    <OptionSelectLow>Large</OptionSelectLow>
                  </SelectLow>

                  <SelectLow id="low" name="low">
                    <OptionSelectLow>Extranh </OptionSelectLow>
                    <OptionSelectLow>Small</OptionSelectLow>
                    <OptionSelectLow>Large</OptionSelectLow>
                  </SelectLow>
                </DivSelectLow>
              ) : null}
              {dayItem.month() === currentDate.month() ? (
                <DivSelectMedium>
                  <SelectMedium id="medium" name="medium">
                    <OptionSelectMedium>Extranh </OptionSelectMedium>
                    <OptionSelectMedium>Small</OptionSelectMedium>
                    <OptionSelectMedium>Large</OptionSelectMedium>
                  </SelectMedium>
                </DivSelectMedium>
              ) : null}
              {dayItem.month() === currentDate.month() ? (
                <DivSelectHigh>
                  <SelectHigh id="high" name="high">
                    <OptionSelectHigh>Extranh </OptionSelectHigh>
                    <OptionSelectHigh>Small</OptionSelectHigh>
                    <OptionSelectHigh>Large</OptionSelectHigh>
                  </SelectHigh>
                </DivSelectHigh>
              ) : null}
            </DayWrapper>
          </CellWrapper>
        ))}
      </CalendarGridWrapper>
    </div>
  );
};

export default CalendarTable;

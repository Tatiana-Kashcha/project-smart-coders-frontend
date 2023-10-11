import React, { useState, useEffect } from 'react';

import { useDate } from 'hooks/useDate';
import moment from 'moment';
import * as s from './CalendarTableDay.styled';
import { StyleSheetManager } from 'styled-components';

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
});

const CalendarTableDay = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { choosedDate } = useDate();
  const selectedMonth = moment(choosedDate).month();

  const [calendarDays, setCalendarDays] = useState([]);
  const [initialDate, setInitialDate] = useState(
    moment(choosedDate).startOf('week')
  );
  const handleDayClick = day => {
    setSelectedDate(day);
  };

  useEffect(() => {
    setInitialDate(moment(choosedDate).startOf('week'));
  }, [choosedDate, selectedMonth]);

  useEffect(() => {
    const startDay = moment(initialDate).startOf('week');
    const day = startDay.clone();
    const endDay = moment(initialDate).endOf('week').endOf('day');
    const calendar = [];

    // Здесь вы можете выполнить дополнительные действия при выборе даты

    while (!day.isAfter(endDay)) {
      calendar.push(day.clone());
      day.add(1, 'day');
    }

    setCalendarDays(calendar);
  }, [initialDate]);

  return (
    <StyleSheetManager shouldForwardProp={prop => prop !== 'isSelected'}>
      {' '}
      <s.CalendarGridWrapperDay>
        {calendarDays.map(dayItem => (
          <s.CellWrapperDay key={dayItem.format('DD')}>
            <s.DayWrapperDay>
              <s.RowInCellDay>
                <s.StyledDayItem
                  isSelected={dayItem.isSame(selectedDate, 'day')}
                  onClick={() => handleDayClick(dayItem)}
                >
                  {dayItem.format('D')}
                </s.StyledDayItem>
              </s.RowInCellDay>
            </s.DayWrapperDay>
          </s.CellWrapperDay>
        ))}
      </s.CalendarGridWrapperDay>
    </StyleSheetManager>
  );
};

export default CalendarTableDay;

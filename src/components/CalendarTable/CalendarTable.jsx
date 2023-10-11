import React, { useState, useEffect } from 'react';
import { useDate } from 'hooks/useDate';
import moment from 'moment';
import * as s from './CalendarTable.styled';
import { StyleSheetManager } from 'styled-components';

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
});

const CalendarTable = () => {
  const { choosedDate } = useDate();
  const selectedMonth = moment(choosedDate).month();
  const [selectedDate] = useState(moment());
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
    <StyleSheetManager
      shouldForwardProp={prop => prop !== 'isSelected' && prop !== 'isToday'}
    >
      {' '}
      <s.CalendarGridWrapper>
        {calendarDays.map(dayItem => (
          <s.CellWrapper key={dayItem.format('DDMMYYYY')}>
            <s.DayWrapper>
              <s.RowInCell>
                {dayItem.month() === selectedMonth ? (
                  <s.CarrDayItem
                    isSelected={dayItem.isSame(selectedDate, 'day')}
                    isToday={dayItem.isSame(moment(), 'day')}
                  >
                    {dayItem.format('D')}
                  </s.CarrDayItem>
                ) : null}
              </s.RowInCell>

              {dayItem.month() === selectedMonth ? (
                <s.DivSelectLow>
                  <s.SelectLow id="low" name="low">
                    <s.OptionSelectLow value="E">Extranh </s.OptionSelectLow>
                    <s.OptionSelectLow value="S"> Small</s.OptionSelectLow>
                    <s.OptionSelectLow value="l">Large</s.OptionSelectLow>
                  </s.SelectLow>
                </s.DivSelectLow>
              ) : null}
              {dayItem.month() === selectedMonth ? (
                <s.DivSelectMedium>
                  <s.SelectMedium id="medium" name="medium">
                    <s.OptionSelectMedium value="E">
                      Extranh{' '}
                    </s.OptionSelectMedium>
                    <s.OptionSelectMedium value="S">Small</s.OptionSelectMedium>
                    <s.OptionSelectMedium value="L">Large</s.OptionSelectMedium>
                  </s.SelectMedium>
                </s.DivSelectMedium>
              ) : null}
              {dayItem.month() === selectedMonth ? (
                <s.DivSelectHigh>
                  <s.SelectHigh id="high" name="high">
                    <s.OptionSelectHigh value="E">Extranh </s.OptionSelectHigh>
                    <s.OptionSelectHigh value="S">Small</s.OptionSelectHigh>
                    <s.OptionSelectHigh value="l">Large</s.OptionSelectHigh>
                  </s.SelectHigh>
                </s.DivSelectHigh>
              ) : null}
            </s.DayWrapper>
          </s.CellWrapper>
        ))}
      </s.CalendarGridWrapper>
    </StyleSheetManager>
  );
};

export default CalendarTable;

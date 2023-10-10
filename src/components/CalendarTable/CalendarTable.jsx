import React, { useState, useEffect } from 'react';
import { useDate } from 'hooks/useDate';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import moment from 'moment';
import { nanoid } from 'nanoid';
import {
  CalendarGridWrapper,
  CellWrapper,
  DayWrapper,
  RowInCell,
  DivSelectLow,
  SelectLow,
  OptionSelectLow,
  DivTaskLeg,
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
  const task = useSelector(selectTasks);

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
        {calendarDays.map(dayItem => {
          const taskDay = task.filter(({ date }) => {
            return date === dayItem.format('YYYY-MM-DD');
          });
          // console.log(dayItem.format('MM-DD'), taskDay);
          return (
            <CellWrapper key={dayItem.format('DDMMYYYY')}>
              <DayWrapper>
                <RowInCell>
                  {dayItem.month() === selectedMonth ? (
                    <span
                      style={{
                        color: dayItem.isSame(moment(), 'day')
                          ? '#3e85f3'
                          : null,
                      }}
                    >
                      {dayItem.format('DD')}
                    </span>
                  ) : null}
                </RowInCell>

                {taskDay.length !== 0 && dayItem.month() === selectedMonth ? (
                  <DivSelectLow>
                    <DivTaskLeg>task: {taskDay.length}</DivTaskLeg>
                    <SelectLow>
                      {taskDay.map(({ title, priority }) => {
                        const id = nanoid();
                        return (
                          <OptionSelectLow key={id} priority={priority}>
                            {title}
                          </OptionSelectLow>
                        );
                      })}
                    </SelectLow>
                  </DivSelectLow>
                ) : null}
              </DayWrapper>
            </CellWrapper>
          );
        })}
      </CalendarGridWrapper>
    </div>
  );
};

export default CalendarTable;

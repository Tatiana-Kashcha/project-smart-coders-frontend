import React, { useState, useEffect } from 'react';
import { useDate } from 'hooks/useDate';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import moment from 'moment';
import { nanoid } from 'nanoid';
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
    <StyleSheetManager
      shouldForwardProp={prop => prop !== 'isSelected' && prop !== 'isToday'}
    >
      {' '}
      <s.CalendarGridWrapper>
        {calendarDays.map(dayItem => {
          const taskDay = task.filter(({ date }) => {
            return date === dayItem.format('YYYY-MM-DD');
          });

          const doneTask = taskDay.filter(
            ({ priority }) => priority === 'medium'
          );
          const todoTask = taskDay.filter(
            ({ priority }) => priority === 'high'
          );
          const inprogressTask = taskDay.filter(
            ({ priority }) => priority === 'low'
          );
          return (
            <s.CellWrapper key={dayItem.format('DDMMYYYY')}>
              <s.DayWrapper>
                <s.RowInCell>
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
                </s.RowInCell>

                {taskDay.length !== 0 && dayItem.month() === selectedMonth ? (
                  <>
                    {inprogressTask.length !== 0 && (
                      <s.DivSelectLow>
                        <s.DivTaskLeg>low {inprogressTask.length}</s.DivTaskLeg>
                        <s.SelectLow>
                          {inprogressTask.map(({ title, priority }) => {
                            const id = nanoid();
                            return (
                              <s.OptionSelectLow key={id} priority={priority}>
                                {title}
                              </s.OptionSelectLow>
                            );
                          })}
                        </s.SelectLow>
                      </s.DivSelectLow>
                    )}
                    {doneTask.length !== 0 && (
                      <s.DivSelectMedium>
                        <s.DivTaskLeg>medium {doneTask.length}</s.DivTaskLeg>
                        <s.SelectLow>
                          {doneTask.map(({ title, priority }) => {
                            const id = nanoid();
                            return (
                              <s.OptionSelectLow key={id} priority={priority}>
                                {title}
                              </s.OptionSelectLow>
                            );
                          })}
                        </s.SelectLow>
                      </s.DivSelectMedium>
                    )}
                    {todoTask.length !== 0 && (
                      <s.DivSelectHigh>
                        <s.DivTaskLeg>high {todoTask.length}</s.DivTaskLeg>
                        <s.SelectLow>
                          {todoTask.map(({ title, priority }) => {
                            const id = nanoid();
                            return (
                              <s.OptionSelectLow key={id} priority={priority}>
                                {title}
                              </s.OptionSelectLow>
                            );
                          })}
                        </s.SelectLow>
                      </s.DivSelectHigh>
                    )}
                  </>
                ) : null}
              </s.DayWrapper>
            </s.CellWrapper>
          );
        })}
      </s.CalendarGridWrapper>
    </StyleSheetManager>
  );
};

export default CalendarTable;

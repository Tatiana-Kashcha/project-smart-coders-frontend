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
} from './CalendarTable.styled';
// import * as s from './CalendarTable.styled';

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
});

const CalendarTable = () => {
  const { choosedDate } = useDate();
  const selectedMonth = moment(choosedDate).month();
  const task = useSelector(selectTasks);

  // const [selectedDate] = useState(moment());
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

          const doneTask = taskDay.filter(
            ({ category }) => category === 'done'
          );
          const todoTask = taskDay.filter(
            ({ category }) => category === 'to-do'
          );
          const inprogressTask = taskDay.filter(
            ({ category }) => category === 'in-progress'
          );
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
                  <>
                    {inprogressTask.length !== 0 && (
                      <DivSelectLow priority={'in-progress'}>
                        <DivTaskLeg>
                          in-progress{inprogressTask.length}
                        </DivTaskLeg>
                        <SelectLow>
                          {inprogressTask.map(({ title, priority }) => {
                            const id = nanoid();
                            return (
                              <OptionSelectLow key={id} priority={priority}>
                                {title}
                              </OptionSelectLow>
                            );
                          })}
                        </SelectLow>
                      </DivSelectLow>
                    )}
                    {doneTask.length !== 0 && (
                      <DivSelectLow priority={'done'}>
                        <DivTaskLeg>done{doneTask.length}</DivTaskLeg>
                        <SelectLow>
                          {doneTask.map(({ title, priority }) => {
                            const id = nanoid();
                            return (
                              <OptionSelectLow key={id} priority={priority}>
                                {title}
                              </OptionSelectLow>
                            );
                          })}
                        </SelectLow>
                      </DivSelectLow>
                    )}
                    {todoTask.length !== 0 && (
                      <DivSelectLow priority={'to-do'}>
                        <DivTaskLeg>to-do{todoTask.length}</DivTaskLeg>
                        <SelectLow>
                          {todoTask.map(({ title, priority }) => {
                            const id = nanoid();
                            return (
                              <OptionSelectLow key={id} priority={priority}>
                                {title}
                              </OptionSelectLow>
                            );
                          })}
                        </SelectLow>
                      </DivSelectLow>
                    )}
                  </>
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
// to-do  done  in-progress

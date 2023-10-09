import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from 'components/TasksColumnsList/TasksColumnsList';
import { ChoosedDayStyled } from './ChoosedDay.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectTasks,
  selectIsLoading,
  selectError,
} from 'redux/tasks/selectors';
import Loader from 'components/Loader/Loader';

const ChoosedDay = () => {
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const { currentDay: targetDate } = useParams();
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const filteredTasks = tasks.filter(task => task.date === targetDate);
    setFilteredTasks(filteredTasks);
  }, [targetDate, tasks]);

  return (
    <ChoosedDayStyled>
      {isLoading && !error && <Loader />}
      <DayCalendarHead />
      <TasksColumnsList tasks={filteredTasks} />
    </ChoosedDayStyled>
  );
};

export default ChoosedDay;

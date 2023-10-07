
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as s from './TaskForm.styled';
// import { TextAdd } from './TaskForm.styled';
import { Formik } from 'formik';
import { addTask, patchTask } from '../../redux/tasks/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks, selectError } from '../../redux/tasks/selectors';

const emptyTask = {
  title: '',
  start: '00:00',
  end: '00:00',
  priority: 'low',
  category: 'in-progress',
};

//  const initialData = {
//    title: 'My task 1',
//    date: '2023-10-01',
//    start: '09:10',
//    end: '09:40',
//    priority: 'low',
//    category: 'in-progress',
//    statusOperation: 'create',
//  };
export const TaskForm = ({ initialData, handlerCloseModal }) => {
  const [informationTask, setInformationTask] = useState(emptyTask);
  const [operation, setOperation] = useState('create');
  const [dateSave, setDataSave] = useState(null);

  const dispatch = useDispatch();
  const successful = useSelector(selectTasks);
  const error = useSelector(selectError);

  useEffect(() => {
    const { statusOperation, _id, ...information } = initialData;
    if (_id) information.id = _id;
    setInformationTask(information);
    setOperation(statusOperation);
  }, [initialData]);
  useEffect(() => {
    if (!successful || !dateSave) return;

    handlerCloseModal();
  }, [dateSave, successful, handlerCloseModal]);

  useEffect(() => {
    if (!error || !dateSave) return;
    Notify.failure(`Data save error`);
  }, [error, dateSave]);

  const handleChange = event => {
    const { name, value } = event.target;
    setInformationTask(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (informationTask.start > informationTask.end) {
      Notify.failure('Start time cannot be later than end time');
      return;
    }

    if (operation === 'edit') {
      dispatch(patchTask(informationTask));
    } else {
      dispatch(addTask(informationTask));
    }
    setDataSave(Date.now());
    console.log(informationTask);
  };

  return (
    <Formik>
      <s.Form onSubmit={handleSubmit}>
        <s.Label>
          Title
          <s.Input
            type="text"
            placeholder="Enter text"
            name="title"
            value={informationTask.title}
            onChange={handleChange}
            required
          />
        </s.Label>
        <s.Wrapper>
          <s.Label>
            Start
            <s.Input
              id="time"
              type="time"
              name="start"
              value={informationTask.start}
              onChange={handleChange}
              required
            />
          </s.Label>
          <s.Label>
            End
            <s.Input
              type="time"
              name="end"
              value={informationTask.end}
              onChange={handleChange}
              required
            />
          </s.Label>
        </s.Wrapper>
        <s.RadioButtonGroup>
          {['Low', 'Medium', 'High'].map(priority => (
            <s.RadioButtonLabel key={priority}>
              <s.RadioButtonInput
                type="radio"
                value={priority}
                name="priority"
                checked={informationTask.priority === priority}
                onChange={handleChange}
              />
              {priority}
            </s.RadioButtonLabel>
          ))}
        </s.RadioButtonGroup>
        {/* must be replaced with initialData.id */}
        {operation === 'edit' ? (
          <s.Button type="submit">
            <s.IconEdit />
            Edit
          </s.Button>
        ) : (
          <s.Wrapper>
            <s.Button type="submit">
              <s.IconPlus />
              Add
            </s.Button>

            <s.ButtonCancel type="button" onClick={handlerCloseModal}>
              Cancel
            </s.ButtonCancel>
          </s.Wrapper>
        )}
      </s.Form>
    </Formik>
  );
};

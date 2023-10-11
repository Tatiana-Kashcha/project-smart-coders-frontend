import { Formik } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';

import { useDispatch } from 'react-redux';
import * as s from './TaskForm.styled';

import { addTask, patchTask } from '../../redux/tasks/operations';
import { isAfter, isValid, parse } from 'date-fns';
import { useDate } from 'hooks/useDate';

export const TaskSchema = () =>
  Yup.object().shape({
    title: Yup.string()
      .transform(value => value.trim())
      .min(1, 'Must be at least 1 characters')
      .max(250, 'Must be at most 250 characters')
      .required('This review field is required'),
    start: Yup.string()
      .test('valid-time', 'Invalid time format', value =>
        isValid(parse(value, 'HH:mm', new Date()))
      )
      .required('Start is required'),
    end: Yup.string()
      .nullable()
      .test('valid-time', 'Invalid time format', value => {
        if (!value) return true;
        return isValid(parse(value, 'HH:mm', new Date()));
      })
      .when('start', (start, schema) =>
        schema.test('end-time-greater', 'Less than start', end =>
          start && end
            ? isAfter(
                parse(end, 'HH:mm', new Date()),
                parse(start, 'HH:mm', new Date())
              )
            : true
        )
      ),
    priority: Yup.string()
      .required('Priority is required')
      .oneOf(['low', 'medium', 'high'], 'Invalid priority'),
  });

export const TaskForm = ({ onClose, groupId, showAddBtnRew, task }) => {
  const { choosedDate } = useDate();
  const currentDate = dayjs(choosedDate).format('YYYY-MM-DD');

  const now = new Date();
  const currentHours = now.getHours().toString().padStart(2, '0');
  const currentMinutes = now.getMinutes().toString().padStart(2, '0');
  const currentTime = `${currentHours}:${currentMinutes}`;

  const dispatch = useDispatch();
  const showAddBtn = showAddBtnRew || false;
  const handleSubmit = values => {
    if (showAddBtn) {
      dispatch(
        addTask({
          title: values.title.trim(),
          start: values.start,
          end: values.end,
          priority: values.priority,
          date: `${currentDate}`,
          category: groupId,
        })
      );
    }

    const changedTask = {
      title: values.title.trim(),
      start: values.start,
      end: values.end,
      priority: values.priority,
      date: `${currentDate}`,
      category: groupId,
    };
    if (!showAddBtn) {
      dispatch(
        patchTask({
          taskId: task._id,
          changedTask,
        })
      );
    }
    onClose();
  };

  return (
    <Formik
      initialValues={{
        title: !showAddBtn ? task.title : '',
        start: !showAddBtn ? task.start : currentTime,
        end: !showAddBtn ? task.end : currentTime,
        priority: !showAddBtn ? task.priority : 'low',
        date: `${currentDate}`,
        category: !showAddBtn ? task.category : groupId,
      }}
      validationSchema={TaskSchema}
      onSubmit={handleSubmit}
    >
      <s.TaskForm>
        <s.Label htmlFor="title">
          Title
          <s.InputField type="text" name="title" placeholder="Enter text" />
          <s.Errors name="title" component="div" />
        </s.Label>

        <s.Wrapper>
          <s.Label htmlFor="start">
            Start
            <s.InputField type="time" name="start" />
            <s.Errors name="start" component="div" />
          </s.Label>
          <s.Label htmlFor="end">
            End
            <s.InputField type="time" name="end" />
            <s.Errors name="end" component="div" />
          </s.Label>
        </s.Wrapper>

        <s.RadioButtonGroup>
          <s.RadioLabel>
            <s.RadioField type="radio" name="priority" value="low" />
            <s.RadioSpan value="low" />
            Low
          </s.RadioLabel>
          <s.RadioLabel>
            <s.RadioField type="radio" name="priority" value="medium" />
            <s.RadioSpan value="medium" />
            Medium
          </s.RadioLabel>
          <s.RadioLabel>
            <s.RadioField type="radio" name="priority" value="high" />
            <s.RadioSpan value="high" />
            High
          </s.RadioLabel>
        </s.RadioButtonGroup>

        <s.Wrapper>
          {showAddBtn ? (
            <s.Button type="submit">
              <s.IconPlus />
              Add
            </s.Button>
          ) : null}
          {!showAddBtn ? (
            <s.Button type="submit">
              <s.IconEdit />
              Edit
            </s.Button>
          ) : null}
          <s.ButtonCancel type="button" onClick={onClose}>
            Cancel
          </s.ButtonCancel>
        </s.Wrapper>
      </s.TaskForm>
    </Formik>
  );
};

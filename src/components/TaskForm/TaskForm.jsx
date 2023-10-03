import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as s from './TaskForm.styled';
import { TextAdd } from './TaskForm.styled';


const TaskForm = ({ initialData, onClose, onSubmit }) => {
  const initialValues = {
    title: initialData?.title || '',
    start: initialData?.start || '',
    end: initialData?.end || '',
    priority: initialData?.priority || 'low',
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Title is required')
      .max(250, 'Title should not exceed 250 characters'),
    start: Yup.string()
      .required('Start time is required')
      .matches(
        /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
        'Start time should be in HH:mm format'
      ),
    end: Yup.string()
      .required('End time is required')
      .matches(
        /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
        'End time should be in HH:mm format'
      )
      .test(
        'is-greater',
        'End time should be greater than start time',
        function (value) {
          return value > this.parent.start;
        }
      ),
    priority: Yup.string()
      .required('Priority is required')
      .matches(
        /^(low|medium|high)$/,
        'Priority should be low, medium, or high'
      ),
    date: Yup.string()
      .required('Date is required')
      .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date should be in YYYY-MM-DD format'),
    category: Yup.string()
      .required('Category is required')
      .matches(
        /^(to-do|in-progress|done)$/,
        'Category should be to-do, in-progress, or done'
      ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      <s.Form>
        <s.Label htmlFor="title">
          <s.Span>Title</s.Span>
          <s.Input
            type="text"
            name="title"
            id="title"
            // onChange
            // onBlur
            // value
            placeholder="Enter text"
          />
          <s.Errors></s.Errors>
        </s.Label>

        <s.Wrapper>
          <s.Label htmlFor="start">
            <s.Span>Start</s.Span>
            <s.Input
              type="time"
              step="60"
              name="start"
              id="start"
              onChange
              onBlur
              value
              placeholder="Select time"
            />
            <s.Errors></s.Errors>
          </s.Label>

          <s.Label htmlFor="end">
            <s.Span>End</s.Span>
            <s.Input
              type="time"
              step="60"
              name="end"
              id="end"
              onChange
              onBlur
              value
              placeholder="Select time"
            />
            <s.Errors></s.Errors>
          </s.Label>
        </s.Wrapper>

        <s.RadioButtonGroup>
          {['Low', 'Medium', 'High'].map(priority => (
            <s.RadioButtonLabel key={priority}>
              <s.RadioButtonInput
                type="radio"
                value={priority}
                name="priority"
                checked
                onChange
              />
              {priority}
            </s.RadioButtonLabel>
          ))}
        </s.RadioButtonGroup>

        <s.Wrapper>
          <s.Button type="submit" aria-label="Button add">
            <s.IconPlus />
            <TextAdd>Add</TextAdd>{' '}
          </s.Button>
          <s.ButtonCancel
            aria-label="Button cancel"
            type="button"
            disabled
            onClick={() => {
              onClose();
            }}
          >
            Cancel
          </s.ButtonCancel>

           
        </s.Wrapper>
      </s.Form> 
    </Formik>
  );
};

export default TaskForm;

/* <s.Button type="submit" disabled aria-label="Button edit">
            <s.IconEdit />
            Edit
          </s.Button> */
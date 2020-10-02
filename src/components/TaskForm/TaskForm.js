import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const TaskSchema = Yup.object().shape({
  Task: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  Time: Yup.number()
    .min(0.5,'Too Short time period !')
    .max(24, 'Hours exceed day time!')
    .required('Required')
});

const TaskForm = () => {
  return (
    <Fragment>
      <h2>Task & Hours</h2>
      <Formik
        initialValues={{
          Task: '',
          Time: ''
        }}
        validationSchema={TaskSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="Task" />
            {errors.Task && touched.Task ? (
              <div>{errors.Task}</div>
            ) : null}
            <Field name="Time" />
            {errors.Time && touched.Time ? (
              <div>{errors.Time}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default TaskForm;
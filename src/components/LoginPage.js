import React from 'react';
import ReactDOM from 'react-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginPage = ({ values, touched, errors, isSubmitting }) => (
  /*  <form onSubmit={handleSubmit}>
    <p>Hallo!</p>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={values.email}
      onChange={handleChange}
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={values.password}
      onChange={handleChange}
    />
    <input type="submit" value="Submit" />
  </form> */
  <Form>
    <p>Hallo!</p>
    <div>
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
    </div>
    <div>
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />
    </div>
    <label htmlFor="newsletter">
      <Field
        type="checkbox"
        id="newletter"
        name="newsletter"
        checked={values.newsletter}
      />
      Join our newsletter!
    </label>
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <button disabled={isSubmitting}>Submit</button>
  </Form>
);

const FormikLoginPage = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || true,
      plan: plan || 'premium'
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('hoho')
      .required(),
    password: Yup.string()
      .min(5)
      .required()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
    setTimeout(() => {
      if (values.email === 'taty@baradari-solutions.de') {
        setErrors({ email: 'That email is already tacken' });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(LoginPage);

export default FormikLoginPage;

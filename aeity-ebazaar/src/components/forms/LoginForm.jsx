import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {
  const schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={(values) => {
        alert(`Logged in with: ${values.email}`);
      }}
    >
      <Form className="space-y-4">
        <div>
          <label>Email</label>
          <Field name="email" type="email" className="border p-2 w-full rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>
        <div>
          <label>Password</label>
          <Field name="password" type="password" className="border p-2 w-full rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
        </div>
        <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded">
          Login
        </button>
      </Form>
    </Formik>
  );
}

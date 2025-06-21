import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function SignupForm() {
  const schema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={schema}
      onSubmit={(values) => {
        alert(`Signup for ${values.name} successful!`);
      }}
    >
      <Form className="space-y-4">
        <div>
          <label>Name</label>
          <Field name="name" className="border p-2 w-full rounded" />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
        </div>
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
        <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
}

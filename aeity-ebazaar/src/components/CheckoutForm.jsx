import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function CheckoutForm({ onSuccess }) {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    pincode: Yup.string().required('Pincode is required'),
  });

  return (
    <Formik
      initialValues={{ fullName: '', address: '', city: '', pincode: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSuccess(values);
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <Field name="fullName" className="border p-2 w-full rounded" />
            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label className="block font-medium">Address</label>
            <Field name="address" className="border p-2 w-full rounded" />
            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label className="block font-medium">City</label>
            <Field name="city" className="border p-2 w-full rounded" />
            <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label className="block font-medium">Pincode</label>
            <Field name="pincode" className="border p-2 w-full rounded" />
            <ErrorMessage name="pincode" component="div" className="text-red-500 text-sm" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Proceed to Pay
          </button>
        </Form>
      )}
    </Formik>
  );
}

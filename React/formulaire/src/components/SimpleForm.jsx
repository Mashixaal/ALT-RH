import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const SimpleForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
  };

  const submit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Champs requis"),
    lasttName: yup.string().required("Champs requis"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={validationSchema}
    >
      <Form>
        <Field name="firstName" />
        <ErrorMessage name="firstName" />
        <Field name="lastName" />
        <ErrorMessage name="lasttName" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SimpleForm;

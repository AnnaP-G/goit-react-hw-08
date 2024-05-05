import { ErrorMessage, Field, Form, Formik } from "formik";
import { minLengthDataValidation } from "../utils/constants";
import { maxLengthDataValidation } from "../utils/constants";

import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { apiAddContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(minLengthDataValidation, "Too Short!")
    .max(maxLengthDataValidation, "Too Long!"),
  number: Yup.string()
    .matches(
      /^[+\0-9]{3,15}$/,
      "Phone number is not valid, must be only digits"
    )
    .required("Required")
    .min(minLengthDataValidation, "Too Short!")
    .max(maxLengthDataValidation, "Too Long!"),
});

const FormInitialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(apiAddContact(values));
    actions.resetForm();
    navigate("/contacts");
  };

  return (
    <Formik
      initialValues={FormInitialValues}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.formLabel}>
          <span className={css.formSpan}>Name</span>
          <Field className={css.formFiled} type="text" name="name" />
          <ErrorMessage
            className={css.formError}
            component="span"
            name="name"
          />
        </label>
        <label className={css.formLabel}>
          <span className={css.formSpan}>Number</span>
          <Field className={css.formFiled} type="text" name="number" />
          <ErrorMessage
            className={css.formError}
            component="span"
            name="number"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

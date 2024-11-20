import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ErrorMessages from "./ErrorMessages";

const SignupForm = () => {
  const navigate = useNavigate();

  // Валідаційна схема
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z]+$/, "Name can only contain letters")
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .required("Password is required"),
    dob: Yup.date().required("Date of Birth is required"),
  });

  // Сабміт форми
  const handleSubmit = (values) => {
    console.log("Form Submitted", values);
    navigate("/success");
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        dob: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label>Name:</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component={ErrorMessages} />
          </div>

          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component={ErrorMessages} />
          </div>

          <div>
            <label>Phone:</label>
            <Field name="phone" type="text" />
            <ErrorMessage name="phone" component={ErrorMessages} />
          </div>

          <div>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component={ErrorMessages} />
          </div>

          <div>
            <label>Date of Birth:</label>
            <Field name="dob" type="date" />
            <ErrorMessage name="dob" component={ErrorMessages} />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Validations = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted successfully:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div data-testid="email-error" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div data-testid="password-error" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Validations;
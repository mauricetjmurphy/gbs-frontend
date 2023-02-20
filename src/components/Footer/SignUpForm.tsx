import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";

import { API_URL } from "../../config";

import { signUpFormStyles } from "./footer.styles";

interface SignUpFormProps {
  setOpen: (value: boolean) => void;
}

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
});

export const SignUpForm: React.FC<SignUpFormProps> = ({ setOpen }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values: any) => {
      fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
      })
        .then((response) => response.json())
        .then(() => {
          setOpen(true);
          formik.resetForm();
        })
        .catch((error) => console.error(error));
    },
    validationSchema,
  });

  return (
    <form style={signUpFormStyles.form} onSubmit={formik.handleSubmit}>
      <div style={signUpFormStyles.conatainer}>
        <input
          style={signUpFormStyles.inputField}
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email.toLowerCase()}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={signUpFormStyles.error}>{formik.errors.email}</div>
        ) : null}
      </div>

      <Button
        color="primary"
        variant="contained"
        style={signUpFormStyles.signUpButton}
        type="submit"
      >
        Sign Up
      </Button>
    </form>
  );
};

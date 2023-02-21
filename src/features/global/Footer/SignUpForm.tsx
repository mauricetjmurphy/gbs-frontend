import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";

import { API_URL } from "../../../config";

import { signUpFormStyles } from "./footer.styles";

interface SignUpFormProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
});

export const SignUpForm: React.FC<SignUpFormProps> = ({ setOpen, open }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: (values: any) => {
      setButtonDisabled(true);
      fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email.toLowerCase() }),
      })
        .then(() => {
          setOpen(true);
          formik.resetForm();
          setButtonDisabled(false);
        })
        .catch((error) => console.error(error));
    },
    validationSchema,
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={formik.handleSubmit}
    >
      <div style={signUpFormStyles.conatainer}>
        <input
          style={signUpFormStyles.inputField}
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        <Button
          variant="contained"
          style={signUpFormStyles.signUpButton}
          type="submit"
          disabled={buttonDisabled}
        >
          Sign Up
        </Button>
      </div>

      {formik.touched.email && formik.errors.email ? (
        <div style={signUpFormStyles.error}>{formik.errors.email}</div>
      ) : null}
    </form>
  );
};

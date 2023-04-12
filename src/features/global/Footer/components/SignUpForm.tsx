import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";

import { signUp } from "../api/signUp";

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
      signUp(values.email)
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
      <Box display={"flex"} alignItems={"center"}>
        <TextField
          style={{ flex: 3 }}
          type="email"
          id="email"
          name="email"
          label="Email*"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        <Button
          variant="contained"
          style={{ flex: 1, ...signUpFormStyles.signUpButton }}
          type="submit"
          disabled={buttonDisabled}
        >
          Sign Up
        </Button>
      </Box>

      {formik.touched.email && formik.errors.email ? (
        <div style={signUpFormStyles.error}>{formik.errors.email}</div>
      ) : null}
    </form>
  );
};

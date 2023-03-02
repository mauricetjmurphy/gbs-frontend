import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputBase, Button, Grid } from "@mui/material";

import { API_URL } from "../../../config";
import { useWindowSize } from "../../../hooks/useWindowSize";

import { contactFormStyles } from "./contactForm.styles";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  message: Yup.string().required("Required"),
});

export const ContactForm = () => {
  const { width } = useWindowSize();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      fetch(`${API_URL}/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then(() => {
          console.log("Message sent successfully");
          formik.resetForm();
        })
        .catch((error) => console.error(error));
    },
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        columnSpacing={1}
        rowSpacing={2}
        container
        flexDirection={{ sm: "column", md: "row" }}
        sx={{
          display: "flex",
          margin: "10px 0px",
        }}
      >
        <Grid item xs={12} md={6}>
          <InputBase
            style={contactFormStyles.input(width)}
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div style={contactFormStyles.error()}>
              {formik.errors.firstName}
            </div>
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <InputBase
            style={contactFormStyles.input(width)}
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div style={contactFormStyles.error()}>
              {formik.errors.lastName}
            </div>
          )}
        </Grid>

        <Grid item xs={12} md={12} sx={{}}>
          <InputBase
            style={contactFormStyles.input(width)}
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={contactFormStyles.error()}>{formik.errors.email}</div>
          )}
        </Grid>

        <Grid item xs={12} md={12} sx={{}}>
          <textarea
            style={contactFormStyles.textArea(width)}
            name="message"
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (
            <div style={contactFormStyles.error()}>{formik.errors.message}</div>
          )}
        </Grid>
      </Grid>

      <Button
        sx={{ marginLeft: "8px" }}
        type="submit"
        color={"inherit"}
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
};

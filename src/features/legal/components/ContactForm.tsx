import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button } from "@mui/material";

import { API_URL } from "../../../config";
import { useWindowSize } from "../../../hooks/useWindowSize";

import {
  getErrorStyle,
  getInputStyle,
  getTextAreaStyle,
} from "./contactForm.styles";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: width > 600 ? "row" : "column",
          margin: "10px 0px",
        }}
      >
        <Box>
          <input
            style={{ ...getInputStyle(width) }}
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div style={getErrorStyle()}>{formik.errors.firstName}</div>
          )}
        </Box>

        <Box>
          <input
            style={{
              ...getInputStyle(width),
              marginTop: width < 600 ? "10px" : "0px",
            }}
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div style={getErrorStyle()}>{formik.errors.lastName}</div>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: width > 600 ? "row" : "column",
          margin: "10px 0px",
        }}
      >
        <Box>
          <input
            style={{ ...getInputStyle(width), minWidth: "440px" }}
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={getErrorStyle()}>{formik.errors.email}</div>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: width > 600 ? "row" : "column",
          margin: "10px 0px",
        }}
      >
        <Box>
          <textarea
            style={{ ...getTextAreaStyle(width) }}
            name="message"
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (
            <div style={getErrorStyle()}>{formik.errors.message}</div>
          )}
        </Box>
      </Box>

      <Button type="submit" color={"inherit"} variant="contained">
        Submit
      </Button>
    </form>
  );
};

import React, { useState } from "react";
import axios from "axios";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Link,
  Typography,
  Container,
} from "@material-ui/core";
import LockIcon from "@mui/icons-material/Lock";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

import { AUTH_API_URL } from "../../../config";
import { Spinner } from "../../../components/Spinner/Spinner";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#ffb67c",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  passwordConfirmation: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

type CreateUserInput = Yup.InferType<typeof validationSchema>;

export default function RegisterForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: CreateUserInput) {
    try {
      setIsSubmitting(true);
      await axios.post(`${AUTH_API_URL}/api/users`, values);
      navigate("/");
    } catch (error: any) {
      switch (error.response?.status) {
        case 400:
          setRegisterError("Invalid input data. Please try again.");
          break;
        case 409:
          setRegisterError("This email address is already registered.");
          break;
        default:
          setRegisterError("An error occurred. Please try again later.");
          break;
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  if (isSubmitting) {
    return <Spinner />;
  }

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirmation"
                label="Confirm Password"
                type="password"
                id="passwordConfirmation"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                error={
                  formik.touched.passwordConfirmation &&
                  Boolean(formik.errors.passwordConfirmation)
                }
                helperText={
                  formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            style={{ marginBottom: "10px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Back to home
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

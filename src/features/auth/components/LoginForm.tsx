import React, { useState } from "react";
import { useFormik, FormikConfig } from "formik";
import * as Yup from "yup";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router";
import axios from "axios";

import { AUTH_API_URL } from "../../../config";
import { Spinner } from "../../../components/Spinner/Spinner";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  remember: Yup.boolean(),
});

type CreateSessionInput = Yup.InferType<typeof validationSchema>;

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik<any>({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  async function onSubmit(values: CreateSessionInput) {
    console.log({ values });

    try {
      setIsSubmitting(true);
      await axios.post(`${AUTH_API_URL}/api/sessions`, values, {
        withCredentials: true,
      });
      navigate("/admin");
    } catch (e: any) {
      switch (e.response?.status) {
        case 400:
          setLoginError("Oops! Invalid email or password");
          break;
        case 401:
          setLoginError("Oops! Incorrect email or password");
          break;
        default:
          setLoginError("Oops! Something went wrong. Please try again later.");
          break;
      }
    } finally {
      setIsSubmitting(false);
    }
  }

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
          Login
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={
              formik.touched.email && formik.errors.email
                ? (formik.errors.email as React.ReactNode)
                : ""
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={
              formik.touched.password && formik.errors.password
                ? (formik.errors.password as React.ReactNode)
                : ""
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                value={formik.values.remember}
                color="primary"
                onChange={formik.handleChange}
                name="remember"
              />
            }
            label="Remember me"
          />
          {loginError !== null && (
            <p style={{ color: "red", fontSize: "14px" }}>{loginError}</p>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
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
              <Link href="/register" variant="body2">
                Not yet registered? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;

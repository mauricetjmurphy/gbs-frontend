import React from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import {
  Formik,
  Form,
  Field,
  FieldProps,
  FieldMetaProps,
  FieldArray,
} from "formik";
import * as Yup from "yup";
import { Box, Container, FormLabel, TextareaAutosize } from "@mui/material";
import { useLocation } from "react-router";

interface FormData {
  Id: string;
  Image_url?: string;
  Title: string;
  Category: string;
  Body: string[];
  Author: string;
  Date: string;
}

interface ModifyArticleProps {}

const useStyles = makeStyles((theme: any) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const categories = ["Category 1", "Category 2", "Category 3"];

const validationSchema = Yup.object().shape({
  Id: Yup.string().required("Required"),
  Image_url: Yup.string().required("Required"),
  Title: Yup.string().required("Required"),
  Category: Yup.string().required("Required"),
  Body: Yup.array()
    .of(Yup.string().required("Required"))
    .min(1, "At least one paragraph is required"),
  Author: Yup.string().required("Required"),
  Date: Yup.date().required("Required"),
});

const ModifyArticle: React.FC<ModifyArticleProps> = () => {
  const classes = useStyles();
  const location = useLocation();

  const initialValues: FormData = {
    ...location.state.rowData,
    Date: new Date(location.state.rowData.Date).toISOString().slice(0, 10),
  };

  const handleSubmit = (
    values: FormData,
    actions: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const submittedValues = {
      ...values,
      Date: new Date(values.Date).toISOString(),
    };
    console.log("Form data: ", submittedValues);
    actions.setSubmitting(false);
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{ maxHeight: "calc(100vh - 70px)", overflow: "scroll" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, dirty, setFieldValue }) => (
          <Form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  id="Id"
                  name="Id"
                  label="ID"
                  variant="outlined"
                  error={touched.Id && !!errors.Id}
                  helperText={touched.Id && errors.Id}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  id="Title"
                  name="Title"
                  label="Title"
                  variant="outlined"
                  error={touched.Title && !!errors.Title}
                  helperText={touched.Title && errors.Title}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  id="Category"
                  name="Category"
                  label="Category"
                  variant="outlined"
                  error={touched.Category && !!errors.Category}
                  helperText={touched.Category && errors.Category}
                />
              </Grid>
              <Grid item xs={12}>
                <FieldArray name="Body">
                  {({ push, remove, form }) => (
                    <Box>
                      <FormLabel sx={{ fontSize: "13px" }}>Body</FormLabel>
                      {form.values.Body.map(
                        (paragraph: string, index: number) => (
                          <Box key={index}>
                            <Field name={`Body.${index}`}>
                              {({
                                field,
                                meta,
                              }: {
                                field: FieldProps["field"];
                                meta: FieldMetaProps<any>;
                              }) => (
                                <>
                                  <TextareaAutosize
                                    {...field}
                                    id={`Body.${index}`}
                                    minRows={4}
                                    style={{
                                      width: "100%",
                                      resize: "none",
                                      fontFamily: "Poppins-regular, sans-serif",
                                      padding: "16px",
                                      fontSize: "16px",
                                      letterSpacing: "0.5px",
                                    }}
                                  />
                                  {meta.touched && meta.error && (
                                    <div className="error">{meta.error}</div>
                                  )}
                                </>
                              )}
                            </Field>
                            <Button
                              style={{ marginBottom: "15px" }}
                              color="primary"
                              variant="outlined"
                              type="button"
                              onClick={() => remove(index)}
                            >
                              Remove
                            </Button>
                          </Box>
                        )
                      )}
                      <Button
                        variant="outlined"
                        type="button"
                        onClick={() => push("")}
                      >
                        Add Paragraph
                      </Button>
                    </Box>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  id="Author"
                  name="Author"
                  label="Author"
                  variant="outlined"
                  error={touched.Author && !!errors.Author}
                  helperText={touched.Author && errors.Author}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  id="Date"
                  name="Date"
                  label="Date"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={touched.Date && !!errors.Date}
                  helperText={touched.Date && errors.Date}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  id="Image_url"
                  name="Image_url"
                  label="Image URL"
                  variant="outlined"
                  error={touched.Image_url && !!errors.Image_url}
                  helperText={touched.Image_url && errors.Image_url}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!isValid}
            >
              Update
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ModifyArticle;

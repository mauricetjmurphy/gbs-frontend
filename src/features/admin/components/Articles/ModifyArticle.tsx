import React, { useContext, useState } from "react";
import axios from "axios";
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
import { useLocation, useNavigate } from "react-router";
import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from "@tanstack/react-query";

import { API_URL } from "../../../../config";
import { Spinner } from "../../../../components/Spinner/Spinner";
import { ArticleContext } from "../../../../context/ArticleCtx";

interface FormData {
  Id: string;
  Image_url?: string;
  Title: string;
  Category: string;
  CategoryTitle: string;
  Body: string[];
  Author: string;
  CreatedAt: string;
  UpdatedAt: string;
  TopStory: string;
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

const validationSchema = Yup.object().shape({
  Id: Yup.string().required("Required"),
  Image_url: Yup.string().required("Required"),
  Title: Yup.string().required("Required"),
  Category: Yup.string().required("Required"),
  CategoryTitle: Yup.string().required("Required"),
  Body: Yup.array()
    .of(Yup.string().required("Required"))
    .min(1, "At least one paragraph is required"),
  Author: Yup.string().required("Required"),
  CreatedAt: Yup.date().required("Required"),
  UpdatedAt: Yup.date().required("Required"),
  TopStory: Yup.string().required("Required"),
});

const ModifyArticle: React.FC<ModifyArticleProps> = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState<boolean>(false);

  console.log(location);

  const initialValues: FormData = {
    ...location.state.rowData,
    CreatedAt: new Date(location.state.rowData.CreatedAt)
      .toISOString()
      .slice(0, 10),
    UpdatedAt: new Date().toISOString().slice(0, 10),
  };

  const queryClient = useQueryClient();

  const updateArticleMutation = useMutation(
    ({ id, data }: { id: string; data: any }) => updateArticle(id, data),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["articles"]);
      },
    }
  );

  async function updateArticle(id: string, updatedArticle: any) {
    try {
      setSubmitting(true);
      const response = await axios.put(
        `${API_URL}/articles/${id}`,
        updatedArticle
      );
      console.log("Article updated:", response.data);
      setSubmitting(false);
      navigate("/admin/articles");
      return response.data;
    } catch (error) {
      console.error("Error updating article:", error);
      throw error;
    }
  }

  const { refetch } = useContext(ArticleContext);

  const handleSubmit = (values: FormData) => {
    const submittedValues = {
      ...values,
      CreatedAt: new Date(values.CreatedAt).toISOString(),
      UpdatedAt: new Date(values.UpdatedAt).toISOString(),
    };
    console.log("Form data: ", submittedValues);
    updateArticleMutation.mutate(
      { id: values.Id, data: submittedValues },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  if (submitting) {
    return <Spinner />;
  }

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
                  disabled={true}
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
                  id="CategoryTitle"
                  name="CategoryTitle"
                  label="Category Title"
                  variant="outlined"
                  error={touched.CategoryTitle && !!errors.CategoryTitle}
                  helperText={touched.CategoryTitle && errors.CategoryTitle}
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
                  id="CreatedAt"
                  name="CreatedAt"
                  label="CreatedAt"
                  type="date"
                  disabled={true}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={touched.CreatedAt && !!errors.CreatedAt}
                  helperText={touched.CreatedAt && errors.CreatedAt}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  id="UpdatedAt"
                  name="UpdatedAt"
                  label="UpdatedAt"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={touched.UpdatedAt && !!errors.UpdatedAt}
                  helperText={touched.UpdatedAt && errors.UpdatedAt}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  id="TopStory"
                  name="TopStory"
                  label="Top Story"
                  select
                  variant="outlined"
                  error={touched.TopStory && !!errors.TopStory}
                  helperText={touched.TopStory && errors.TopStory}
                >
                  <MenuItem value="true">True</MenuItem>
                  <MenuItem value="false">False</MenuItem>
                </Field>
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

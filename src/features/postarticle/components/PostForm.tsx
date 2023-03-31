import { useState } from "react";
import { Box, Button, Container, MenuItem, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";

import { API_URL } from "../../../config";

const CATEGORY_OPTIONS = [
  { value: "Eco-Friendly", label: "Eco-Friendly" },
  { value: "Green Tech", label: "Green Tech" },
  { value: "Climate Change", label: "Climate Change" },
];

interface FormValues {
  title: string;
  author: string;
  category: string;
  body: {
    title: string;
    paragraphs: string[];
  };
  imageUrl: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    padding: "40px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface PostFormProps {}

export const PostForm: React.FC<PostFormProps> = () => {
  const [paragraph, setParagraph] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const classes = useStyles();

  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      author: "",
      category: "",
      body: {
        title: "",
        paragraphs: [],
      },
      imageUrl: "",
    },
    onSubmit: (values: any) => {
      setButtonDisabled(true);
      // fetch(`${API_URL}/`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(values),
      // })
      console.log(values);
      // .then(() => {
      //   formik.resetForm();
      //   setButtonDisabled(false);
      // })
      // .catch((error: any) => console.error(error));
    },
  });

  const handleAddParagraph = () => {
    if (paragraph.trim() !== "") {
      formik.setValues({
        ...formik.values,
        body: {
          title: formik.values.title,
          paragraphs: [...formik.values.body.paragraphs, paragraph],
        },
      });
      setParagraph("");
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="author"
            name="author"
            label="Author"
            value={formik.values.author}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="category"
            name="category"
            select
            label="Category"
            value={formik.values.category}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          >
            {CATEGORY_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box style={{ marginTop: "10px" }}>
            <TextField
              id="paragraph"
              name="paragraph"
              label="Paragraph"
              value={paragraph}
              onChange={(event) => setParagraph(event.target.value)}
              variant="outlined"
              fullWidth
              multiline
            />
            <Button
              style={{ marginTop: "10px" }}
              variant="contained"
              color="primary"
              onClick={handleAddParagraph}
            >
              Add Paragraph
            </Button>
          </Box>
          {formik.values.body.paragraphs.map((paragraph, index) => (
            <TextField
              key={index}
              name={`paragraphs[${index}]`}
              label={`Paragraph ${index + 1}`}
              value={formik.values.body.paragraphs[index]}
              onChange={formik.handleChange}
              variant="outlined"
              fullWidth
              multiline
              margin="normal"
            />
          ))}
          <TextField
            id="imageUrl"
            name="imageUrl"
            label="Image URL"
            value={formik.values.imageUrl}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

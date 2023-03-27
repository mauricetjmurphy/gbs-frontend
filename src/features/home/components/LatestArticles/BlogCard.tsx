import { useNavigate } from "react-router";
import { ListItemButton, Typography, Box, Grid } from "@mui/material";

import { Section } from "../../types";
import { CF_IMAGE_URL } from "../../../../config";

interface BlogCardProps {
  id: string;
  title: string;
  image_url: string | undefined;
  body: Section;
}

export const BlogCard: React.FC<BlogCardProps> = (props) => {
  const navigate = useNavigate();

  console.log(`${CF_IMAGE_URL}/${props.image_url}`);

  return (
    <ListItemButton
      disableRipple
      onClick={() => {
        navigate(`/article/${props.id}`);
      }}
      sx={{
        display: "flex",
        padding: "0px",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <Box>
        {CF_IMAGE_URL && (
          <img
            src={`${CF_IMAGE_URL}/${props.image_url}`}
            alt={props.title}
            style={{ width: "100%" }}
          />
        )}
      </Box>
      <Box
        sx={{ textAlign: "left", width: "100%", padding: "10px 0px 20px 0px" }}
      >
        <Typography
          variant="h3"
          component="h1"
          color="#000"
          gutterBottom
          sx={{
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {props.title}
        </Typography>
        <Typography sx={{}} variant={"body2"} component={"p"}>
          {`${props.body.paragraphs[0].split(".")[0]}.` +
            `${props.body.paragraphs[0].split(".")[1]}.`}
        </Typography>
      </Box>
    </ListItemButton>
  );
};

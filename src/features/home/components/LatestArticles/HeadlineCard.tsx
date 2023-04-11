import { useNavigate } from "react-router";
import { Typography, Box, Button, styled } from "@mui/material";

import { formatDate } from "../../../../utils/formatDate";
import { CF_IMAGE_URL } from "../../../../config";
import { formatBodyText } from "../../../../utils/formatBodyText";

interface HeadlineCardProps {
  id: string | undefined;
  title: string;
  image_url: string | undefined;
  body: string[];
  date: string;
}

const BackButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  margin: "0px",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    backgroundColor: "transparent",
  },

  [theme.breakpoints.up("md")]: {
    padding: "0px 20px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "20px 10px",
  },
}));

export const HeadlineCard: React.FC<HeadlineCardProps> = (props) => {
  const navigate = useNavigate();

  return (
    <BackButton
      disableRipple
      fullWidth
      onClick={() => {
        navigate(`/article/${props.id}`);
      }}
    >
      <Box sx={{ width: "100%", objectFit: "contain" }}>
        <img
          src={`${CF_IMAGE_URL}/${props.image_url}`}
          alt={props.title}
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          padding: "10px 10px",
        }}
      >
        <Typography variant="subtitle1" component={"h2"}>
          {formatDate(props.date)}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "left", width: "100%" }}>
        <Typography
          variant="h2"
          component="h1"
          color="#000"
          gutterBottom
          sx={{
            fontWeight: 400,
            paddingTop: "20px",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {props.title}
        </Typography>
        <Typography sx={{}} variant={"body1"} component={"p"}>
          {formatBodyText(props.body, 500)}
        </Typography>
      </Box>
    </BackButton>
  );
};

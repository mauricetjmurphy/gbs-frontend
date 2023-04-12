import { Typography, Box } from "@mui/material";

import { formatDate } from "../../../../utils/formatDate";
import { formatBodyText } from "../../../../utils/formatBodyText";

interface HeadlineCardTextProps {
  id: string | undefined;
  title: string | undefined;
  body: string[] | undefined;
  date: string | undefined;
}

export const HeadlineCardText: React.FC<HeadlineCardTextProps> = (props) => {
  return (
    <Box width={"100%"}>
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
          {props.body && formatBodyText(props.body, 500)}
        </Typography>
      </Box>
    </Box>
  );
};

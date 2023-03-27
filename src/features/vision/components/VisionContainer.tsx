import { nanoid } from "nanoid";
import { Box, Grid, Typography } from "@mui/material";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { CF_IMAGE_URL } from "../../../config";

interface VisionProps {
  data: {
    title: string;
    untitled_list_1: string[];
  };
}

export const VisionContainer: React.FC<VisionProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <Grid
      padding={{ xs: "10px", sm: "50px" }}
      sx={{
        background: "#fff",
        marginBottom: "50px",
      }}
      container
    >
      <Grid padding={{ sm: "0px", md: "0px 15px" }} item xs={12} md={6}>
        <Box>
          <img
            src={`${CF_IMAGE_URL}/vision-medium.jpg`}
            alt={"Team photo"}
            style={{ width: "100%" }}
          />
        </Box>
      </Grid>
      <Grid
        padding={{ sm: "10px 0px", md: "0px 15px" }}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        item
        xs={12}
        md={6}
      >
        <Typography
          sx={{ paddingBottom: "30px", fontSize: "30px" }}
          variant="h1"
          component="h1"
        >
          {" "}
          {props.data.title}
        </Typography>

        {props.data.untitled_list_1.map((item) => (
          <Typography
            key={nanoid()}
            sx={{ paddingBottom: "25px", fontSize: "14px" }}
          >
            {item}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

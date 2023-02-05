import React from "react";
import Button from "@material-ui/core/Button";
import { Box, Grid, Typography, TextField } from "@mui/material";

import { useWindowSize } from "../../hooks/useWindowSize";

export const SignUp = () => {
  const windowSize = useWindowSize();

  return (
    <Grid
      sx={
        windowSize.width > 400 ? { padding: "0 100px" } : { padding: "0 20px" }
      }
      direction="row"
      container
    >
      <Grid xs={12} md={8} item sx={{ padding: "20px" }}>
        <Typography gutterBottom sx={{ fontWeight: "bold" }} variant={"body1"}>
          Sign up for our free monthly newsletter
        </Typography>
        <Typography variant="body2">
          {`We'll be in your inbox every Saturday morning with all the day’s top
          business news, inspiring stories, best advice and exclusive reporting
          from InTheKnow.`}
        </Typography>
      </Grid>
      <Grid xs={12} md={4} item sx={{ padding: "20px" }}>
        <form noValidate autoComplete="off">
          <Box sx={{ display: "flex" }}>
            <TextField
              id="newsletter-email"
              label="Email"
              type="email"
              variant="outlined"
              sx={{
                marginLeft: "25px",
                width: "70%",
                "&.MuiFormControl-root": {
                  margin: "0 15px 0 0",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{
                height: "56px",
                width: "30%",
              }}
            >
              Sign Up
            </Button>
          </Box>
          <Box sx={{ paddingTop: "20px" }}>
            <Typography
              sx={{ fontSize: "14px", color: "#4B5563" }}
              variant={"subtitle2"}
              gutterBottom
            >
              {`I understand that the data I am submitting will be used to provide
              me with the above-described products and/or services and
              communications in connection therewith.`}
            </Typography>
            <Typography
              variant={"subtitle2"}
              sx={{ fontSize: "14px", color: "#4B5563" }}
            >
              Read our privacy policy for more information.
            </Typography>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Box, Grid, Typography, TextField } from "@mui/material";

import { useWindowSize } from "../../hooks/useWindowSize";
import { API_URL } from "../../config";

export const SignUp = () => {
  const { width } = useWindowSize();
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailAddress: emailAddress }),
      });

      if (!response.ok) {
        throw new Error(`Error submitting email: ${response.statusText}`);
      }

      console.log("Email submitted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid
      sx={{
        padding: width > 600 ? "0 100px" : "0px",
      }}
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
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Box sx={{ display: "flex" }}>
            <TextField
              id="newsletter-email"
              label="Email"
              type="email"
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
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

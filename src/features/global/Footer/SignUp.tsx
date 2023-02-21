import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {
  Box,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useWindowSize } from "../../../hooks/useWindowSize";

import { SignUpForm } from "./SignUpForm";

interface AlertDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const AlertDialog: React.FC<AlertDialogProps> = (props) => {
  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Typography variant="h1" component={"h1"}>
          Congratulations!
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography sx={{ fontSize: "16px" }} variant="body2" component={"p"}>
            You have successfully signed up for our newsletter. Thank you for
            joining our community!
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.setOpen(false)}
          autoFocus
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const SignUp: React.FC = () => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AlertDialog setOpen={setOpen} open={open} />
      <Grid
        sx={{
          padding: width > 600 ? "0 100px" : "0px",
        }}
        direction="row"
        container
      >
        <Grid xs={12} md={8} item sx={{ padding: "20px" }}>
          <Typography
            gutterBottom
            sx={{ fontWeight: "bold" }}
            variant={"body1"}
          >
            Sign up for our free monthly newsletter
          </Typography>
          <Typography variant="body2">
            {`We'll be in your inbox every Saturday morning with all the day’s top
          business news, inspiring stories, best advice and exclusive reporting
          from InTheKnow.`}
          </Typography>
        </Grid>

        <Grid xs={12} md={4} item sx={{ padding: "20px" }}>
          <SignUpForm open={open} setOpen={setOpen} />
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
        </Grid>
      </Grid>
    </>
  );
};

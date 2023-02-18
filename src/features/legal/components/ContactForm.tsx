import React from "react";
import { Box, Button, TextField } from "@mui/material";

import { useWindowSize } from "../../../hooks/useWindowSize";

import { contactFormStyles } from "./contactorm.styles";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const { width } = useWindowSize();

  return (
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: width > 600 ? "row" : "column",
          margin: "10px 0px",
        }}
      >
        <input
          style={{
            minWidth: width > 600 ? "200px" : "0",
            ...contactFormStyles.inputField,
          }}
          type="text"
          name=""
          id=""
          placeholder="First Name"
        />
        <input
          style={{
            minWidth: width > 600 ? "200px" : "0",
            marginTop: width < 600 ? "10px" : "0px",
            ...contactFormStyles.inputField,
          }}
          type="text"
          name=""
          id=""
          placeholder="First Name"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: width > 600 ? "row" : "column",
          margin: "10px 0px",
        }}
      >
        <input
          style={{
            minWidth: width > 600 ? "200px" : "0",
            ...contactFormStyles.inputField,
          }}
          type="text"
          name=""
          id=""
          placeholder="Email"
        />
        <input
          style={{
            minWidth: width > 600 ? "200px" : "0",
            marginTop: width < 600 ? "10px" : "0px",
            ...contactFormStyles.inputField,
          }}
          type="text"
          name=""
          id=""
          placeholder="Phone"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: width > 600 ? "row" : "column",
          margin: "10px 0px",
        }}
      >
        <textarea
          style={{
            minWidth: width > 600 ? "440px" : "0",
            ...contactFormStyles.textAreaFiled,
          }}
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Message..."
        ></textarea>
      </Box>
      <Button variant="contained">Submit</Button>
    </form>
  );
};

export default ContactForm;

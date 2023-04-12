import { Box, Button, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import { ColorModeContext, tokens } from "../../../../theme/theme";

export const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      height={"70px"}
      width={"calc(100vw - 300px)"}
      justifyContent="space-between"
      p={2}
    >
      <Button variant="outlined" color="inherit" onClick={() => navigate("/")}>
        Home Page
      </Button>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

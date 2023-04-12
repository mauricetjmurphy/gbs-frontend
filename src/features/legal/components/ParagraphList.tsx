import { Box, List, ListItem, Typography } from "@mui/material";
import { nanoid } from "nanoid";

import { BackButton } from "../../../components";

interface ParagraphListProps {
  data: Record<string, any>;
}

export const ParagraphList: React.FC<ParagraphListProps> = (props) => {
  return (
    <Box sx={{ padding: "30px 0px" }}>
      <BackButton />
      {Object.entries(props.data).map(([key, value], index: number) => {
        return (
          <Box key={nanoid()} sx={{ padding: "10px 0px" }}>
            <Typography
              gutterBottom
              variant={"h1"}
              component={"h1"}
              sx={{ fontSize: "28px" }}
            >
              {!key.replace(/_/g, " ").includes("untitled") &&
                key.replace(/_/g, " ")}
            </Typography>

            {!key.replace(/_/g, " ").includes("untitled list") && (
              <Typography
                sx={{ fontSize: "16px" }}
                variant={"body1"}
                component={"p"}
              >
                {value}
              </Typography>
            )}

            {key.replace(/_/g, " ").includes("untitled list") && (
              <List>
                {props.data[key].map((item: string) => (
                  <Typography
                    key={nanoid()}
                    sx={{ fontSize: "16px" }}
                    variant={"body1"}
                    component={"p"}
                    gutterBottom
                  >{`• ${item}`}</Typography>
                ))}
                <ListItem></ListItem>
              </List>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

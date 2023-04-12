import { Box } from "@mui/material";

import { CF_IMAGE_URL } from "../../../../config";

interface HeadlineCardImageProps {
  image_url: string | undefined;
  title: string | undefined;
}

export const HeadlineCardImage: React.FC<HeadlineCardImageProps> = (props) => {
  return (
    <>
      <Box sx={{ width: "100%", objectFit: "contain" }}>
        <img
          src={
            props.title === ""
              ? `${props.image_url}`
              : `${CF_IMAGE_URL}/${props.image_url}`
          }
          alt={props.title}
          style={{ width: "100%" }}
        />
      </Box>
    </>
  );
};

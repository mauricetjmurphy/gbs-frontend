import { useNavigate } from "react-router";
import { Button } from "@mui/material";

import HeadlineSkeletonText from "../../../../components/Skeletons/HeadlineSkeletonText";
import { Card } from "../../types";

import { HeadlineCardImage } from "./HeadlineCardImage";
import { HeadlineCardText } from "./HeadlineCardText";

interface HeadlineCardContainerProps {
  data: Card | undefined;
}

export const HeadlineCardContainer: React.FC<HeadlineCardContainerProps> = (
  props
) => {
  const navigate = useNavigate();

  return (
    <Button
      disableRipple
      fullWidth
      sx={{
        textTransform: "none",
        margin: "0px",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: "transparent",
        },
        padding: { sm: "20px 10px", md: "0px 20px" },
      }}
      disabled={props.data?.Id === undefined}
      onClick={() => {
        navigate(`/article/${props.data?.Id}`);
      }}
    >
      {props.data?.Id !== undefined ? (
        <HeadlineCardImage
          title={props.data.Title}
          image_url={props.data.Image_url}
        />
      ) : (
        <HeadlineCardImage
          title={""}
          image_url={"/images/SM-placeholder.png"}
        />
      )}

      {props.data?.Id ? (
        <HeadlineCardText
          id={props.data?.Id}
          title={props.data?.Title}
          body={props.data?.Body}
          date={props.data?.Date}
        />
      ) : (
        <HeadlineSkeletonText />
      )}
    </Button>
  );
};

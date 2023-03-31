import React from "react";

interface CommentIconProps {
  className?: string;
}

const CommentIcon: React.FC<CommentIconProps> = (props) => (
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    viewBox="0 0 19 19"
    role="img"
    aria-label="0 comments"
  >
    <path d="M9.5,13 L15,13 C15.5522847,13 16,12.5522847 16,12 L16,12 L16,5 C16,4.44771525 15.5522847,4 15,4 L15,4 L4,4 L4,4 C3.44771525,4 3,4.44771525 3,5 L3,12 C3,12.5522847 3.44771525,13 4,13 L7,13 L7,15.5 L9.5,13 Z M15.0081158,13.973325 L10,13.973325 L7.42191625,16.5445317 C6.63661359,17.3277395 6,17.0667904 6,15.9700713 L6,13.973325 L3.99188419,13.973325 C2.89179693,13.973325 2,13.0706688 2,11.979044 L2,4.994281 C2,3.89287002 2.89339733,3 3.99188419,3 L15.0081158,3 C16.1082031,3 17,3.90265618 17,4.994281 L17,11.979044 C17,13.0804549 16.1066027,13.973325 15.0081158,13.973325 Z"></path>
  </svg>
);

export default CommentIcon;

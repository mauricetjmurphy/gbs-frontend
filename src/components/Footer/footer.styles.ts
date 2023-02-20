const BORDER_BOTTOM = "1px solid #e5e7eb";

export const footerStyles = {
  footerContainer: {
    background: "#f3f4f6",
    width: "100vw",
  },
  footerLinkSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: BORDER_BOTTOM,
  },
  footerNewsLetterSection: {
    borderBottom: BORDER_BOTTOM,
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #e5e7eb",
  },
  footerSocialSection: {
    padding: "20px",
    borderBottom: BORDER_BOTTOM,
    display: "flex",
    alignItems: "center",
  },
};

export const signUpFormStyles = {
  form: { display: "flex", flexDirection: "column" },
  conatainer: { display: "flex", alignItems: "center" },
  inputField: {
    padding: "14px 14px",
    marginRight: "10px",
    minWidth: "220px",
    border: BORDER_BOTTOM,
    borderRadius: "4px",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "1.75",
  },
  signUpButton: {
    maxHeight: "49.5px",
    padding: "16.5px 14px",
    fontSize: "16px",
  },
  error: { fontSize: "13px", color: "#f41f1f", padding: "4px" },
};

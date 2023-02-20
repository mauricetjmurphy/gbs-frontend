export const getInputStyle = (width: number) => ({
  minWidth: width > 600 ? "200px" : "0",
  marginRight: "10px",
  background: "#faf5f5",
  padding: "15px",
  border: "none",
  borderRadius: "4px",
  fontFamily: "Poppins-regular",
  fontSize: "16px",
});

export const getTextAreaStyle = (width: number) => ({
  minWidth: width > 600 ? "440px" : "0",
  background: "#faf5f5",
  padding: "15px",
  border: "none",
  borderRadius: "4px",
  fontFamily: "Poppins-regular",
  fontSize: "16px",
});

export const getErrorStyle = () => ({
  fontSize: "13px",
  color: "#f41f1f",
  padding: "4px",
});

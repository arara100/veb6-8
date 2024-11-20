import React from "react";

const ErrorMessages = ({ children }) => {
  return <div style={{ color: "red", fontSize: "14px" }}>{children}</div>;
};

export default ErrorMessages;

import React from "react";
import { Break, Button, Container, Input, Text } from "./styles/opt-form";

function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="TryNow!" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ children, ...restProps }) {
  return <Break {...restProps} />;
};

export default OptForm;

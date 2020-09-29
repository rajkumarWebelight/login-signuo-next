import React, { ReactNode } from "react";
import { Button } from "antd";

interface Props {
  label?: string;
  type: "text" | "default" | "primary";
  onClick?: () => void;
  className?: string;
}

function MyButton(props: Props) {
  const { label, type, onClick, className } = props;
  return (
    <Button className={className} onClick={onClick} type={type}>
      {label}
    </Button>
  );
}

export default MyButton;

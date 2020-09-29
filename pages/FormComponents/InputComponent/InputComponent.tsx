import React, { ReactNode } from "react";
import { Field } from "formik";

interface Props {
  name: string;
  placeholder: string;
  type?: string;
  onkeyHandle?: () => void;
  className?: String;
}
const TextInput = (props: Props) => {
  const { name, placeholder, type, onkeyHandle, className } = props;
  return (
    <div className="loginDiv">
      {/* {placeholder} */}
      <Field
        placeholder={placeholder}
        type={type}
        name={name}
        className={className}
        onKeyPress={(event: KeyboardEvent) => {
          if (event.key === "Enter") {
            if (onkeyHandle) onkeyHandle();
          }
        }}
      />
    </div>
  );
};

export default TextInput;

import * as React from "react";
import { useState } from "react";
import "./FormInput.css";

interface IFormInput {
  id: number;
  name: string;
  placeholder: string;
  errorMessage: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props: IFormInput) => {
  const [focused, setFocused] = useState<boolean>(false);
  const { errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (_e: React.FocusEvent) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

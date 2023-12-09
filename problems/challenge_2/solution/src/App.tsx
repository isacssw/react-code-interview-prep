import * as React from "react";
import { useState } from "react";

import "./App.css";
import FormInput from "./components/FormInput";

export interface FormInfo {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const App = () => {
  const [values, setValues] = useState<FormInfo>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "at least 3 characters!",
      pattern: "^[A-Za-z0-9]{3,}$", //regex to check => at least 3 characters A-Z uppercase and lowercase and numbers
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "must be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "at least 6 characters!",
      pattern: `^[A-Za-z0-9]{6,}$`, //regex to check => at least 6 characters A-Z uppercase and lowercase and numbers
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: values.password, // confirm password needs to be equal password
      required: true,
    },
  ];

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(values);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Controlled Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name as keyof FormInfo]}
            onChange={onChange}
          />
        ))}
        <button disabled={Object.values(values).some((input) => input === "")}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

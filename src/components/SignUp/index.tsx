import { useState } from "react";
import { signUpFields } from "../../helpers/constants";
import FormAction from "../FormAction";
import FormExtra from "../FormExtra";
import Input from "../Input";

const fields = signUpFields;
let fieldsState: { [x: string]: string } = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignUp() {
  const [SignUpState, setSignUpState] = useState(fieldsState);

  const handleChange = (e: { target: { id: string; value: string } }) => {
    setSignUpState({ ...SignUpState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {
    console.log(SignUpState);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Input
          key={field.id}
          handleChange={handleChange}
          value={SignUpState[field.id]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      <FormExtra accountCreation={true} />
      <FormAction handleSubmit={handleSubmit} text="SignUp" />
    </form>
  );
}

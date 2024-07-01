import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
} from "react";
import { Input as StyledInput } from "./Input.styled";

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange"
  > {
  handleChange: (value: string) => void;
  handleSubmit?: () => void;
}

export const Input = ({
  handleChange,
  value,
  placeholder,
  handleSubmit,
  ...rest
}: InputProps) => {
  const handleKeyUp = (e: KeyboardEvent) => {
    if (handleSubmit && e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <StyledInput
      type="text"
      placeholder={placeholder ?? "Input"}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      onKeyUp={handleKeyUp}
      {...rest}
    />
  );
};

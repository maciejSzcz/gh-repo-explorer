import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Input as StyledInput } from "./Input.styled";

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange"
  > {
  handleChange: (value: string) => void;
}

export const Input = ({
  handleChange,
  value,
  placeholder,
  ...rest
}: InputProps) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder ?? "Input"}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      {...rest}
    />
  );
};

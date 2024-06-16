import { Button } from "./SubmitButton.styled";

interface SubmitButtonProps {
  handleSubmit: () => void;
  buttonText: string;
}

export const SubmitButton = ({
  handleSubmit,
  buttonText,
}: SubmitButtonProps) => {
  return (
    <Button onClick={handleSubmit} type="submit" aria-label="submit">
      {buttonText}
    </Button>
  );
};

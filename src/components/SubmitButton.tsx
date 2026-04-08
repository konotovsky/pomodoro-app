import { Button } from "@/components/ui/button";

interface SubmitButton {
  onClick: () => void;
}

function SubmitButton({ onClick }: SubmitButton) {
  return <Button onClick={onClick}>Apply</Button>;
}

export { SubmitButton };

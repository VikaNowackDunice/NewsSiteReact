import { Dialog } from "@mui/material";
import { LoginForm } from "./LoginForm";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

export const LoginModal = (props: LoginModalProps) => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <LoginForm onClose={props.onClose} />
    </Dialog>
  );
};

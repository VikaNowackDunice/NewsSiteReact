import { Dialog } from "@mui/material";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm"

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

type RegisterModalProps = {
  open: boolean;
  onClose: () => void;
};


export const LoginModal = (props: LoginModalProps) => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <LoginForm onClose={props.onClose} />
    </Dialog>
  );
}

export const RegisterModal = (props: RegisterModalProps) => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <RegisterForm onClose={props.onClose} />
    </Dialog>
  );
};

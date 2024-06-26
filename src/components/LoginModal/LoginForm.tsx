import { Button, TextField } from "@mui/material";
import React, { useState, FC } from "react";

type LoginFormProps = {
  onClose: () => void;
};

export const LoginForm: FC<LoginFormProps> = (props) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    try {
      console.log("form", login, email, password);
      // send requst to API

      props.onClose();
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <TextField
        label="Логин"
        variant="filled"
        required
        value={login}
        onChange={e => setLogin(e.target.value)}
        style={{ margin: "1rem", width: "300px" }}
      />

      <TextField
        label="Email"
        type="email"
        variant="filled"
        required
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        style={{ margin: "1rem", width: "300px" }}
      />

      <TextField
        label="Пароль"
        type="password"
        variant="filled"
        required
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        style={{ margin: "1rem", width: "300px" }}
      />

      <div>
        <Button variant="contained" sx={{ margin: "2rem" }}>
          Отмена
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "2rem" }}
        >
          Войти
        </Button>
      </div>
    </form>
  );
};

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { stackStyles } from "./style";

interface ErrorComponentProps {
  value: string;
  severity: "info" | "error";
}

export default function ErrorComponent({
  value,
  severity,
}: ErrorComponentProps) {
  return (
    <Stack spacing={2} sx={stackStyles}>
      <Alert variant="filled" severity={severity}>
        {value}
      </Alert>
    </Stack>
  );
}

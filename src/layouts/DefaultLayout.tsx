import { Box } from "@mui/material";
import { AppLayout } from "src/layouts";

const DefaultLayout: AppLayout = ({ children }) => {
  return (
    <Box component="main" id="main-root">
      {children}
    </Box>
  );
};

export default DefaultLayout;

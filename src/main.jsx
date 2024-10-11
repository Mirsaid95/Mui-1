import { ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <ThemeProvider>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </BrowserRouter>
  </>
);

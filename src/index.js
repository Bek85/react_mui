import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";

const app = document.getElementById("app");
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
ReactDOM.render(<App />, app);

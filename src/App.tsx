import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./router";
import "./index.css";

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

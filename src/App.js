import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routes/routes.js";

export default function App() {
  return (
    <BrowserRouter>
      <RouterApp/>
    </BrowserRouter>
  );
}

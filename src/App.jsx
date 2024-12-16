import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

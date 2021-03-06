import "./styles.css";

import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

import { Provider } from "react-redux";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import LadingPage from "./pages/LadinPage";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

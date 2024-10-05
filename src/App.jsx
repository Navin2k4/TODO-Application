import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateToDo from "./pages/CreateToDo";
import ViewToDo from "./pages/ViewToDo";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateToDo />} />
        <Route path="/view" element={<ViewToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

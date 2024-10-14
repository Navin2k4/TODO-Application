import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateToDo from "./Pages/CreateToDo";
import ShowToDo from "./Pages/ShowToDo";
import Navbar from "./Components/Navbar";
import EditToDo from "./Pages/EditToDo";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<ShowToDo />} />
        <Route path="/create" element={<CreateToDo />} />
        <Route path="/edit/:todoindex" element={<EditToDo />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

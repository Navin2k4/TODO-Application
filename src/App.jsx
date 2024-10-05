import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateToDo from "./pages/CreateToDo";
import ViewToDo from "./pages/ViewToDo";

export default function App() {
  return (
    /**
     * Wraps the application inside a `BrowserRouter` to enable routing.
     * Defines the routes for the application using the `Routes` and `Route` components.
     *
     * - "/" : Renders the `Home` component.
     * - "/create" : Renders the `CreateToDo` component.
     * - "/view" : Renders the `ViewToDo` component.
     */
    <BrowserRouter>
      {/* Navigation bar component rendered on all pages */}
      <NavBar />
      <Routes>
        {/* Routes that determine which page component to render based on the URL */}
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateToDo />} />
        <Route path="/view" element={<ViewToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

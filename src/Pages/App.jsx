import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import CreateToDo from "./Pages/CreateToDo"
import ShowToDo from "./Pages/ShowToDo"
import Navbar from "./Components/Navbar"

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/todos' element ={<ShowToDo />} />
        <Route path='/create' element ={<CreateToDo />} />
        <Route path='/edit/:index' element ={<EditToDo />} />
      </Routes>
    </BrowserRouter>
  )
}
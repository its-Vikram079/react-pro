import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./componets/home/Home"
import Careers from "./componets/careers/Careers.jsx"
import About from "./componets/about/About.jsx"
import AllUsers from "./componets/allUsers/AllUsers.jsx"
import CreateUsers from "./componets/createUsers/CreateUsers.jsx"
import Contact from "./componets/contact/Contact.jsx"
import EditUsers from "./componets/editusers/EditUsers.jsx"
import toast, { Toaster } from "react-hot-toast"

import Navbar from "./componets/navbar/Navbar.jsx"
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Toaster/>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/careers" element={<Careers/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/createusers" element={<CreateUsers/>}/>
            <Route path="/allusers" element={<AllUsers/>}/>
            <Route path="/edit/:id" element={<EditUsers/>}/>


        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App

/* eslint-disable no-unused-vars */

import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app  h-screen">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home /> } />
            <Route path="/skills" element={<Skills /> }  />
            <Route path="/projects" element={<Projects /> } /> 
            <Route path="/about" element={<About /> } />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
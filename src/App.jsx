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
            <Route path="my-portfolio/" element={<Home /> } />
            <Route path="my-portfolio/skills" element={<Skills /> }  />
            <Route path="my-portfolio/projects" element={<Projects /> } /> 
            <Route path="my-portfolio/about" element={<About /> } />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
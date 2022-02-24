import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Logo from "./comp/logo.js"
import Logo2 from "./comp/logo2.js"
import Contact from "./comp/Contact.js"
import Header from "./comp/Header.js"
import Projects from "./comp/projects.js"

function App() {
  return (
    <div className="App">
     
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Logo />}> </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about_me" element={<Logo2 />} />
        <Route path="/contact" element={<Contact />} />
     
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

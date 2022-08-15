import { useContext } from "react";
import {
    Routes,
    Route
  } from "react-router-dom";
import { ThemeContext } from "./Theme";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";

import "./App.css";

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <Routes>
        <Route path="/" element={[
            <Navbar/>, 
            <Home/>,
            <Footer/>
          ]}
        />
        <Route path="/Skills" element={[
            <Navbar/>,
            <Skills/>,
            <Footer/>
          ]}
        />
        <Route path="/Projects" element={[
            <Navbar/>,
            <Projects/>,
            <Footer/>
          ]}
        />
        <Route path="/Contact" element={[
            <Navbar/>,
            <ContactMe/>,
            <Footer/>
          ]}
        />
      </Routes>
    </div>
  );
}

export default App;

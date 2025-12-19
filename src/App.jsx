import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Services from "./pages/services/Services/Services.jsx";
import MernStack from "./pages/services/MernStack/MernStack.jsx";
import MsOffice from "./pages/services/MsOffice/MsOffice.jsx";
import VideoEditing from "./pages/services/VideoEditing/VideoEditing.jsx";

const App = () => {
  return (
    <>
      <Navbar />
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/skills" element={<Skills />} />

  {/* Nested Services Routes */}
  <Route path="/services" element={<Services />}>
    <Route path="mern-stack" element={<MernStack />} />
    <Route path="ms-office" element={<MsOffice />} />
    <Route path="video-editing" element={<VideoEditing />} />
  </Route>
</Routes>

      <Footer />
    </>
  )
}

export default App
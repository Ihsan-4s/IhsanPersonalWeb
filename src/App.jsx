import './App.css'
import Sidebar from './components/Sidebar'
import Layout from './Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}

export default App

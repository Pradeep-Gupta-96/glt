import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import About from './pages/About'
import Service from './pages/Service'
import Resource from './pages/Resource'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Landingpage />} />

      {/* Example extra routes (you can add your own components later) */}
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/resource" element={<Resource />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App

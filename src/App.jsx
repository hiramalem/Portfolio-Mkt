import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/Header/Navbar"
import Hero from "./assets/Hero/Hero"
import PortCopy from "./assets/Tabs/Copywriting/PortCopy"
import PortGrowth from "./assets/Tabs/Growth/PortGrowth"
import PortLicensing from "./assets/Tabs/Licensing/PortLicensing"

import Navtabs from "./assets/Tabs/Navtabs"
import Certifications from "./assets/Header/Certifications/Certifications"
import About from "./assets/Header/About/About"


function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <Navtabs/>
      <Routes>
        <Route path="/" element={<PortCopy/>}/>
        <Route path="/Copywriting" element={<PortCopy/>}/>
        <Route path="/Growth" element={<PortGrowth/>}/>
        <Route path="/Licensing" element={<PortLicensing/>}/>        
        <Route path="/Certifications" element={<Certifications/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Navbar from "./assets/Header/Navbar"
import Hero from "./assets/Hero/Hero"
import PortCopy from "./assets/Tabs/Copywriting/PortCopy"
import PortGrowth from "./assets/Tabs/Growth/PortGrowth"

import Navtabs from "./assets/Tabs/Navtabs"


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
        <Route/>
      </Routes>
    </>
  )
}

export default App

import './App.css'
import Header from './componets/Header2'
import Dashboard from './componets/Dashboard'
import Incidents from './componets/Incidents'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Location from './componets/Location'
import Incidents2 from './componets/Incidents2'
import Incidents3 from './componets/Incidents3'
import Incidents4 from './componets/Incidents4'
import Incidents5 from './componets/Incidents5'


function App() {

  return (
  <>
     <BrowserRouter>
      <Routes>
        <Route path="" element={<Header/>}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Incidents" element={<Incidents/>} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Incidents2" element={<Incidents2 />} />
          <Route path="/Incidents3" element={<Incidents3 />} />
          <Route path="/Incidents4" element={<Incidents4 />} />
          <Route path="/Incidents5" element={<Incidents5 />} />
        </Route>
      </Routes>
    </BrowserRouter>

    {/* <Header/>
    <Dashboard/> */}
  </>
  )
}

export default App

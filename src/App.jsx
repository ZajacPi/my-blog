export default App
import './css/App.css'
import Home from  './pages/Home'
import MyProjects from './pages/MyProjects'
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<MyProjects/>}/>
        </Routes>
      </main>
    </div>
  );
}


export default App
import './App.css'
import Project from './components/Project'
import Home from  './pages/Home'
import MyProjects from './pages/Projects'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<MyProjects/>}/>
      </Routes>
    </main>
  );
}


import { Link } from "react-router-dom"
export default function NavBar({ pages }){
    return(
        <nav>
            <div className="navbar-brand">
                <Link to="/">My blog</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link"> Home </Link>
                <Link to="/projects" className="nav-link"> Projects </Link>
            </div>
        </nav>
    )

}
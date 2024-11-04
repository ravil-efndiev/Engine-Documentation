import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
        <ul className="flex justify-between items-center">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/tutorials">Tutorials</Link>
          </li>
          <li className="mx-4">
            <a href="https://github.com/ravil-efndiev" target="_blank">Git Hub</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;

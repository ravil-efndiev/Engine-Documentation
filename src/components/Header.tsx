import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { useAdaptiveMenu } from "../utils/adaptiveMenu";

function Header() {
  const { menuOpen, setMenuOpen, menuRef, switchButtonRef } = useAdaptiveMenu();

  return (
    <header className="header">
      <div className="container">
        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
        <nav ref={menuRef} className={menuOpen ? "header__menu burger-menu" : "header__menu"}>
          <Link to="/" className="mx-4">Home</Link>
          <Link to="/tutorials" className="mx-4">Tutorials</Link>
          <a href="https://github.com/ravil-efndiev" target="_blank" className="mx-4">Git Hub</a>
        </nav>
        <div 
          className="header__burger-button"
          ref={switchButtonRef}
          onClick={() => setMenuOpen(m => !m)}
        >
          ☰
        </div>
      </div>
    </header>
  )
}

export default Header;

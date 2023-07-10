import { useState } from "react";
import Search from "./Search";
import logo from "../img/logo.png";
import { useNavigate, Link } from "react-router-dom";
import sprite from "../img/sprites.svg";
import Navbar from "../nav/Navbar";


function Header() {
  
  const navigate = useNavigate();
  function redirectHome() {
    navigate("/");
  }

  const [isBurgerActive, setBurgerActive] = useState(false);
  function toggleBurger() {
    setBurgerActive(!isBurgerActive);
  }

  const [isSearchActive, setSearchActive] = useState(false);
  function toggleSearch() {
    setSearchActive(!isSearchActive);
  }

  return (
    <header >
      <div className={isBurgerActive ? 'header active' : 'header'}>
        <div 
          className="logo" 
          onClick={redirectHome}
        >
          <img src={logo} alt="logo"></img>
        </div>
        <Navbar />

        <div className="btn">
          <button><svg><use href={sprite + "#favorite"} /></svg></button>
          <button onClick={toggleSearch}><svg><use href={sprite + "#search"} /></svg></button>
          <Link to='/login'><button><svg><use href={sprite + "#user_cabinet"} /></svg></button></Link>
        </div>

        <div className={isSearchActive ? 'search-active' : 'search'}>
          <Search />
        </div>
        <div 
          className={isBurgerActive ? "burger-menu burger-menu-active" : "burger-menu"} 
          onClick={toggleBurger}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
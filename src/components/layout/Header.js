import { useState } from "react";
import MainMenu from "../nav/MainMenu";
import Search from "./Search";
import logo from "../img/logo.png";
// import { getFabUtilityClass } from "@mui/material";
import { useNavigate } from "react-router-dom";
import sprite from "../img/sprites.svg";

const links = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "Movies",
      path: "/movies",
    },
    {
      link: "About",
      path: "/about",
    },
    {
      link: "Contacts",
      path: "/contacts",
    },

]

function Header() {
  const [isBurgerActive, setBurgerActive] = useState(false);
  const navigate = useNavigate();

  function toggleBurger() {
    setBurgerActive(!isBurgerActive);
  }
  
  function redirectHome() {
    navigate("/");
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
        <MainMenu links={links}/>

        <div className="btn">
          <button><svg><use href={sprite + "#favorite"} /></svg></button>
          <button><svg><use href={sprite + "#search"} /></svg></button>
          <button><svg><use href={sprite + "#user_cabinet"} /></svg></button>
        </div>


        <div className="search">
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
// Link allow prevents reloading pages, navLink = the same + add the class='active' to active page
import { NavLink } from 'react-router-dom';
import {useState, useRef} from "react";
import Dropdown from './Dropdown';

const NavItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const onMouseEnter = () => {
    window.innerWidth > 768 && setDropdown(true);
  };
   
  const onMouseLeave = () => {
    window.innerWidth > 768 && setDropdown(false);
  };
   
  return (
    <li className="menu-items" ref={ref}
        onClick={closeDropdown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
      {items.submenu ? (
        <>
          <NavLink to={items.path} 
            role="button" 
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.link}{' '}
          </NavLink>
          <Dropdown 
            submenus={items.submenu} 
            dropdown={dropdown} 
          />
        </>
      ) : (
        <NavLink to={items.path}>{items.link}</NavLink>
      )}
    </li>
  );
};

export default NavItems;
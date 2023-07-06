import NavItems from './NavItems';

const menuItems = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "Movies",
    path: "#",
    submenu: [
      {
        link: "Popular",
        path: "/popular",    
      },
      {
        link: "Movies list",
        path: "/movies",  
      }
    ]
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

const Navbar = () => {

  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <NavItems 
                    items={menu} 
                    key={index} 
                  />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
// Link allow prevents reloading pages, navLink = the same + add the class='active' to active page
import { NavLink } from 'react-router-dom';

function MainMenu (props) {
  const listItems = props.links.map((item, index) => 
    <li key={index}>
      <NavLink to={ item.path }>{ item.link }</NavLink>
    </li>
  );

  return (
    <nav>
      <ul>{ listItems }</ul>
    </nav>
  );  
};


MainMenu.defaultProps = {
  links: [
    {
      link: "Link",
      path: "/",
    },
    {
      link: "Link",
      path: "/",
    },
    {
      link: "Link",
      path: "/",
    },
    {
      link: "Link",
      path: "/",
    },
  ]
}

export default MainMenu;
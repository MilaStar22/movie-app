// Link allow prevents reloading pages, navLink = the same + add the class='active' to active page
import { Link } from 'react-router-dom';
import defaultImg from '../img/instagram-icon.png';

function NavWithImg (props) {
  const listItems = props.links.map((item, index) => {
    if (item.img) {
      return (    
      <li key={index}>
        <Link to={ item.path }>
          <img src={item.img} alt={ item.link } />
          <span>{ item.link }</span>
        </Link>
      </li>
      )
    } else {
      return (
      <li key={index}>
        <Link to={ item.path }>{ item.link }</Link>
      </li>
      )
    }
  });

  return (
    <nav className={props.class ? props.class : 'default'}>
      <ul>{ listItems }</ul>
    </nav>
  );  
};


NavWithImg.defaultProps = {
  class: 'nav',
  links: [
    {
      link: "Link",
      path: "/",
      img: defaultImg,
    },
    {
      link: "Link",
      path: "/",
      img: defaultImg,
    },
    {
      link: "Link",
      path: "/",
      img: defaultImg,
    },
    {
      link: "Link",
      path: "/",
      img: defaultImg,
    },
  ]
}

export default NavWithImg;
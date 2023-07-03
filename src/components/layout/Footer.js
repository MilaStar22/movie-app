// import sprite from "../img/sprites.svg";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NavWithImg from "../nav/NavWithImg";
import instagram from "../img/instagram-icon.png";
import facebook from "../img/facebook-icon.png";
import twitter from "../img/twitter-icon.png";
import youtube from "../img/youtube-icon.png";
import logo from "../img/logo.png";
import footer_bg from "../img/footer_bg.jpeg";

const links = {
  class: 'social',
  links: [
    {
      link: "instagram",
      path: "/",
      img: instagram
    },
  {
    link: "facebook",
    path: "/movies",
    img: facebook
  },
  {
    link: "twitter",
    path: "/movies",
    img: twitter
  },
  {
    link: "youtube",
    path: "/movies",
    img: youtube
  },
  ]
};
const currentYear = new Date().getFullYear();

const email = {
  mail: 'hello@faimemedia.com',
  description: 'Response within 24hrs'
};
const phone = {
  phone: '+91 555 0303 420',
  description: 'Mon - Fri / 9 am - 5:30 pm'
}
const address = {
  title: 'United State Office Address',
  description: 'Wootton Grange 477-463 Broadway, NY 10013, Bournemoth, BH1 1PJ'
}

function Footer() {
  const navigate = useNavigate();
  function redirectHome() {
    navigate("/");
  }

  return (
    <footer>
      <div className='footer-top container'>
        <div className='mail'>
          <a href="mailto: email.mail">{email.mail}</a>
          <span>{email.description}</span>
        </div>
        <div className='phone'>
          <a href="tel: phone.phone">{phone.phone}</a>
          <span>{phone.description}</span>
        </div>
      </div>
      <div className="footer-wrapper">
        <img className="bg" src={footer_bg} alt={footer_bg} />
        <div className="footer-content container">
            <img className="logo" src={logo} alt="logo" onClick={redirectHome}/>
          <div className="address">
            <h2>{address.title}</h2>
            <p>{address.description}</p>
          </div>
          <NavWithImg links={links.links}  class={links.class}/>
        </div>
      </div>
      <div className="footer-copyright container">
        <div className='left'>© {currentYear} <Link to={'/'}>Faime</Link> All Rights Reserved</div>
        <div className='right'>
          <Link to={'/'}>Private Policy</Link>
          <span></span>
          <Link to={'/'}>Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

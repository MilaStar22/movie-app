import contactsbg from "../img/contacts-bg.png";
import { Link } from 'react-router-dom';
import SendForm from "./Form";
import GoogleMap from "./GoogleMap";

function Contacts() {
  return (
    <div className="contacts_wrapper">
      <div className="contacts">
        <img src={contactsbg} alt="background" />
        <div className="contacts_content">
          <h1>Contacts Us</h1>
          <div className="subtitle">
            <Link to={'/'}>Home</Link>
            <span>|</span>
            <Link to={'/'}>Contacts</Link>
          </div>
        </div>
      </div>
      <SendForm />
      <GoogleMap />
    </div>
  );
}

export default Contacts;

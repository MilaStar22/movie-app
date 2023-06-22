import contactsbg from "../img/contacts-bg.png";
import { Link } from 'react-router-dom';

function Contacts() {
  return (
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
  );
}

export default Contacts;

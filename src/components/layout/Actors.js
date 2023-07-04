import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Contacts() {
  const [showText, setShowText] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contacts_wrapper">
      <div className="contacts">
        <div className="contacts_content">
          <h1 className={`hidden ${showText ? 'appear' : ''}`}>Contacts Us</h1>
          <div className="subtitle">
            <Link to={'/'}>Home</Link>
            <span>|</span>
            <Link to={'/'}>Contacts</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

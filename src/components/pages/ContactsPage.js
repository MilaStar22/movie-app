import { useEffect } from "react";
import Contacts from "../layout/Contacts";

function ContactsPage () {
  useEffect( () => {
    document.title = 'Contacts';
  }, []);

  return (
    <Contacts />
  )
}

export default ContactsPage;
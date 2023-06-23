import { useEffect } from "react";
import About from "../layout/About";

function AboutPage () {
  useEffect( () => {
    document.title = 'About';
  }, []);
  
  return (
    <div>
      <About />
    </div>
  )
}

export default AboutPage;
import { useEffect } from "react";

function AboutPage () {
  useEffect( () => {
    document.title = 'About';
  }, []);

  return (
    <div>About Page</div>
  )
}

export default AboutPage;
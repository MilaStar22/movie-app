import { useEffect } from "react";
import MainSlider from "../layout/MainSlider";

function HomePage () {
  useEffect( () => {
    document.title = 'Home';
  }, []);

  return (
    <MainSlider />
  )
}

export default HomePage;
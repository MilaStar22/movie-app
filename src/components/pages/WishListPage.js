import { useEffect } from "react";
import WishList from "../layout/WishList";

function WishListPage () {
  useEffect( () => {
    document.title = 'WishList';
  }, []);

  return (
    <WishList />
  )
}

export default WishListPage;
import WishList from "../layout/WishList";
import { useEffect } from "react";

function WishListPage () {
  useEffect( () => {
    document.title = 'WishList';
  }, []);

  return (
    <WishList />
  )
}

export default WishListPage;
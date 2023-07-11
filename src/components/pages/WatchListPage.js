import WatchList from "../layout/WatchList";
import { useEffect } from "react";

function WatchListPage () {
  useEffect( () => {
    document.title = 'WatchList';
  }, []);

  return (
    <WatchList />
  )
}

export default WatchListPage;
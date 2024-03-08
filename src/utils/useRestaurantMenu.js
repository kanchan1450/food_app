import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const useRestroMenu = () => {
  const { resId } = useParams(); // dynamic param gives in form of object

  const [restroMenu, setRestroMenu] = useState(null);

  useEffect(() => {
    fetchRestroMenu();
  }, []);

  const fetchRestroMenu = async () => {
    try {
      const data = await fetch(
        // swiggy restroMenu api
        // MENU_API + resId

        // bypass cors proxy api
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=" +
          resId
      );
      const json = await data.json();
      setRestroMenu(json?.data);
    } catch (err) {
      console.log("Restro menu Error: " + err);
    }
  };

  return restroMenu;
};

export default useRestroMenu;
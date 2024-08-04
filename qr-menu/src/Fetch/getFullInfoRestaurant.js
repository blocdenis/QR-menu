import { RESTAURANT_GET } from "./settings";
const getFullInfoRestaurant = async (navigate, to = null) => {
    const checkUserResponse = await fetch(RESTAURANT_GET, {method: "GET", credentials: "include"})
    const checkUser = await checkUserResponse.json();
    return checkUser
};

export default getFullInfoRestaurant;
  
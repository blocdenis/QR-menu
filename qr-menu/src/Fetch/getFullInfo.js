import { USER_GET_FULL_INFO } from "./settings";
const getFullInfoUser = async (navigate, to = null) => {
    const checkUserResponse = await fetch(USER_GET_FULL_INFO, {method: "GET", credentials: "include"})
    const checkUser = await checkUserResponse.json();
    return checkUser
};

export default getFullInfoUser;
  
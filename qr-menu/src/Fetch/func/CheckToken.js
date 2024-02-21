import {USER_LOGIN_BY_TOKEN} from "../settings"


const checkToken = async (navigate, to = null) => {
    const checkUser = await fetch(USER_LOGIN_BY_TOKEN, {method: "GET", credentials: "include"})

    if (!checkUser.ok) {
      navigate("/");
    }

    if (to && checkUser.ok) {
      navigate(to)
    }
};

export default checkToken;
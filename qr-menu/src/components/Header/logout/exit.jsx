import Cookies from "js-cookie";
import {USER_DELETE_SESSION, COOKIE_KEY} from "../../../Fetch/settings";


export const logout = async () => {
    const out = await fetch(USER_DELETE_SESSION, {method: "DELETE", credentials: "include"})

    if (!out.ok) {
        throw new Error("Помилка під час виходу з сессії");
    } else {
        Cookies.remove(COOKIE_KEY)
    }
}
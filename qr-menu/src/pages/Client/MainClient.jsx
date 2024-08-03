import { CLIENT_PAGE } from "../../Fetch/settings.js";
import { RestaurantHome } from "./RestaurantHome/Init.jsx";
import ClientData from "./ClientData.jsx";

export default function MainClient() {
    return (
        <ClientData fetchUrl={CLIENT_PAGE}>
            <RestaurantHome />
        </ClientData>
    );
}





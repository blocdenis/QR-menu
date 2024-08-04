import { CLIENT_PAGE } from "../../Fetch/settings.js";
import { RestaurantMenu } from "./RestaurantMenu/Init.jsx";
import ClientData from "./ClientData.jsx";

export default function MenuClient() {
    return (
        <ClientData fetchUrl={CLIENT_PAGE}>
               <RestaurantMenu/>
        </ClientData>
    );
}

import { CLIENT_PAGE } from "../../../Fetch/settings.js";
import  { RestaurantCategory }  from "./Init.jsx";
import ClientData from "../ClientData.jsx";

export default function ClientCategory() {
    return (
        <ClientData fetchUrl={CLIENT_PAGE}>
            <RestaurantCategory/>
        </ClientData>
    )
}
import { CLIENT_PAGE } from "../../../Fetch/settings.js";
import  { RestaurantDish }  from "./Init.jsx"
import ClientData from "../ClientData.jsx";


export default function ClientDish() {
    return (
        <ClientData fetchUrl={CLIENT_PAGE}>
               <RestaurantDish/>
        </ClientData>
    )

}
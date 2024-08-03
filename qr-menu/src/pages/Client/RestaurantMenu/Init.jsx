
import { ReastaurantDataContext } from "../ClientData";
import { ClientFooter } from "../components/Footer";
import { ClientHeader } from "../components/Header";
import { ClientSearch } from "../components/Search";
import { ListRestaurantMenu } from "./ListRestaurantMenu";
import { useContext } from "react";



export const RestaurantMenu = () => {
    const data = useContext(ReastaurantDataContext);

    if (!data) return <h1 style={{ height: "100vh", textAlign: "center" }}>
        Restaurant not found.
    </h1>;

    return (
        <div style={{ width: "393px", margin: "0 auto" }}>
            <ClientHeader />
            <ClientSearch />
            <ListRestaurantMenu />
            <ClientFooter />
        </div>
    )

}



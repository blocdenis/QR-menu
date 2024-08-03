import { ReastaurantDataContext } from "../ClientData";
import { ClientFooter } from "../components/Footer";
import { ClientHeader } from "../components/Header";
import { useContext } from "react";
import { DishDetail } from "./DishDetail";




export const RestaurantDish = () => {
    const data = useContext(ReastaurantDataContext);

    if (!data) return <h1 style={{height: "100vh", textAlign: "center"}}>
        Restaurant not found.
    </h1>;

    return (
        <div style={{ width: "393px", margin: "0 auto"}}>  
            <ClientHeader/>
            <DishDetail/>
            <ClientFooter/>
        </div>
    )


}
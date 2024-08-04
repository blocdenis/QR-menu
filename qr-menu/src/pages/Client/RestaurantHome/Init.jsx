import { WelcomeScreen } from "./WelcomeScreen"
import { ReastaurantDataContext }  from "../ClientData";
import { ClientFooter } from "../components/Footer";
import { useContext } from "react";



export const RestaurantHome = () => {
    const data = useContext(ReastaurantDataContext);

    if (!data) return <h1 style={{height: "100vh", textAlign: "center"}}>
        Restaurant not found.
    </h1>;

    return (
        <div style={{ width: "393px", margin: "0 auto"}}>  
            <WelcomeScreen/>
            <ClientFooter/>
        </div>
    )

}
import { ReastaurantDataContext } from "./RestaurantCategory.jsx";
import { ClientFooter } from "./Footer.jsx";
import { ClientHeader } from "./Header.jsx";
import { ClientSearch } from "../RestaurantMenu/Search.jsx"

import { useContext } from "react";
import { CategoryDetail } from "./CategoryDetail.jsx";



export const RestaurantCategory = () => {
    const data = useContext(ReastaurantDataContext);

    if (!data) return <h1 style={{height: "100vh", textAlign: "center"}}>
        Restaurant not found.
    </h1>;

    return (
        <div style={{ width: "393px", margin: "0 auto"}}>  
            <ClientHeader/>
            <ClientSearch/>
            <CategoryDetail/>

            <ClientFooter/> 
        </div>
    )


}
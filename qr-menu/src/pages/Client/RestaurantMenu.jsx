import { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CLIENT_PAGE } from "../../Fetch/settings.js";
import  { RestaurantMenu }  from "./RestaurantMenu/Init.jsx";
import axios from "axios";


export const ReastaurantDataContext = createContext()


export default function MenuClient() {
    const [data, setData] = useState();
    const { restaurant, id, table } = useParams()

    useEffect(() => {

        axios.get(
            CLIENT_PAGE(restaurant, id, table)
        )
        .then(response => {
            if (response.status === 200) {
                const jsonData = response.data;
                jsonData.table = table;
                setData(jsonData);
            };
        })
        .catch(err => {
            throw Error(err)
        })


    }, [restaurant, id, table])


    return (
        <>
            <ReastaurantDataContext.Provider value={data}>
               <RestaurantMenu/>
            </ReastaurantDataContext.Provider>
        </>
    )

}

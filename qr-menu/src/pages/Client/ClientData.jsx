import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ReastaurantDataContext = createContext();

const ClientData = ({ children, fetchUrl }) => {
    const [data, setData] = useState(); 
    const { restaurant, id, table } = useParams(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fetchUrl(restaurant, id, table));
                if (response.status === 200) {
                    const jsonData = response.data;
                    jsonData.table = table;
                    setData(jsonData); 
                }
            } catch (error) {
                console.error("Error fetching data:", error); 
            }
        };

        fetchData(); 
    }, [fetchUrl, restaurant, id, table]);

    return (
        <ReastaurantDataContext.Provider value={data}>
            {children}
        </ReastaurantDataContext.Provider>
    );
};

export default ClientData; 
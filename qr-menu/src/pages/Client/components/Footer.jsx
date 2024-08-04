import { useContext } from "react";
import { ReastaurantDataContext }  from "../ClientData";
import { BsGeoAlt } from "react-icons/bs";




const style = {
    td: (side) =>  {
        return {
            textAlign: side,
            padding: "8px"
        }
    }
}


export const ClientFooter = () => {
    const data = useContext(ReastaurantDataContext);

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]

    const start = days.indexOf(data.start_day);
    const end = days.indexOf(data.end_day);

    const workDates = days.slice(start, end + 1);

    return (
        <> 
            <div
                style={{
                    backgroundColor: "#EEFCFC",
                    borderTopColor: "#000",
                    borderTopWidth: "3px",
                    height: "100%",
                }}
            >

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "1.5rem"
                    }}
                >
                    <BsGeoAlt size={25} />
                    <div>
                        <p
                            style={{
                                fontFamily: "Poppins",
                                fontWeight: "300"
                            }}
                        >Address</p>
                        <address
                            style={{
                                fontFamily: "Poppins",
                                fontWeight: "500"
                            }}
                        >{data.address ? data.address : "No address data available"}</address>
                    </div>

                </div>

                <h2
                    style={{
                        color: "#15C5CE",
                        fontFamily: "Playfair Display",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                        textAlign: "center",
                    }}
                >
                    Open Hours
                </h2>

                {
                    (data.start_day || data.end_day) || (data.start_time || data.end_time) ? 
                        (<table
                            style={{
                                width: "80%",
                                borderCollapse: "collapse",
                                margin: "1rem auto",
                                gap: "60px"
                                
                            }}
                        >
                            <tbody>
                                {workDates.map(day => (
                                    <tr>
                                        <td style={style.td("left")}>{day}</td>
                                        <td style={style.td("right")}>
                                            <time dateTime={data.start_time}>
                                                {data.start_time}
                                            </time>
                                            -
                                            <time dateTime={data.end_time}>
                                                {data.end_time}
                                            </time>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                    :
                    "" 
                }

            </div>

        </>
    )
}
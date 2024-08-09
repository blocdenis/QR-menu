import { useContext } from "react";
import { ReastaurantDataContext } from "../ClientData";
import background from "../../../assets/client/HomeBackground.png"
import { Link, useLocation } from 'react-router-dom';
import defaultLogo from "../../../assets/client/default_logo.jpg"


const style = {
    div: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative"
    },
    backgroundImage: {
        width: "100%",
        zIndex: "-1"
    },
    logo: {
        borderRadius: "50%"
    }

}

export const WelcomeScreen = () => {
    const data = useContext(ReastaurantDataContext);

    return (
        <> 
            <div style={{
                display: "flex",
                padding: "40px 0px",
                flexDirection: "column",
                alignItems: "center",
                gap: "3.4rem",
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                borderBottomColor: "#000",
                borderBottomWidth: "4px",
            }}>
                <img width="200px" src={data.logo ? "data:image/jpg;base64," + data.logo : defaultLogo} 
                style={style.logo} />
                
                <h2
                style={{
                    color: "#15C5CE",
                    textAlign: "center",
                    fontFamily: "Playfair Display",
                    fontSize: "2rem",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    padding: "1rem"
                }}
                >Wellcome to our restaurant</h2>

                <p
                style={{
                    fontSize: "1.3rem",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                }}
                >
                    Table #{data.table}
                </p>

                <Link to={`${location.pathname}/view`}>
                    <button
                        style={{
                            width: "100%",
                            padding: "1rem 7rem",
                            borderRadius: "6px",
                            background: "#15C5CE",
                            fontSize: "1.2rem",
                            color: "#fff",
                            fontFamily: "Poppins",
                            border: "none",
                            
                        }}
                    >Menu</button>
                </Link>
                
            </div>
        </>
    )
} 
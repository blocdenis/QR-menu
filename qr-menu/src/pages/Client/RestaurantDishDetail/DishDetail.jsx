import { useState, createContext, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ReastaurantDataContext } from "../ClientData";
import minus from "../../../assets/client/icon-minus.png"
import plus from "../../../assets/client/icon-plus.png"
import heart from "../../../assets/client/heart.png"
import iconleft from "../../../assets/client/iconleft.png"

export const DishDetail = () => {
    const data = useContext(ReastaurantDataContext);
    const { dishName } = useParams();
    const [quantity, setQuantity] = useState(1);

    if (!data || !data.categories || data.categories.length === 0) {
        return <div>No data available</div>;
    }

    let dish = null;

    for (const category of data.categories) {
        dish = category.dishes.find(dis => dis.name.toLowerCase() === dishName?.toLowerCase());
        if (dish) break;
    }

    if (!dish) {
        return <div>Dish not found</div>;
    }

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));


    const currentPath = location.pathname.split('/').slice(0, -2).join('/');

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "393px", }}>

            <Link to={`${currentPath}`} style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", marginTop: '20px',
                marginBottom: '20px',
            }}>
                <div style={{ width: "156px", height: "24px", gap: "10px" }}>

                    <p style={{
                        fontFamily: "Poppins", fontSize: "14px", lineHeight: "21px", fontWeight: "300", color: "#1A2023", alignItems: "center", display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <img src={iconleft} />
                        Back to “Menu”
                    </p>
                </div>
            </Link>

            <div style={{ width: "100%", height: "36px", alignContent: "center", marginBottom: '20px', }}><p style={{ textAlign: 'center', fontSize: "24px", color: "#1A2023", fontFamily: "Poppins", lineHeight: "36px", fontWeight: "500", }}>{dish.name}</p></div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", width: "100%", height: "510px", marginLeft: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "75px", height: "230px", justifyContent: "space-between" }}>
                    <button style={{ ...buttonStyle, marginLeft: "10px", backgroundColor: '#FFFFFF', color: '#C2CECD' }}>L</button>
                    <button style={{ ...buttonStyle, marginRight: "10px", backgroundColor: '#FFFFFF', color: '#C2CECD' }}>M</button>
                    <button style={{ ...buttonStyle, marginLeft: "10px", backgroundColor: '#FFFFFF', color: '#C2CECD' }}>S</button>

                </div>
                <div
                    style={{
                        width: "510px",
                        height: "509px",
                        display: "flex",
                        alignItems: "center",
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <img
                        style={{
                            width: "510px",
                            height: "509px",
                            borderRadius: "50%",
                            padding: "60px",
                            boxShadow: "0 -4px 11px 0 rgba(0, 0, 0, 0.05), 0 -5px 17px 0 rgba(0, 0, 0, 0.1)",
                            transform: "translateX(10%)",
                        }}
                        src={`data:image/jpeg;base64,${dish.img}`}
                        alt={dish.name}
                    />

                </div>
                <div
                    style={{
                        width: "100%",
                        height: "50px",
                        position: "absolute",
                        bottom: "0",
                        display: "flex",
                        padding: "0px 0px 0px 40px"

                    }}
                >
                    <div
                        style={{
                            width: "132px",
                            height: "50px",
                            borderRadius: "32px",
                            boxShadow: "0 -4px 11px 0 rgba(0, 0, 0, 0.05), 0 -5px 17px 0 rgba(0, 0, 0, 0.1)",
                            backgroundColor: "#FFFFFF",
                            textAlign: "center",
                            fontFamily: "Poppins",
                            padding: "4px 16px 4px 16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",

                        }}>
                        <button style={{ ...buttonIcon }} onClick={decreaseQuantity}>
                            <img style={{ width: "18.46px", height: "18.46px", top: "2.77px", left: "2.77px" }} src={minus} /></button>
                        <span style={{ fontSize: "24px" }}>{quantity}</span>
                        <button style={{ ...buttonIcon }} onClick={increaseQuantity}><img style={{ width: "18.46px", height: "18.46px", top: "2.77px", left: "2.77px" }} src={plus} /></button>
                    </div>
                </div>
            </div>
            <div style={{ height: "114px", width: "100%", padding: "0px 12px 0px 12px", alignItems: "left", gap: "1px", marginTop: "30px" }}>
                <div style={{}}>
                    <p style={{ fontFamily: "Poppins", lineHeight: "24px", color: "#1A2023", fontSize: "16px", fontWeight: "500" }}>Details</p>

                    <p style={{ fontFamily: "Poppins", lineHeight: "21px", fontWeight: "300px", fontSize: "14px" }}>{dish.comment}{dish.ingredients.map((ingredient) => ingredient.ingredient).join(", ")}</p>
                    <p style={{
                        width: "62px", height: "18px", fontSize: "12px", color: "#C2CECD", alignItems: "center", display: "flex",
                        justifyContent: "space-between",
                    }}><img src={heart} />No Cal</p>
                </div>
            </div>
            <div style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}>
                <button style={{
                    height: "50px",
                    width: "242px",
                    borderRadius: "6px",
                    backgroundColor: "#15C5CE",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#FFFFFF",
                    padding: "0 45px",
                    fontFamily: "Poppins",
                    fontSize: "16px"
                }}>
                    <span style={{ fontSize: "20px" }}>${dish.price}</span>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    );
};

const buttonStyle = {
    flexGrow: 0,
    borderRadius: "24px",
    width: "63px",
    height: "50px",
    padding: "7px 24px 7px 24px",
    backgroundColor: "#FFFFFF",
    border: "none",
    boxShadow: "0 -4px 11px 0 rgba(0, 0, 0, 0.05), 0 -5px 17px 0 rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    alignItems: "center",
    fontFamily: "Poppins",
    color: "#C2CECD",
    fontSize: "24px",
};

const buttonIcon = {
    width: "24px",
    height: "24px",
    border: "none",
    backgroundColor: "#FFFFFF",


}




export default DishDetail;


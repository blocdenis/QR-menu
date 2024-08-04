import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ReastaurantDataContext } from "../ClientData";

export const CategoryDetail = () => {
    const { categoryName } = useParams();
    const data = useContext(ReastaurantDataContext);

    if (!data || !data.categories || data.categories.length === 0) {
        return <div>No data available</div>;
    }

    const category = data.categories.find(cat => cat.category.toLowerCase() === categoryName?.toLowerCase());

    if (!category) {
        return <div>Category not found</div>;
    }


    const currentPath = location.pathname.split('/').slice(0, -2).join('/');

    return (
        <div style={{ width: "100%", padding: "20px", overflowX: "auto" }}>
            <div style={{ background: "#EEFCFC", display: "flex", gap: "10px", flexWrap: "wrap", padding: "20px", marginBottom: "20px" }}>
                {data.categories.map((cat, index) => (
                    <Link key={index} to={`${currentPath}/${cat.category}/`} style={{ textDecoration: 'none', color: categoryName === cat.category ? '#15C5CE' : '#4B4B4B', flex: "0 0 auto" }}>
                        <h3 style={{ fontSize: "16px", fontFamily: "Poppins", margin: "0" }}>{cat.category}</h3>
                    </Link>
                ))}
            </div>
            <div key={category.category} style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {category.dishes.map((dish, idx) => (
                    <div
                        key={idx}
                        style={{
                            height: "258px",
                            width: "calc(50% - 10px)",
                            
                            border: "1px solid rgba(221, 221, 221, 0.5)",
                            background: "#00000008",
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "left",
                            borderRadius: "32px",
                        }}
                    >
                        <img
                            src={`data:image/jpeg;base64,${dish.img}`}
                            alt={dish.name}
                            style={{
                                width: "140px",
                                height: "140px",
                                marginTop: "20px",
                                borderRadius: "50%",
                                padding: "10px",
                                boxShadow: "0 -4px 11px 0 rgba(0, 0, 0, 0.05), 0 -5px 17px 0 rgba(0, 0, 0, 0.1)"

                            }}
                        />
                        <Link  style={{ textDecoration: 'none', color: 'inherit' }} to={`${dish.name}/`}><p style={{ margin: "0", marginTop: "10px", fontSize: "14px", fontFamily: "Poppins" }}>{dish.name}</p></Link>
                        <p style={{ margin: "0", marginTop: "10px", color: "#15C5CE", fontSize: "16px", textAlign: "right", fontFamily: "Poppins" }}>${dish.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetail;
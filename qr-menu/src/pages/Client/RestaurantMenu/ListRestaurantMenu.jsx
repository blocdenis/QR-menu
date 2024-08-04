import { useContext } from "react";
import { ReastaurantDataContext } from "../ClientData";
import { Link } from 'react-router-dom';



export const ListRestaurantMenu = () => {
  const data = useContext(ReastaurantDataContext);

  return (
    <div style={{ width: "100%", padding: "20px", overflowX: "auto" }}>
      <h1 style={{ fontSize: "20px", textAlign: 'center', }}>Restaurant Menu</h1>
      {data.categories.map((category, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px" }}>{category.category}</h3>
            <Link style={{ textDecoration: 'none', color: '#15C5CE', fontSize: "12px", fontWeight: "300", lineHeight: "18px", fontFamily: "Poppins"}} to={`${location.pathname}/${category.category.toLowerCase()}/`}>See All</Link>
          </div>
          <div style={{ display: "flex", overflowX: "auto", gap: "20px" }}>
            {category.dishes.map((dish, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid rgba(221, 221, 221, 0.5)",
                  background: "#00000008",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "32px",
                  padding: "20px",
                  height: "258px",
                  width: "164px",

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
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`${location.pathname}/${category.category.toLowerCase()}/${dish.name.toLowerCase()}`}>
                <p style={{ margin: "0", marginTop: "10px", fontSize: "14px", fontFamily: "Poppins" }}>{dish.name}</p></Link>
                <p style={{ margin: "0", marginTop: "10px", color: "#15C5CE", fontSize: "16px", textAlign: "center", fontFamily: "Poppins" }}>${dish.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListRestaurantMenu;
import { useContext } from "react";
import { ReastaurantDataContext }  from "../ClientData";
import { Link } from 'react-router-dom';
import headerleft from "../../../assets/client/headerleft.png";

export const ClientHeader = () => {
    const data = useContext(ReastaurantDataContext);

    const currentPath = location.pathname.split('/').slice(0, -1).join('/');

    return (
        <div style={{ 
            width: '393px', 
            height: '91px', 
            padding: '0 20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            backgroundColor: '#15C5CE',
            color: '#FFFFFF', 
        }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: '1', justifyContent: 'center' }}>
                <Link to={`${currentPath}`} style={{ height: "40px", width: "42px", alignItems: 'center', justifyContent: 'center', display: "flex" }}>
                    <img src={headerleft} alt="Header Left" />
                </Link>
                <div style={{ textAlign: 'center', flex: '1' }}>
                    {data && (
                        <p style={{ lineHeight: "24px", fontFamily: "Poppins", fontSize: "13px", fontWeight: "500" }}>{data.name}</p>
                    )}
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    {data && data.logo && (
                        <img
                            src={`data:image/jpeg;base64,${data.logo}`}
                            alt="Restaurant Logo"
                            style={{ width: '57px', height: '54.96px', borderRadius: '50%' }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientHeader;
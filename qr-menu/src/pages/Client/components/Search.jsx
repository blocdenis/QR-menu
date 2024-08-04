import React from 'react';
import iconsearch from "../../../assets/client/Search.png"
export const ClientSearch = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            marginTop: '20px',
            marginBottom: '20px',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '24px',
                border: '1px solid #15C5CE',
                width: '369px',
                height: '44px',
                padding: '0 10px',
                backgroundColor: 'white'
            }}>
                <img
                    src={iconsearch}
                    alt="Search Icon"
                    style={{
                        marginRight: '10px',

                        marginLeft: '5px'
                    }}
                />
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        border: 'none',
                        outline: 'none',
                        fontSize: '16px',
                        fontFamily: 'Poppins',
                        flex: 1,
                        height: '100%',
                    }}
                />
            </div>
        </div>
    );
};

export default ClientSearch;
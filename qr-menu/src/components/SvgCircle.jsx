import Forgot from "../pages/Forgot"
import Succes from "./Auth/SuccesForgot"

import { useState } from "react"


const SvgCircle = ({page, func}) => {
    const [email, setEmail] = useState('');
    const seterEmail = (value) => {
        setEmail(value)
    }

    const [circle, setcircle] = useState(true)
    const resetClick = (value) => {
        setcircle(value)
    }

    const svgConSt = {
        margin: '2rem 0px',
        display: 'flex',
        justifyContent: 'center',
        alingItems: 'center'
    }

    const btnStyle = {
        width: '100%',
        height: '3rem',
        cursor: 'pointer',
        border: 'none',
        background: 'rgb(21, 197, 206)',
        borderRadius: '5px',
        color: 'rgb(255, 255, 255)',
        transition: 'all 0.3s ease-in-out'
    }


    return (
    <>
        <div className="reset-password-container">
            <div className="svg-elem-container" style={svgConSt}>
                <svg viewBox="0 0 55 55" width="55px" height="55px">
                    {circle ? (
                        <>
                            <circle fill="#8DDDFF" cx="50%" cy="50%" r="25"></circle>
                            <circle id="tiny-circle" fill="#fff" cx="50%" cy="30%" r="3"></circle>
                            <line stroke="#fff" strokeWidth="3.5px" strokeLinecap="round" x1="27.5px" y1="25px" x2="27.5px" y2="45px"></line>
                        </>
                    ) : (
                        <>
                            <circle fill="#C0E5D1" cx="50%" cy="50%" r="25"></circle>
                            <polyline fill="none" stroke="#fff" strokeWidth="5px" points="16,29 25,37 38,17" strokeDasharray="50" strokeDashoffset="50"></polyline>
                        </>
                    )}
                    
                </svg>
            </div>

            {circle ? <Forgot page={page} func={func} circle={resetClick} sEmail={seterEmail} btnStyle={btnStyle} /> :
            <Succes email={email} btnStyle={btnStyle} />} 


        </div>


    
    </>
    )
}

export default SvgCircle;
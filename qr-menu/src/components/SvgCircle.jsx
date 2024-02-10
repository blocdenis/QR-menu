import Forgot from "../pages/Forgot"
import Succes from "../components/Auth/SuccesForgot"

import { useState } from "react"
import SuccesSVG from "./Auth/svg/succes"
import InfoSVG from "./Auth/svg/info"
import EnterCode from "../pages/EnterCode/EnterCode"
import PasswordSet from "../pages/SetNewPassword/PassSet"


const SvgCircle = ({page, func}) => {
    const [email, setEmail] = useState('');
    const seterEmail = (value) => {
        setEmail(value)
    }

    const [circle, setcircle] = useState("getMail")
    const resetClick = (value) => {
        setcircle(value)
    }


    const [userId, setUserId] = useState()
    const idSeter = (id) => {
        setUserId(id);
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
        margin: "2rem 0 0 0",
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
                    {circle === "getMail" && <InfoSVG/> || 
                    circle === "EnterCode" && <InfoSVG type={circle}/> ||
                    circle === "Reset" && <InfoSVG type={circle} /> ||
                    circle === "Succes" && <SuccesSVG/>}
                </svg>
            </div>

            {circle === "getMail" && <Forgot page={page} func={func} circle={resetClick} sEmail={seterEmail} btnStyle={btnStyle} /> ||
            circle === "EnterCode" && <EnterCode email={email} setCircle={resetClick} btnStyle={btnStyle} idSeter={idSeter} /> ||
            circle === "Reset" && <PasswordSet email={email} setCircle={resetClick} btnStyle={btnStyle} userId={userId} /> ||
            circle === "Succes" && <Succes email={email} btnStyle={btnStyle} />} 


        </div>


    
    </>
    )
}

export default SvgCircle;
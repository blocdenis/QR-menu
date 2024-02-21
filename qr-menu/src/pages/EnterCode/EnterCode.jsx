import { useRef, useEffect, useState } from "react";
import {USER_RECOVERY_CODE_CHECK} from "../../Fetch/settings";
import {obj} from "../../Fetch/signUp";


const EnterCode = ({email, setCircle, btnStyle, idSeter}) => {
    const inputEl = useRef()
    const [status, setStatus] = useState(false);

    const statusSeter = (status) => {
        setStatus(status);
    }


    useEffect(() => {
        inputEl.current.focus()
    }, [])


    const confirmCode = async (string) => {
        const code = inputEl.current.value;

        const request = await fetch(USER_RECOVERY_CODE_CHECK, obj("POST", {email: email, code: code}));

        if (request.ok) {
            const getData = await request.json()

            idSeter(getData.id);
            statusSeter(false);
            setCircle(string);
        } else {
            statusSeter(true);
        }


    }


    return (
        <>

            <div className="reset-header-container" style={{textAlign: 'center'}}>
                <h3 style={{fontFamily: '"Playfair Display", monoscape', fontSize: '2rem', whiteSpace: 'nowrap'}}>
                    Reset Password
                </h3>
            </div>

            <div className="reset-info-container" style={{margin: '2rem 0px', textAlign: 'center'}}>

                <p style={{color: 'rgb(149, 152, 149)', lineHeight: '28px'}}>
                    A email has been send to your {email}. Please check for an email from company and enter the code to reset your password.
                </p>

            </div>

            <div className="reset-input-containe" style={{margin: '2rem 0px 0px 0px', display: 'flex', flexFlow: 'column'}}>
                <input ref={inputEl} type="code" placeholder="Enter code from mail" name="email" id="email" style={{margin: '0 0 0.5rem 0'}} />
                {status ? <p style={{color: "red", fontSize: "0.7rem"}}>Code is not valid</p> : undefined}
            </div>

            <div className="reset-button-container">

                <button style={btnStyle} onClick={() => confirmCode("Reset")}>Confirm code</button>

            </div>

        </>
    )
}


export default EnterCode;
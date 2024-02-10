import { useRef, useEffect, useState } from "react";
import {regexPassword} from "../../regex/regex";
import {obj} from "../../Fetch/signUp"
import {USER_SET_NEW_PASSWORD} from "../../Fetch/settings";



const PasswordSet = ({email, setCircle, btnStyle, userId}) => {
    const inputEl = useRef()
    const [status, setStatus] = useState(false);

    const statusSeter = (status) => {
        setStatus(status);
    }

    useEffect(() => {
        inputEl.current.focus()
    }, [])


    const setPassword = async (string) => {
        const password = inputEl.current.value;

        const request = await fetch(USER_SET_NEW_PASSWORD, obj("PUT", {id: userId, password: password}));

        if (request.ok) {
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
                    Code is valid. Enter new password for your account {email}.
                </p>

            </div>

            <div className="reset-input-container" style={{display: 'flex', flexFlow: 'column'}}>
                <input ref={inputEl} type="password" placeholder="Enter new password" name="password" id="password" />
                {status ? <span style={{color: "red", fontSize: "0.7rem"}}>Something went wrong. Try later</span> : undefined}
            </div>

            <div className="reset-button-container">

                <button style={btnStyle} onClick={() => setPassword("Succes")}>Set password</button>

            </div>

        </>
    )
}

export default PasswordSet;
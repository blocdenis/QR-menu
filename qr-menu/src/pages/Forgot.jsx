import { useRef, useState } from "react";
import {regexEmail} from "../regex/regex";
import {obj} from "../Fetch/signUp";
import {EMAIL_SET_RECOVERY_CODE} from "../Fetch/settings"


const Forgot = ({func, circle, sEmail, btnStyle}) => {
    const email = useRef()
    const [failMail, setfailMail] = useState()
    const [request, status] = useState(false);



    const mailSeter = (data) => {
        setfailMail(data);
    }

    const statusSeter = (string) => {
        status(string);
    }

    const wrapper = (string) => {
        const userMail = email.current.value;

        if (regexEmail.test(userMail)) {
            const setCode = async () => {

                const request = await fetch(EMAIL_SET_RECOVERY_CODE, obj("POST", {email: userMail}));

                if (request.ok) {
                    mailSeter("");
                    statusSeter(false);
                    circle(string);
                    sEmail(userMail);
                } else {
                    mailSeter(userMail);
                    statusSeter(true);
                }

            }

            setCode();
        }
    }


    return (
        <>
            <div className="reset-header-container" style={{textAlign: "center"}}>
                <h3 style={{fontFamily: '"Playfair Display", monoscape', fontSize: '2rem', whiteSpace: 'nowrap'}}>Reset Password</h3>
            </div>

            <div className="reset-info-container" style={{margin: '2rem 0px', textAlign: 'center'}}>
                <p style={{color: 'rgb(149, 152, 149)', lineHeight: '28px'}}>
                    Enter your email addres and we'll send you an email with instructions to reset your password.
                </p>
            </div>

            <div className="reset-input-container" style={{margin: '1rem 0px 0px 0px', display: 'flex', flexFlow: 'column'}}>
                <label style={{margin: "0 0 0.5rem 0"}} htmlFor="email">Email</label>
                <input ref={email} type="email" placeholder="Enter your Email" name="email" id="email" />
                {request ? <p style={{color: "red", fontSize: "0.7rem"}}>{failMail} doesn't register in system.&nbsp;
                 <span className="link" onClick={() => func("up")}>Sign up</span></p> : undefined}
            </div>

            <div className="reset-button-container">
                <button style={btnStyle} onClick={() => wrapper("EnterCode")}>Reset</button>
            </div>
        </>
    )
}



export default Forgot;


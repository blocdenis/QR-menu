import { useState } from "react";
import RightImages from "../components/Auth/RightImages";
import SingIn from "../components/Auth/SingIn";
import SingUp from "../components/Auth/SingUp";
function Sing(){
    const [singCheck, setSingCheck] = useState(true)
    function handleSingCheck(value){
        setSingCheck(value)
    }
    return(
        <>
        <main>
        <div id="sign">
        <div className="sign-into-container">
        <div className="sign-into-headers">
        {singCheck &&<h3>Sign in to</h3>}
        {!singCheck && <h3>Sign up to</h3>}
                    <p>restourant control system</p>
                </div>
        {singCheck && <SingIn checkUser={handleSingCheck}  /> }
        {!singCheck && <SingUp /> }
        </div>
        </div>
            <RightImages />
        </main>
        </>
    )
}
export default Sing;
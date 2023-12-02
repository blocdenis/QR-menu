import { useState } from "react";
import RightImages from "../components/Auth/RightImages";
import SinSup from "./SignInSignUp";
import SvgCircle from "../components/SvgCircle";

function Sing(){
    const [singCheck, setSingCheck] = useState('in')
    function handleSingCheck(value){
        setSingCheck(value)
    }

    const slideCircleClass = 'up';

    return(
        <>
            <main>
                <div id="sign">
                    {singCheck === 'in' && <SinSup page={singCheck} func={handleSingCheck} /> || 
                    singCheck === 'up' && <SinSup page={singCheck} func={handleSingCheck} /> ||
                    singCheck === 'reset' && <SvgCircle page={singCheck} func={handleSingCheck} /> }
                </div>

                
                {singCheck === 'reset' ? <RightImages page={singCheck} svgClass={slideCircleClass} /> :
                <RightImages page={singCheck} />}
            
            </main>
        </>
    )
}


export default Sing;
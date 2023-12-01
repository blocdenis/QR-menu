import CreateInput from "../CreateInput"

function SingIn({checkUser}){
    const displayBlock = {
        display: 'block'
    }
    const displayNone = {
        display: 'none'
    }
    const displayFlex = {
        display: 'flex'
    }
    const styleFont = {
        fontWeight: 'bold',
        color: '#15C5CE',
        cursor: 'pointer'
    }

    const remember = {
        display: 'flex',
        justifyContent: 'center',
        alingItems: 'center'
    }

   function goToSingUp(value){
    checkUser(value)
   }
   return (
    <>
        <div className="sign-into-inputs">
            <div className="sign-into-input-username">
                <CreateInput focus={true} type='username' labeltxt="User name" placeholder="Enter your name or email" labelClass="" />
            </div>
            <div className="sign-into-input-password">
                <CreateInput type='password' labeltxt="Password" placeholder="Enter your Password" labelClass="" />
            </div>
        </div>
        
        <div className="sign-into-remember-me-section" style={displayFlex}>
            <div style={remember}>
                <input name="remember-me" type="checkbox" id="remember-me" />
                <label style={{margin: '0 0 0 0.2rem', cursor: 'pointer'}} htmlFor="remember-me">Remember me</label>
            </div>
            <div>
                <span id="sign-into-forgot-password" onClick={()=> goToSingUp('reset')}>Forgot Password?</span>
            </div>
        </div>
        
        <div className="sign-into-send-login-info">
            <button id="sign-into-button" style={displayBlock}>Login</button>
        </div>
        
        <div className="create-account-section-link">
            <p className="sign-in" style={displayBlock}>Don'y have an Account ? <span id="sign-in" style={styleFont} onClick={()=> goToSingUp('up')}>Sign up</span></p>
        </div>              
    </>
   )
}
export default SingIn;
import CreateInput from "../CreateInput"

function SingUp({checkUser}){
    const displayBlock = {
        display: 'block'
    }
    const styleFont = {
        fontWeight: 'bold',
        color: '#15C5CE',
        cursor: 'pointer'
    }
   function goToSingIn(value){
    checkUser(value)
   }
   return (
    <>
    <div className="sign-into-inputs">
        <div className="sign-into-input-email" >
            <CreateInput focus={true} inputType='email' labeltxt='Email' placeholder='Enter your email' labelClass='before-active' />
        </div>
        <div className="sign-into-input-username">
            <CreateInput inputType='text' labeltxt='User name' placeholder='Enter your user name' labelClass='before-active' />
        </div>
        <div className="sign-into-input-password">
            <CreateInput inputType='password' labeltxt='Password' placeholder='Enter your Password' labelClass='before-active' />
        </div>
        <div className="sign-into-input-confirm-password">
            <CreateInput inputType='password' labeltxt='Confirm Password' placeholder='Confirm your password' labelClass='before-active' />
        </div>
    </div>
    
    <div className="sign-into-send-login-info">
        <button style={displayBlock} id="create-account-button">Register</button>
    </div>
   
    <div className="create-account-section-link">
        <p className="sign-up" style={displayBlock}>Already have an Account ? <span id="sign-up" style={styleFont} onClick={() => goToSingIn('in')}>Sign in</span></p>
    </div>


    </>
   )
}
export default SingUp;
function SingUp(){
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
   function goToSingUp(value){
    checkUser(value)
   }
   return (
    <>
    <div className="sign-into-inputs">
        <div className="sign-into-input-email" >
            <label for="email" className="before-active">Email</label>
            <input type="email" placeholder="Enter your email" name="email" id="email"/>
            </div>
            <div className="sign-into-input-username">
            <label for="username" className="before-active">User name</label>
            <input autofocus="" type="text" placeholder="Enter your user name" name="username" id="username" />
        </div>
        <div className="sign-into-input-password">
            <label for="password" className="before-active">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your Password" />
        </div>
    <div className="sign-into-input-confirm-password">
        <label for="password" className="before-active">Confirm Password</label>
    <input type="password" placeholder="Confirm your password" name="password" id="password"/>
    </div></div>
   
   
    <div classNameName="sign-into-remember-me-section" style={displayFlex}>
        <div>
            <input name="remember-me" type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
        </div>
        <div>
            <span id="sign-into-forgot-password">Forgot Password?</span>
        </div>
    </div>
    
    <div className="sign-into-send-login-info">
        <button id="sign-into-button" style={displayBlock}>Login</button>
        <button style={displayNone} id="create-account-button">Register</button>
    </div>
   
    <div className="create-account-section-link">
        <p className="sign-in" style={displayBlock}>Don'y have an Account ? <span id="sign-in" style={styleFont} onClick={()=> goToSingUp(false)}>Sign up</span></p>
        <p className="sign-up" style={displayNone}>Already have an Account ? <span id="sign-up" style={styleFont}>Sign in</span></p>
    </div>


    </>
   )
}
export default SingUp;
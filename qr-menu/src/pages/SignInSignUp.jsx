import SingIn from "../components/Auth/SignIn/SignIn.jsx";
import SingUp from "../components/Auth/SignUp/SignUp.jsx";

function SignInSignUp({page, func}) {
    
    return (
        <div className="sign-into-container">
            <div className="sign-into-headers">
                {page === 'in' &&  <h3>Sign in to</h3>}
                {page === 'up' && <h3>Sign up to</h3>}
                {page === 'up' && <p>restourant control system</p> || page === 'in' && <p>restourant control system</p>}
            </div>
                {page === 'in' && <SingIn checkUser={func}  /> }
                {page === 'up' && <SingUp checkUser={func} /> }
            </div>
    )
}

export default SignInSignUp;
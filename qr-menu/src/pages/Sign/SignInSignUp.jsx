import React from 'react';
import SingIn from '../../components/Auth/SingIn';
import SingUp from '../../components/Auth/SingUp';

function SignInSignUp({ page, func }) {
  const isSignInPage = page === 'in';
  const pageTitle = isSignInPage ? 'Sign in' : 'Sign up';

  return (
    <div className="sign-into-container">
      <div className="sign-into-headers">
        <h3>{pageTitle}</h3>
        <p>restaurant control system</p>
      </div>
      {isSignInPage ? <SingIn checkUser={func} /> : <SingUp checkUser={func} />}
    </div>
  );
}

export default SignInSignUp;

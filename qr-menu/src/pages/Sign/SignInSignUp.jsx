import React, { useEffect } from 'react';
import SignIn from '../../components/Auth/SignIn/SignIn.jsx';
import SignUp from '../../components/Auth/SignUp/SignUp.jsx';
import { useNavigate } from 'react-router-dom';
import checkToken from '../../Fetch/func/CheckToken.js';

function SignInSignUp({ page, func }) {
  const navigate = useNavigate();

  useEffect(() => {
    checkToken(navigate, '/home');
  }, [navigate]);

  const renderHeaderText = () => {
    return (
      <>
        <h3>{page === 'in' ? 'Sign in to' : 'Sign up to'}</h3>
        <p>restourant control system</p>
      </>
    );
  };

  return (
    <div className="sign-into-container">
      <div className="sign-into-headers">{renderHeaderText()}</div>
      {page === 'in' ? (
        <SignIn checkUser={func} />
      ) : (
        <SignUp checkUser={func} />
      )}
    </div>
  );
}

export default SignInSignUp;

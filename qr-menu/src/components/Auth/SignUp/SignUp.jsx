import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import CreateInput from '../../Input/CreateInput';

import checkToken from '../../../Fetch/func/CheckToken';
import { apiRequest, obj } from '../../../Fetch/signUp';
import {
  USER_REGISTER,
  USER_DELETE,
  COOKIE_KEY,
  RESTAURANT_CREATE,
} from '../../../Fetch/settings';
import delay from '../../../Fetch/func/delay';
import Cookies from 'js-cookie';

import { displayBlock, styleFont } from '../css/funcs';
import showSuccess from '../ShowSucces/func';
import validate from './validation/func';

function goToSingIn(checkUser, value) {
  checkUser(value);
}

const SignUp = ({ checkUser }) => {
  const navigate = useNavigate();

  const toast = useRef(null);
  const [formValues, setFormValues] = useState({
    email: '',
    restourant: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const error = validate(formValues);
    setFormErrors(error);

    if (Object.keys(error).length === 0) {
      try {
        const register = await submitForm(formValues);
        console.log(register)
        checkStatus(register);
      } catch (error) {
        throw error;
      }
    } else {
      return 'something not match';
    }
  };

  const checkStatus = status => {
    if (status) {
      setFormValues({
        email: '',
        restourant: '',
        password: '',
        confirmPassword: '',
      });
      setFormErrors({});

      showSuccess(toast);
      navigate('/home');
    } else {
      throw new Error('Помилка під час реєстрації');
    }
  };

  const submitForm = async formValues => {
    let status = false;

    try {
      const register = await apiRequest(
        USER_REGISTER,
        obj(
          'POST',
          { email: formValues.email, password: formValues.password, time: {} },
          undefined,
          false
        )
      );
      Cookies.set(COOKIE_KEY, register.token, { expires: 1 });

      status = true;
    } catch (error) {
      status = false;
      throw error;
    }

    await delay(300);

    try {
      await apiRequest(
        RESTAURANT_CREATE,
        obj('POST', { name: formValues.restourant })
      );
      status = true;
    } catch (error) {
      await apiRequest(USER_DELETE, obj('DELETE', {}));
      Cookies.remove(COOKIE_KEY);
      status = false;
      throw error;
    }
    return status;
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="sign-into-inputs">
        <div className="sign-into-input-email">
          <label htmlFor="email" className="before-active">
            Email
          </label>
          <CreateInput
            autoFocus={true}
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            name="email"
            className={formErrors.email}
            style={formErrors.email ? { borderColor: 'red' } : {}}
          />
          <br />
          {formErrors.email && (
            <span className="error" style={{ color: 'red' }}>
              {formErrors.email}
            </span>
          )}
        </div>
        <div className="sign-into-input-restourant">
          <label htmlFor="restourant" className="before-active">
            Restourant name
          </label>
          <CreateInput
            type="text"
            placeholder="Enter your restourant name"
            name="restourant"
            onChange={handleChange}
            className={formErrors.restourant}
            style={formErrors.restourant ? { borderColor: 'red' } : {}}
          />
          <br />
          {formErrors.restourant && (
            <span className="error" style={{ color: 'red' }}>
              {formErrors.restourant}
            </span>
          )}
        </div>
        <div className="sign-into-input-password">
          <label htmlFor="password" className="before-active">
            Password
          </label>

          <CreateInput
            type="password"
            placeholder="Enter your Password"
            name="password"
            onChange={handleChange}
            className={formErrors.password}
            style={formErrors.password ? { borderColor: 'red' } : {}}
          />
          <br />
          {formErrors.password && (
            <span className="error" style={{ color: 'red' }}>
              {formErrors.password}
            </span>
          )}
        </div>
        <div className="sign-into-input-confirm-password">
          <label htmlFor="confirmPassword" className="before-active">
            Confirm Password
          </label>

          <CreateInput
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            onChange={handleChange}
            className={formErrors.confirmPassword}
            style={formErrors.confirmPassword ? { borderColor: 'red' } : {}}
          />
          <br />
          {formErrors.confirmPassword && (
            <span className="error" style={{ color: 'red' }}>
              {formErrors.confirmPassword}
            </span>
          )}
        </div>
      </div>

      <div className="sign-into-send-login-info">
        <button
          onClick={handleSubmit}
          type="submit"
          style={displayBlock}
          id="create-account-button"
        >
          Register
        </button>
      </div>

      <div className="create-account-section-link">
        <p className="sign-up" style={displayBlock}>
          Already have an Account ?{' '}
          <span
            id="sign-up"
            style={styleFont}
            onClick={() => goToSingIn(checkUser, 'in')}
          >
            Sign in
          </span>
        </p>
      </div>
    </>
  );
};

export default SignUp;
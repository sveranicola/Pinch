/* eslint-disable no-console */
/* eslint-disable quote-props */
/* eslint-disable no-shadow */
import React, { useState, useContext } from 'react';
import { RouteComponentProps, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { FiAlertTriangle } from 'react-icons/fi';
import validateLogin from '../SharedComponents/05.Validation/loginCheck';
import AppContext from '../SharedComponents/06.Context/AppContext';
import auth from '../../auth/auth';

interface OverviewProps extends RouteComponentProps<{ name: string }> { }

interface Verrors {
  email: string;
  password: string;
}

// eslint-disable-next-line no-unused-vars
function Login(props: OverviewProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validation, setErrors] = useState<Verrors>();
  // eslint-disable-next-line no-unused-vars
  const [err, setErr] = useState<boolean>(false);
  const history = useHistory();

  const {
    setUserObj,
    setNav,
  } = useContext(AppContext);

  const allValues: any = {
    // eslint-disable-next-line quote-props
    'email': email,
    // eslint-disable-next-line quote-props
    'password': password,
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput: string = event.target.value;
    setEmail(emailInput);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwrd: string = event.target.value;
    setPassword(passwrd);
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const headers = { 'Content-Type': 'application/json' };
    const returnedValidation = validateLogin(allValues);
    if (Object.keys(returnedValidation).length === 0) {
      axios.post(
        '/graphql',
        JSON.stringify({
          query: `mutation {login(email: "${email}", password: "${password}") {
            user {
              id
              firstName
              lastName
              email
              accessToken
              itemId
            }
          }
        }`,
        }), { headers },
      )
        .then((response) => {
          const {
            email, id, accessToken, itemId,
          } = response.data.data.login.user;

          const input = {
            'id': id,
            'email': email,
            'access_token': accessToken,
            'item_id': itemId,
          };

          setUserObj(input);

          let error;
          if (response.data.errors) {
            error = response.data.errors[0].message;
          }
          setErr(error);
          sessionStorage.setItem('id', id);
          sessionStorage.setItem('nav', 'true');
          setNav(true);
          auth.login(() => {
            history.push('/home/overview');
          });
        })
        .catch((error) => {
          setErr(!err);
          console.log('there was an error', error);
        });
    } else {
      setErrors(returnedValidation);
    }
  };

  return (
    <div className="login-container">
      <div className="empty-div" />
      <div className="login-center-div">
        <div className="login-main-div">
          <div className="login-page-logo-div">
            <img className="pinch-logo" src="https://i.imgur.com/MZQaH4n.png" alt="pinch logo" />
          </div>
          <div className="credentials-div">
            {err
              ? (
                <div className="login-error-div">
                  <FiAlertTriangle className="alert-icon" />
                  <p className="login-error-message">
                    Email or password may be incorrect, please try again.
                  </p>
                </div>
              ) : null}
            <div className="credentials-title">Login</div>
            <form className="login-form">
              <div className="login-input-title">Email Address</div>
              <div className="input-container" data-error={validation?.email}>
                <input
                  className="login-input"
                  type="text"
                  placeholder="example@email.com"
                  onChange={(event) => handleEmail(event)}
                />
              </div>
              <div className="login-input-title">Password</div>
              <div className="input-container" data-error={validation?.password}>
                <input
                  className="login-input"
                  type="password"
                  placeholder="•••••••••••••"
                  onChange={(event) => handlePassword(event)}
                />
              </div>
              <div className="remember-me">
                <label htmlFor="remember-me" className="remember-me-label">
                  <input className="remember-me-chk" type="checkbox" id="remember-me" />
                  <div className="remember-me-text">Remember Me</div>
                </label>
              </div>
            </form>
            <button className="sign-in-btn" type="submit" onClick={(event) => handleSubmit(event)}>
              Sign In
            </button>
            <div className="agreement">
              By selecting Sign In, you agree to our Terms and have read and acknowledge
              our Global Privacy Statement.
            </div>
            <div className="no-account">
              <div>
                Don’t have an account?
                <u className="signup-link">
                  <Link to="/signup" style={{ color: 'inherit' }}>
                    Sign Up
                  </Link>
                </u>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rights-text-div">
        <div className="rights-text">
          All rights reserved. Pinch, Pinch Co and Pinch LLC are registered trademarks of
          Pinch Inc.
        </div>
        <div className="rights-text">
          Terms and conditions, features, support, pricing, and
          service options subject to change without notice.
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

export default function Navbar() {
  const { connectTag, handleConnect } = useContext(UserContext);
  return (
    <>
      <div
        id="navigation"
        className="fixed-top navbar-light bg-faded site-navigation"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="site-logo">
                <Link className="navbar-logo" to="/">
                  {/* <img src="/img/logo.png" alt="" /> */}
                  <h2>Bitcoin Inu</h2>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-8">
              <div className="header_right">
                <nav id="main-menu" className="ml-auto">
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#token_sale">Token sale</a>
                    </li>
                    <li>
                      <a href="#roadmap">Roadmap</a>
                    </li>
                    <li>
                      <a href="#download">App</a>
                    </li>
                    <li>
                      <a href="#team">Team</a>
                    </li>
                    <li>
                      <a href="#faq">faq</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                    <li>
                      {!localStorage.account ? (
                        <button
                          className="block-menu"
                          onClick={handleConnect}
                          style={{ color: '#fff' }}
                        >
                          Connect
                        </button>
                      ) : (
                        <a
                          id="modal_trigger"
                          className="block-menu"
                          href="#balanceModal"
                        >
                          {connectTag}
                        </a>
                      )}
                    </li>
                  </ul>
                </nav>
                <div id="mobile_menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////// Modal /////// */}

      <div
        id="balanceModal"
        className="popupContainer"
        style={{ display: 'none' }}
      >
        <header className="popupHeader">
          <span className="header_title">Balance</span>
          <span className="modal_close">
            <i className="fa fa-times"></i>
          </span>
        </header>

        <div className="popupBody">
          {/* <!-- Social Login --> */}
          <div className="social_login">
            <div className="">
              <a href="#" className="social_box fb">
                <span className="icon">
                  <i className="fa fa-facebook"></i>
                </span>
                <span className="icon_title">0.00 BNB</span>
              </a>

              <a href="#" className="social_box google">
                <span className="icon">
                  <i className="fa fa-google-plus"></i>
                </span>
                <span className="icon_title">0.00 BNU</span>
              </a>
            </div>

            {/* <div className="centeredText">
              <span>Or use your Email address</span>
            </div>

            <div className="action_btns">
              <div className="one_half">
                <a href="#" id="login_form" className="abtn">
                  Login
                </a>
              </div>
              <div className="one_half last">
                <a href="#" id="register_form" className="abtn">
                  Sign up
                </a>
              </div>
            </div> */}
          </div>

          {/* <div className="user_login">
            <form>
              <label>Email / Username</label>
              <input type="text" />
              <br />

              <label>Password</label>
              <input type="password" />
              <br />

              <div className="checkbox">
                <input id="remember" type="checkbox" />
                <label for="remember">Remember me on this computer</label>
              </div>

              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="abtn back_btn">
                    <i className="fa fa-angle-double-left"></i> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="abtn">
                    Login
                  </a>
                </div>
              </div>
            </form>

            <a href="#" className="forgot_password">
              Forgot password?
            </a>
          </div>

         
          <div className="user_register">
            <form>
              <label>Full Name</label>
              <input type="text" />
              <br />

              <label>Email Address</label>
              <input type="email" />
              <br />

              <label>Password</label>
              <input type="password" />
              <br />

              <div className="checkbox">
                <input id="send_updates" type="checkbox" />
                <label for="send_updates">
                  Send me occasional email updates
                </label>
              </div>

              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="abtn back_btn">
                    <i className="fa fa-angle-double-left"></i> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="abtn">
                    Register
                  </a>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import {  GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { AccountCircleOutlined } from "@material-ui/icons";
import SignIn from "./SignIn";
import Gallery from "./Gallery";
import "./Header.css";
// import Gallery from "../pages/Gallery";

const clientId =process.env.REACT_APP_CLIENT_ID


function Login() {
  const nav = useNavigate();
  const [profile, setProfile] = useState({});
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  // const onLoginSuccess = (res) => {
  //   setProfile(res.profileObj);
  //   setShowloginButton(false);
  //   setShowlogoutButton(true);
  //   nav("/imageList");
  // };

  // const onLoginFailure = (res) => {
  //   console.log("Login Failed:", res);
  // };

  const onSignoutSuccess = () => {
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    setProfile({});
    // nav("/");
  };

  useEffect(() => {
    if (profile.name) {
      setShowlogoutButton(true);
      setShowloginButton(false);
    }
  }, [profile]);
  return (
    <div>
      <div className="header-container">
        <div>
          {profile.name ? (
            <div className="header-left">
              <img src={profile.imageUrl} alt="profile image" />
              <p>Welcome {profile.name}</p>
            </div>
          ) : (
            <div className="header-left">
              <div className="profile-icon">
                <AccountCircleOutlined fontSize="large" color="primary" />
              </div>
              <p>Welcome Guest Please Signin</p>
            </div>
          )}
        </div>

        <div>
          {showloginButton ? (
            <div className="button-home">
<button className="about-button">About</button>
            </div>
          ) : null}

          {showlogoutButton ? (
            <div className="signout">
              <GoogleLogout
                clientId={clientId}
                buttonText="Sign Out"
                onLogoutSuccess={onSignoutSuccess}
              ></GoogleLogout>
            </div>
          ) : null}
        </div>
      </div>
      {/* {showloginButton?nav('/'):null} */}
      {showloginButton ? <SignIn setProfile={setProfile} /> : <Gallery />}
    </div>
  );
}
export default Login;

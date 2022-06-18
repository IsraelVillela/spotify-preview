import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";
import Spline from '@splinetool/react-spline';


export default function Login() {
  return (
    <div className="login-page">
<Spline scene="https://prod.spline.design/HxSRaoIrmfLgoCkI/scene.splinecode" alt='animated logo' />

      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}

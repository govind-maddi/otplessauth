import React, { useEffect } from 'react'

function Otp({ handleLogin }) {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://otpless.com/auth.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
      }, []);

      useEffect(() => {
        window.otpless = (otplessUser) => {
         console.log(JSON.stringify(otplessUser));
         handleLogin(otplessUser);
        };
       }, []);

  return (
    <div id="otpless-login-page"></div>
  )
}

export default Otp;
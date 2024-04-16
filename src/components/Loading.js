import React from "react";
import "../styles/Loading.css";
import imgLogo from  "../images/ImgLogo.png"
const Loading = () => {
  return (
    <div className="loading">
      <img  src={imgLogo} alt="logo" className="logo" />
      <div className="line-loading"></div>
    </div>
  );
};

export default Loading;

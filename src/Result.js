import React from "react";
import rapperImages from "./rapperImages";
import "./Result.css";

const Result = ({ rapperName }) => {
  console.log("rapper name", rapperName);
  let rapperImage = rapperImages[rapperName];
  return (
    <div id='result'>
      <div id='profile-header'>
        {`Your personality is similar to ${rapperName}`}
      </div>
      <div id="img-container">
        <img
          id='artiste-profile-pic'
          src={!rapperImage ? "/logo192.png" : rapperImage}
          alt={rapperName}
        />
      </div>
    </div>
  );
};

export default Result;

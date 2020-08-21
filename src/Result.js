import React from "react";
import { Frame } from 'framer'
import rapperImages from "./rapperImages";
import "./Result.css";

const Result = ({ rapperName }) => {
  console.log("rapper name", rapperName);
  let rapperImage = rapperImages[rapperName];
  return (
    <div id='result'>
      <div id='profile-header'>
        {`Your personality is similar to\n ${rapperName}`}
      </div>
      <div id="img-container">
        <img
          id='artiste-profile-pic'
          src={!rapperImage ? "/logo192.png" : rapperImage}
          alt={rapperName}
        />
      </div>

      <div id="text1">
        <FloatingText str={rapperName} />
      </div>
      <div id="text2">
        <FloatingText str={rapperName} />
      </div>
      <div id="text3">
        <FloatingText str={rapperName} />
      </div>
      <div id="text4">
        <FloatingText str={rapperName} />
      </div>
      <div id="text5">
        <FloatingText str={rapperName} />
      </div>
      <div id="text6">
        <FloatingText str={rapperName} />
      </div>
    </div>
  );
};

const FloatingText = ({ str }) => {
  const string = Array.from(str)

  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  }
    
  // Variants for animating each letter
  const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
          type: "spring",
          damping: 16,
          stiffness: 200,
      },
    },
  }

  return (
    <Frame
      center={ "y" }
      height={ 26 }
      width={ "100%" }
      background={ "" }
      style={{
        fontFamily: "Montserrat, Work Sans, sans-serif",
        fontWeight: "bold",
        letterSpacing: "-0.04em",
        fontSize: 26,
        color: "#FFF",
        display: "flex", // Set the display value to flex
        justifyContent: "center", // Center all children elements on the x axis
      }}
      variants={ containerVariants }
      initial={ "before" }
      animate={ "after" }
      transition={{
        duration: 2,
        loop: Infinity,
        ease: "linear"
      }}
    >
      {string.map((letter, index) => (
        <Frame
          key={ index }
          width={ "auto" } // Set the width to the width of the letter
          height={ 26 } // Set the height to the height of the text
          background={ "" }
          style={{ position: "relative" }} // Position elements
          variants={ letterVariants }
        >
          {letter === " " ? "\u00A0" : letter}
        </Frame>
      ))}
    </Frame>
  )
}

export default Result;

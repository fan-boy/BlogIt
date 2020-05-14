import {
    defaultFont,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor
  } from "../../material-kit-react";

const tagsStyling = {
        
    tag: {
        background: "#eee",
        borderRadius: "3px 0 0 3px",
        color: "#999",
        display: "inline-block",
        height: "26px",
        lineHeight: "26px",
        padding: "0 20px 0 23px",
        position: "relative",
        margin: "0 10px 10px 0",
        textDecoration: "none",
        transition: "color 0.2s"
      },
    tagCloseButton:{
        height: "100px",
        width: "100px",
        backgroundColor: "#FA6900",
        borderRadius: "5px",
        position: "relative"
    },
    primaryText: {
      color: primaryColor
    },
    infoText: {
      color: infoColor
    },
    successText: {
      color: successColor
    },
    warningText: {
      color: warningColor
    },
    dangerText: {
      color: dangerColor
    },
    smallText: {
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
      color: "#777"
    }
  };
  
  export default tagsStyling;
  
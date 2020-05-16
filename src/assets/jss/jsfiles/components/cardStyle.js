const cardStyle = {
  card: {
    border: "0",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "95%",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear"
  },
  parentCard: {
    border: "0",
    borderRadius: "6px",
    marginBottom: "30px",
    marginTop: "30px",
    color: "rgba(0, 0, 0, 0.87)",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    '& span': {
      display: "flex",
      flexDirection:"column",
      opacity: "0",
      
    }


  },
  cardHover:{
    "&:hover": {
      backgroundColor: "#fff",
      opacity: "100 !important",
      '& span': {
        opacity: "100 ",
      }
    }
    
  },
  cardNoButtons:{
    opacity:"100 !important",
    '& span': {
      opacity: "100 ",
    }
  },
  cardForButtons: {
    background: "transparent",
    boxShadow: "none",
    opacity:"0",
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  }
};

export default cardStyle;

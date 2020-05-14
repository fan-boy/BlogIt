import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "../../../assets/jss/jsfiles/components/cardStyle";

const useStyles = makeStyles(styles);

export default function Card(props) {
  const classes = useStyles();
  const { className, children, plain, carousel,buttons, ...rest } = props;
  const parentCard = classNames({
    [classes.parentCard]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [classes.cardHover]:true,
    [className]: className !== undefined
  });
  const buttonDiv = classNames({
    [classes.cardForButtons]:true,
    [classes.cardHover]:true
  })
  return (
    <div className={parentCard}>
    <div className={classes.card} {...rest}>
      {children}
    </div>
      {buttons}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node
};

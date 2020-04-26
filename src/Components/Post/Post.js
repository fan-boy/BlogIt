import React from 'react';
import {withRouter} from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components


import './Post.css';
import { makeStyles } from "@material-ui/core/styles";
import Card from '../UiComponents/Card/Card';
import CardBody from '../UiComponents/Card/CardBody';
import CardHeader from '../UiComponents/Card/CardHeader';
import CardFooter from '../UiComponents/Card/CardFooter';

import styles from '../../assets/jss/jsfiles/components/customTabsStyle';

const useStyles = makeStyles(styles);

const Post = (props) => {
    const classes = useStyles();
  const { headerColor, plainTabs, content, title, rtlActive,author,clicked } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive
  });
    return(

    <Card plain = {plainTabs}>
        <CardHeader color = {headerColor} plain = {plainTabs}>
            {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        </CardHeader>
        <div onClick = {clicked} alt="Click to Open">
            <CardBody>
            <div dangerouslySetInnerHTML = { { __html:content}}></div>
            </CardBody>

            <CardFooter>
            {author}
            </CardFooter>
        </div>
    </Card>        
    
    );
};

export default withRouter(Post);
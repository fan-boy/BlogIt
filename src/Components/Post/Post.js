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
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import styles from '../../assets/jss/jsfiles/components/customTabsStyle';

const useStyles = makeStyles(styles);

const Post = (props) => {
    const classes = useStyles();
  const { headerColor, plainTabs, content, title, rtlActive,author,clicked,hover,tags  } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive    
  });
  const cardStyle = classNames({
    [classes.cardHover]: hover,
    [classes.cardStyle]: true
  });
  const contentDivStyle = classNames({
    [classes.contentDivStyle]:true
  })
    return(

    <Card plain = {plainTabs}>
        <div onClick = {clicked} alt="Click to Open" className={cardStyle}  >
            <CardBody >
            {title !== undefined ? <div className={cardTitle}><h1>{title}</h1></div> : null}
        
            <div className={contentDivStyle} dangerouslySetInnerHTML = { { __html:content}} ></div>
            <div className={classes.seeMoreStyle}>...Click on Card to See More</div>
            <br/>
            <ReactTagInput tags={tags} editable={false} readOnly={true}/>
            </CardBody>

            <CardFooter>
            {author}
            </CardFooter>
        </div>
    </Card>        
    
    );
};

export default withRouter(Post);
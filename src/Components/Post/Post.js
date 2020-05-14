import React from 'react';
import {withRouter} from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components


import { makeStyles } from "@material-ui/core/styles";
import Card from '../UiComponents/Card/Card';
import CardBody from '../UiComponents/Card/CardBody';
import CardHeader from '../UiComponents/Card/CardHeader';
import CardFooter from '../UiComponents/Card/CardFooter';
import Button from '../UiComponents/CustomButtons/Button';
// @material-ui/icons
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../../assets/jss/jsfiles/components/customTabsStyle';

const useStyles = makeStyles(styles);

const Post = (props) => {
    const classes = useStyles();
  const { headerColor, plainTabs, content, title, rtlActive,author,clicked,hover,edit,tags  } = props;
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
  });
  const buttons = (
    <span>
      <Button justIcon round color="transparent" clicked = {clicked}>
                <OpenInNewIcon className={classes.icons} />
      </Button>
      <Button justIcon round color="transparent">
                <ShareIcon className={classes.icons} />
      </Button>
      <Button justIcon round color="transparent" clicked = {edit}>
                <EditIcon className={classes.icons} />
      </Button>
      <Button justIcon round color="transparent">
                <DeleteIcon className={classes.icons} />
      </Button>
      </span>
  );
    return(
    <Card plain = {plainTabs} buttons = {buttons}>
      <div alt="Click to Open" className={cardStyle}  >
            <CardBody >
            {title !== undefined ? <div className={cardTitle}><h1>{title}</h1></div> : null}
        
            <div className={contentDivStyle} dangerouslySetInnerHTML = { { __html:content}} ></div>
            <div className={classes.seeMoreStyle}>...Click on Card to See More</div>
            <br/>
            </CardBody>

            <CardFooter>
            {author}
            </CardFooter>
        </div>
    </Card>        
    
    );
};

export default withRouter(Post);
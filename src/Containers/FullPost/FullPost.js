import React, { Component, useState, useEffect } from 'react';
import Card from '../../Components/UiComponents/Card/Card';
import CardBody from '../../Components/UiComponents/Card/CardBody';
import CardFooter from '../../Components/UiComponents/Card/CardFooter';



import './FullPost.css';
import Axios from 'axios';

import styles from '../../assets/jss/jsfiles/views/FullPost';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(styles);

const FullPost =(props) => {
    const classes = useStyles();
    const [loadedPost,setLoadedPost] = useState();
    useEffect(() => {
        if(props.match.params.id){
            if(!loadedPost ||(loadedPost && loadedPost.id !== props.match.params.id)){
            Axios.get('https://blogit-605f1.firebaseio.com/posts/' + props.match.params.id + '.json')
            .then(response =>{
                 setLoadedPost(response.data);
            });
        }
        }
    },[loadedPost,props.match.params.id])
    
    
        let post = <div className = "FullPost"><p>Please select a Post!</p></div>;
        if(props.match.params.id){
            post = (<div className = {classes.Parent}>
                <div className = {classes.FullPost}>   
                <Card>
                <CardBody>
                ...Loading
                </CardBody>    
                </Card>
                </div>
                </div>)
        }
        if(loadedPost){
        post = (
            <div className = {classes.Parent}>
            <div className = {classes.FullPost}>   
            <Card>
            <CardBody>
            <h1>{loadedPost.title}</h1>
            <div dangerouslySetInnerHTML={ { __html:loadedPost.content}}></div> 
            </CardBody>    
            <CardFooter>{loadedPost.author}</CardFooter>
            </Card>
            </div>
            </div>
        );
        }
        return post;
    
}

export default FullPost;
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";


import Post from '../../Components/Post/Post';
import Parallax from '../../Components/UiComponents/Parallax/Parallax';
import GridContainer from '../../Components/UiComponents/Grid/GridContainer';
import GridItem from '../../Components/UiComponents/Grid/GridItem';
import styles from '../../assets/jss/jsfiles/views/components';

const useStyles = makeStyles(styles);


const Posts = (props) =>{
    
    const classes = useStyles();
    const [ posts,setPosts] = useState();
    useEffect(() =>{
        axios.get('https://blogit-605f1.firebaseio.com/posts.json')
        .then(
            response => {
                const posts = response.data;
                let updatedPosts = [];
                for (let key in posts){
                    updatedPosts.push({
                        ...posts[key],
                        id:key
                    });
                }
                
                setPosts(updatedPosts);
                console.log(response);
            }
        );
    })
    const onSelectedhandler = (id) =>{
        props.history.push({pathname:'/fullpost/' +id });
    }

        let displayPosts = null;
        if(posts && posts != null){
            displayPosts = posts.map(x => {
            return( 
            //<Link to = {"/fullpost/" + x.id} key = {x.id}> 
                <Post headerColor="primary" title = {x.title} content = {x.content} author = {x.author} clicked = {() => onSelectedhandler(x.id)}/>
              //  </Link>
              )
        })
    }
        return(
            
            <div>   
                
        <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>BlogIt</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
         <section className="Posts">
           
            
                    {displayPosts}
        </section>
        </div>
        </div>
        
        );    

}
export default Posts;
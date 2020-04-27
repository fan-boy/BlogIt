import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";


import Post from '../../Components/Post/Post';
import Parallax from '../../Components/UiComponents/Parallax/Parallax';
import GridContainer from '../../Components/UiComponents/Grid/GridContainer';
import GridItem from '../../Components/UiComponents/Grid/GridItem';
import Pagination from '../../Components/UiComponents/Pagination/Pagination';
import styles from '../../assets/jss/jsfiles/views/components';
import { Card } from '@material-ui/core';

const useStyles = makeStyles(styles);


const  Posts = (props) =>{
    
    const classes = useStyles();
    const [ posts,setPosts] = useState();
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(5);
    useEffect(() =>{
      setLoading(true);
      const fetchPosts = async () =>{
        await axios.get('https://blogit-605f1.firebaseio.com/posts.json')
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
                setLoading(false);
                console.log(response);
            }
        ).catch(err => setLoading(false));
    }
    fetchPosts();
  },[]);
    const onSelectedhandler = (id) =>{
        props.history.push({pathname:'/fullpost/' +id });
    }

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        let currentPosts = null;
        let pageNumbers = [];
        if(posts && posts!=null){
          currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
          for(let i = 1;i<= Math.ceil(posts.length/postsPerPage);i++){
          if(currentPage === i){
          pageNumbers.push({active: true, text: i});
          }else{
            pageNumbers.push({text:i});
          }
          
        }
        }

        
        const paginate = pageNumber => setCurrentPage(pageNumber);
        

        let displayPosts = "Loading...";
        if(currentPosts && currentPosts != null){
            displayPosts = currentPosts.map(x => {
            return( 
            //<Link to = {"/fullpost/" + x.id} key = {x.id}> 
                <Post headerColor="warning" hover title = {x.title} content = {x.content} author = {x.author} clicked = {() => onSelectedhandler(x.id)}/>
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
                  A React Based Blog Application!
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
         <section className="Posts">
           
            
                    {displayPosts}
                    
        </section>
        <Card>
        <div className={classes.pagination}>
        <Pagination pages = {pageNumbers} color = "warning" clicked = {paginate}/>
        </div>
        </Card>  
        </div>
        
        );    

}
export default Posts;
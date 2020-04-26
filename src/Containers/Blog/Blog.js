import React, { Component } from 'react';
import Posts from '../Posts/posts';
import {Route , Switch} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import './Blog.css';
import Header from '../../Components/UiComponents/Header/Header';
import HeaderLinks from '../../Components/UiComponents/Header/HeaderLinks';


class Blog extends Component {
    state = {
        posts :[],
        selectedPostId : null
    }

    
    
    render () {
        const { ...rest } = this.props;
        return (
            <div className="Blog">
                <div>
            <Header
            brand="BlogIt"
            rightLinks={<HeaderLinks />}
            fixed
            color="white"
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            {...rest}
          />         
            
          
                
                
                <Switch>
                    <Route path ="/" component = {Posts} exact />
                    <Route path ="/newPost" component = {NewPost} exact />
                    <Route path = "/fullPost/:id" component = {FullPost} exact />
                </Switch>
                    
            </div>
            </div>
        );
    }
}

export default Blog;
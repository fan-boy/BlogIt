import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


import './NewPost.css';
import Axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: '',
        submitted: false
    }

    postDataHandler = () =>{
        const post = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
        }
        Axios.post('https://blogit-605f1.firebaseio.com/posts.json',post).then(response =>{

            this.setState({submitted:true});
            console.log(response);
    }
            )
    }

    render () {
        let submitted = null;
        if(this.state.submitted){
            submitted = <Redirect to ="/"/>
        }

        
        
    
        return (
     

            <div className="NewPost">
                {submitted}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <div className="CkEditorSizing">
                <CKEditor
                    editor={ InlineEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        this.setState({content:data});
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    
                />
                </div>
                <label>Author</label>
                <input type = "text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
                <button onClick = {this.postDataHandler}>Add Post</button>
                
            </div>
        );
    }
}

export default NewPost;
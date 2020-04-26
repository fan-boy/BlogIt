import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import './NewPost.css';
import Axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import CustomInput from '../../Components/UiComponents/CustomInput/CustomInput';
import Card from '../../Components/UiComponents/Card/Card';
import CardBody from '../../Components/UiComponents/Card/CardBody';
import CustomButton from '../../Components/UiComponents/CustomButtons/Button';

import styles from '../../assets/jss/jsfiles/components/typographyStyle';

const useStyles = makeStyles(styles);


const NewPost = (props) => {
    const classes = useStyles();
    const[ title,setTitle] = useState();
    const[content,setContent] = useState();
    const[author,setAuthor] = useState();
    const[submitted, setSubmitted] = useState(false);
    
    const postDataHandler = () =>{
        const post = {
            title: title,
            content: content,
            author: author,
        }
        Axios.post('https://blogit-605f1.firebaseio.com/posts.json',post).then(response =>{

            setSubmitted(true);
            console.log(response);
    });
   }

    
        let isSubmitted = null;
        if(submitted){
            isSubmitted = <Redirect to ="/"/>
        }

        
        
    
        return (
     

            <div className="NewPost">
                {isSubmitted}
                <Card>
                <div className = {classes.typo}>    
                <h1>Add a Post</h1>
                </div>
                <CardBody>
                <div className = "ContentSizing">
                <CustomInput
                labelText="Title"
                id="float"
                formControlProps={{
                    fullWidth: true
                  }}
                changed = {(event) => setTitle(event.target.value)}
                />
                <label>Content</label>
                <div className="CkEditorSizing">
                <CKEditor
                    editor={ InlineEditor }
                    label = "Enter Text Here"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        setContent(data);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    
                />
                </div>
                <CustomInput
                labelText="Author"
                id="float"
                formControlProps={{
                    fullWidth: true
                  }}
                changed ={(event) => setAuthor(event.target.value)}
                />

                <CustomButton color = "primary"
                    clicked = {postDataHandler}
                >Add Post </CustomButton>
                </div>
                </CardBody>
                </Card>
            </div>
        );
    }


export default NewPost;
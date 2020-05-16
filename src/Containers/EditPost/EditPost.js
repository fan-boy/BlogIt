import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import Axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CustomInput from '../../Components/UiComponents/CustomInput/CustomInput';
import Card from '../../Components/UiComponents/Card/Card';
import CardBody from '../../Components/UiComponents/Card/CardBody';
import CardFooter from '../../Components/UiComponents/Card/CardFooter';
import CustomButton from '../../Components/UiComponents/CustomButtons/Button';
import Tags from '../../Components/UiComponents/Tags/Tags';
import '../../Components/UiComponents/Tags/tagsInupts.css';

import styles from '../../assets/jss/jsfiles/views/NewPost';

const useStyles = makeStyles(styles);


const EditPost =React.memo((props) => {
    const classes = useStyles();
    const {match} = props;
    const {params} = match;
    const {id} = params;

    const[ title,setTitle] = useState();
    const[content,setContent] = useState();
    const[author,setAuthor] = useState();
    const[submitted, setSubmitted] = useState(false);
    const[tags,setTags] = useState([]);
    const [loadedPost,setLoadedPost] = useState();
    useEffect(() => {
        console.log("EditPost");
        if(id){
            
            Axios.get('https://blogit-605f1.firebaseio.com/posts/' + id + '.json')
            .then(response =>{
                 setLoadedPost(response.data);
                 setTitle(response.data.title);
                 setContent(response.data.content);
                 setAuthor(response.data.author);
            });
        
        }
    },[id])
    const postDataHandler = () =>{
        const post = {
            title: title,
            content: content,
            author: author,
            tags: tags
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
        let disabled = true;
        if(title && content && author){
            disabled = false
        }

        let post = <div className = {classes.FullPost}><p>Please select a Post!</p></div>;
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
            <div className={classes.NewPost}>
                {isSubmitted}
                <Card >
                <h1>Edit Post</h1>
                <CardBody>
                <div className = {classes.ContentSizing}>
                <CustomInput
                labelText="Title"
                id="float"
                formControlProps={{
                    fullWidth: true
                  }}
                 value = {title} 
                changed = {(event) => setTitle(event.target.value)}
                />
                <label>Content</label>
                <div className={classes.CkEditorSizing}>
                <CKEditor
                    editor={ ClassicEditor }
                    label = "Enter Text Here"
                    data = {content}
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
                <br/>
                <Tags/>
                <br />
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
                    disabled = {disabled}
                >Add Post </CustomButton>
                </div>
                </CardBody>
                </Card>
            </div>
            
        );
        }
        
        
    
        return (
     
            <div className={classes.Parent}>
                {post}
            </div>
        );
    });


export default EditPost;
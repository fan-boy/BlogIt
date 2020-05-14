import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from '../CustomInput/CustomInput';
import styles from '../../../assets/jss/jsfiles/components/tags';

const useStyles = makeStyles(styles);

const Tags = (props) => {

    const classes = useStyles();
    const [tags, setTags] = React.useState([]);
    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
    return (
        <div>
        {tags.map((tag, index) => (
            <li key={index}>
                <div className = {classes.tag}>
                <span >{tag}</span>
                <i
                    className={classes.tagCloseButton}
                    onClick={() => removeTags(index)} 
                    
                >
                    x
                </i>
                </div>
            </li>
        ))}
        <br />
        <CustomInput
                labelText="Tags"
                id="float"
                formControlProps={{
                    fullWidth: false
                  }}
                  onKeyUp={event => addTags(event)}
                />
        </div>
    );
};

export default Tags
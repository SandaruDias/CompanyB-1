import {  useState} from "react";
import { Button,TextField } from '@mui/material';

function FileUploadform(){
    const [name,setName]=useState('');
    const [email,setEmail] =useState('');
    const [file,setFile] =useState(null);

    //Change of name
    const handleNameChange = (event)=>{
        setName(event.target.value);
    };

    //Change of email
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    };
    
    //Changing the file 
    const fileChange = (event)=> {
        const file = event.target.files[0];
        if(file){
            const fileType = file.type;
            if(fileType!== "application/pdf"){
                alert("PDF files only");
                return;
            }
            setFile(file);
        }
    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        if(!file){
            alert("Please upload a file.");
            return;
        }
        console.log('Name:',name);
        console.log("Email:",email);
        console.log('Uploading:',file.name);
    };

    return(
        <box component="form" onSubmit={fileSubmit} noValidate={{marginTop: 20}}>
            <TextField
              type="file"
              onChange={fileChange}
              inputProps={{accept :"application/pdf"}}
              variant="outlined"
              fullWidth
              margin="normal"              
            />

            <Button 
            type="submit" variant="contained" color="primary">
                Upload Design
            </Button> 
        </box>
    );
}

export default FileUploadform;
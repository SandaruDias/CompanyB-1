import {  useState} from "react";
import { Box, Button,TextField, Typography,Alert,Snackbar } from '@mui/material';
import { useNavigate } from "react-router-dom";


function FileUploadform(){
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail] =useState('');
    const [file,setFile] =useState(null);
    const [alertInfo,setAlertInfo] = useState({
        open :false,
        Message: "",
        severity:"info"
        });
    
    const handleCloseAlert = (event,reason)=> {
        if (reason==="clickaway"){
            return;
        }
        setAlertInfo({...alertInfo,open : false});
    };
        
    

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
            setAlertInfo({open:true,Message:"Please enter a file.",severity:"error"});
            return;
        }
        if(!name){
            setAlertInfo({open:true,Message:"Please enter a name.",severity:"error"});
            return;
        }
        if(!email){
            setAlertInfo({open:true,Message:"Please enter an email.",severity:"error"});
            return;
        }
        console.log('Name:',name);
        console.log("Email:",email);
        console.log('Uploading:',file.name);
        setAlertInfo({open:true,Message:"Successfully submitted !!",severity:"success"});
        navigate("/training-simulation");
    };



    return(
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600, margin: 'auto' ,padding: 2, 
        border: '1px solid #ccc', 
        borderRadius: '10px', 
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>
            <Typography variant="h6" fontWeight="bold">SIMULATION REQUEST</Typography>
            <TextField
                label="Name"
                variant= "outlined"
                value={name}
                onChange={handleNameChange}
                required
                sx = {{mb:2,mt:2}}
            />

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <TextField
                    label="Email"
                    variant= "outlined"
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    required
                    sx={{mb:2}}
                />
                <Button
                    variant="contained"
                    component="label"
                    sx={{
                        mb:2, 
                        justifyContent: "center", 
                        alignItems: "center", 
                        display: "flex"
                      }}
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                        onChange={fileChange}
                        accept=".pdf"
                    />
                </Button>
            </Box>
            {file && <Typography>{file.name}</Typography>}
            
            <Snackbar open ={alertInfo.open} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity = {alertInfo.severity} sx={{width:"100%"}}>
                    {alertInfo.Message}
                </Alert>
            </Snackbar>
            <Button 
            type="submit" variant="contained" color="primary" >
                Upload Design
            </Button> 
        </Box>
    );
}

export default FileUploadform;
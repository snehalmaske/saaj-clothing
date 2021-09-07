import React, {useState} from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import "./styles/signIn.scss";

function SignIn(props){

    const [contact, setContact] = useState({
        fullName : "",
        email : "",
        password:"",
        confirmpassword:""
    });
    
    function handleChange(event){
       

        const {value, name} = event.target;

        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
        
    }

    function handleSubmitChange(event){
        event.preventDefault();
        const{email, fullName, password, confirmpassword} = contact;

        props.emailSignInStart(email, fullName, password, confirmpassword);

    }

    return (
        <div className="sign-in">
          <h1>Hello {contact.fullName} </h1>
          <form onsubmit={handleSubmitChange}>
            <FormInput 
                onHandleChange={handleChange} 
                name="fullName"
                value={contact.fullName} 
                label = "Given Name"
                    required
                />
            
            <FormInput
                onHandleChange = {handleChange} 
                name= "email"
                value = {contact.email} 
                label = "Email"
                    required
                />

             <FormInput
                onHandleChange ={handleChange} 
                name="password"
                value={contact.password} 
                label = "Password"
                    required
                />    
                <FormInput
                onHandleChange ={handleChange} 
                name="confirmpassWord"
                value={contact.confirmpassword} 
                label = "Confirm Password"
                    required
                />          
           <Button 
           type="submit"
            > SIGN UP</Button>
          </form>
        </div>
      );
}

export default SignIn;

|||||||||Fome error sat


const [name, setName] = useState("");
const [nameError, setNameError] = useState("");

const validateName = () => {
  if (!name) {
    setNameError("Name is required.");
  } else if (name.length < 3) {
    setNameError("Name must be at least 3 characters long.");
  } else {
    setNameError("");
  }
};
{ nameError && <div className="error">{nameError}</div> }


<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
<input type="text" value={name} onChange={(e) => setName(e.target.value)} onBlur={validateName} />


||||||||||||||||||||||||||||||||||||




/////////////////!SECTION form validation 


    import React, { useContext, useState } from 'react';
    import { useHistory } from 'react-router-dom';
    import { UserContext } from '../App';
    import "./style/form.css";
function Form() {
  const {state , dispatch}= useContext(UserContext);
  const history=useHistory();
      const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      const errors = {};
  
      if (!name) {
        errors.name = 'Name is required';
      }else if(name.length<7){
        errors.name = 'add more word';
      }
  
      if (!email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
      }
  
      if (!password) {
        errors.password = 'Password is required';
      }else if(password.length<7){

        errors.password = 'enter more word';
      }
  
      return errors;
    };
  
    const handleSubmit = async(event) => {
      event.preventDefault();
  
      const errors = validate();
  
      if (Object.keys(errors).length === 0) {
        // Submit form
      } else {
        setErrors(errors);
      }

      console.log(errors)
      
    

      const users=await fetch("/Signup",{
        method:"POST",
        headers:{
        "Content-Type": "application/json",
        },
        body:JSON.stringify({
      name,
        email,
        password,
        })
        })    
        const res=await users.json();

        if(users.status === 400 || !res){
          window.alert("please enter your sigup")
    alert("please enter your Login")
    
      }else{
        // localStorage.setItem("usersdatatoken",res.result.token);
          alert("is complete")
          history.push("/")
      }

    };
  

  return (
    <div>
{/* start row class line  */}

<div className="image-add">


<div className="contaired glass">

<div className="create-from">

<h1>Sign up to our platform</h1>

<p>create a new account</p>
</div>

<div className="form">


 <form onSubmit={handleSubmit} method="POST">
 <center>


         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter a name" />
      <p>  {errors.name && <span>{errors.name}</span>}</p> 
      
       <br />
      
  
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter a email" />
         <p>  {errors.email && <span>{errors.email}</span>}</p>
      
       <br />
    

      
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter a password" />
       <p> {errors.password && <span>{errors.password}</span>}</p> 
   

       <br />
      
       <button type="submit">Submit</button>
       </center>
     </form>


</div>
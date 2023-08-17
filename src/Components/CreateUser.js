import React from 'react'
import { useState,useRef} from 'react'
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';

const CreateUser = () => {
 const [inputs,setinputs]=useState({
  name: "",
  email: "",
  mobile: "",
 });

 const name=useRef();
 const email=useRef();
 const mobile=useRef();


 const navigator=useNavigate();


 const handlechange=(event)=>{
  setinputs({
    ...inputs,
    [event.target.name]:event.target.value,
  });

 }

  const handlesubmit=(event)=>{
    
    try {
      event.preventDefault();  
      
      if(inputs.name.length===0 && inputs.email.length===0 && inputs.mobile.length===0){
        window.alert("Fill The All Text Feild is Must.........");

      }else{
        axios
        .post("http://localhost/react_mysql/adduser.php", {
          username: inputs.name,
          useremail: inputs.email,
          usermobile: inputs.mobile,
        })
        .then(function(res)  {

          
          if (res.data.status== 200) {
            
            window.alert(res.data.message);
            name.current.value="";
            email.current.value="";
            mobile.current.value="";
           navigator("/");

            
          }else if(res.data.status==201){
            window.alert(res.data.message);
          }
          else if(res.data.status==202){
            window.alert(res.data.message);
            navigator('/create');
          }
          else if(res.data.status==203){
            window.alert(res.data.message);
            navigator('/create');
          }

         
        });

      }

      
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <h1 align="center">
        Create USers
      </h1>
       <div className='container'>
       <form onSubmit={handlesubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">NAme</label>
          <input type="text" ref={name} name='name' onChange={handlechange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
           
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Email</label>
          <input type="email" ref={email} name='email' onChange={handlechange} class="form-control" id="exampleInputPassword1"></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Moblie</label>
          <input type="number" ref={mobile} name='mobile' onChange={handlechange} class="form-control" id="exampleInputPassword1"></input>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
       </div>
     
    </div>
  )
}

export default CreateUser
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditUser = () => {

  const [user, setuser] = useState({
    name: "",
    email: "",
    mobile: "",
    
  });

  const { name, email, mobile } = user;

  const { id } = useParams();


  useEffect(() => {
    loaduser();
  },[]);

  const loaduser = async () => {

    const result = await axios.get("http://localhost:80/react_mysql/edituser.php?id=" + id).then(function (res) {

      setuser(res.data.userdata);
     
    });

  }

  const handlechangevalue=(e)=>{
    setuser({
      ...user,
      [e.target.name]:e.target.value
    });
  }


  const updatesubmit=async(e)=>{
    e.preventDefault();

    await axios.post("http://localhost/react_mysql/updateuser.php",user).then(
      function(res){

        if(res.data.status==100){
          window.alert(res.data.message);

        }else if(res.data.status==101){
             window.alert(res.data.message);


        }

      }
    )
  }
  return (
    <div>
      <div className="container">
        <h1 className="userlist-title" align={'center'}>EDIT User</h1>
       
        <Form onSubmit={(e)=>updatesubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e)=>handlechangevalue(e)}
              required
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e)=>handlechangevalue(e)}
              required
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User Mobile</Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              value={mobile}
              onChange={(e)=>handlechangevalue(e)}
              required
              placeholder="Enter Mobile Number"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            UPDATE
          </Button>
        </Form>

        </div>

      </div>
      );
}
export default EditUser;
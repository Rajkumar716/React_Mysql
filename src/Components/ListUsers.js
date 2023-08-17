import React from 'react';
import axios from 'axios'
import { useEffect,useState } from 'react'
import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom';

function Listuser() {

  useEffect(()=>{

    getusers();
  },[]);

  const [users,setusers]=useState([]);

  function getusers(){
    axios.get("http://localhost/react_mysql/userlist.php").then(function(response){
      console.log(response.data.userlist.userData);
      setusers(response.data.userlist.userData);

    });
  };

  const DeleteConfirm=async(id)=>{
    if(window.confirm("Are Your Want To Do it?")){
      DeleteUser(id);

    }
  
  };

   


  const DeleteUser=async(id)=>{
    try{

      axios.post("http://localhost/react_mysql/deleteuser.php",{
        userid:id
      }).then(function(res){
        setusers([]);
        getusers();
      
      })

    }catch(e){
      throw e;
    }
  }
  return (
    <div className='container'>
      <h1 align="center">USER LISTS</h1>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>USER ID</th>
            <th>USER Name</th>
            <th>USER EMAIL</th>
            <th>USER MOBILE</th>
            <th>USER CREATED AT</th>
            <th>USER UPDATE AT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index)=>(
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.created_at}</td>
              <td>{user.edit_date}</td>
              <td>
                <button type='button' className='btn btn-danger' style={{marginRight:10}} onClick={()=>DeleteConfirm(user.id)}> DELETE</button>


                <Link to={`/edit/${user.id}`} className='btn btn-success'>EDIT</Link>
              </td>

            </tr>
          ))}
      
        </tbody>
      </Table>

    </div>
  )
}

export default Listuser 
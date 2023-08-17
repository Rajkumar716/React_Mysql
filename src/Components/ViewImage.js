import React from "react";
import axios from 'axios'
import { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';


const ViewImage = () => {

  const [image, setimage] = useState([]);
  
  useEffect(() => {
    getimage();
  }, [])

  function getimage() {
    axios.get("http://localhost/react_mysql/getimage.php").then(function (response) {
      console.log(response.data.imagelist.imagedata);
      setimage(response.data.imagelist.imagedata);

    });

      
  }
  return (
    <div className="container">
      <h1 align="center">VIEW IMAGE</h1>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>FILE Name</th>
            <th>IMAGE</th>
            <th>UPDATE DATE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>

          {image.map((image, index) => (
            <tr key={index}>
              <td>{image.id}</td>
              <td>{image.file}</td>
              <td> <Image width="150px" src={`http://localhost/react_mysql/upload/${image.file}`} rounded /></td>
              <td>{image.updated_date}</td>
              <td><button className="btn btn-success">EDIT</button></td>
            </tr>

          ))}


            </tbody>
      </Table>
    </div>
  )
}

export default ViewImage
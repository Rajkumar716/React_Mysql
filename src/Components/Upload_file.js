import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRef } from 'react';


const Upload_file = () => {

  const [uploadfile, setuploadfile] = useState(null);
  const filename=useRef();

  const handlechange = (e) => {

    setuploadfile(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const handlesubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData(this);
    formdata.append("upload_file", uploadfile);
    axios.post("http://localhost/react_mysql/uploadfile.php", formdata).then(
      function (res) {
        if (res.data.status == 100) {
          window.alert(res.data.message);

        } else if (res.data.status == 101) {
          window.alert(res.data.message);
        } else if (res.data.status == 102) {
          window.alert(res.data.message);
          filename.current.value="";
        }
        else if (res.data.status == 103) {
          window.alert(res.data.message);
        }

      }
    )


  }
  return (
    <Container>
      <div >
        <h1 align="center">Upload File</h1>
        <Form onSubmit={handlesubmit}>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>SELECT THE FILE</Form.Label>
            <Form.Control ref={filename} type="file" placeholder="Choose File" name='file_name' onChange={handlechange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Upload_file
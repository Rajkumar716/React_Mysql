import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Listuser from './Components/ListUsers';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
import Upload_file from './Components/Upload_file';
import ViewImage from './Components/ViewImage';

function App() {
  return (
    <div className="App">
      <h1 align="center">React MY sql CRUD Functions</h1>
      <BrowserRouter>
        <ul class="nav justify-content-center">
          <li class="nav-item">
           <Link to={"/"}>LIST OF USER</Link>
          </li>

          <li class="nav-item">
          <Link to={"/create"}>CREATE USER</Link>
          </li>
          <li class="nav-item">
          <Link to={"/upload"}>UPLOAD FILE</Link>
          </li>
          <li class="nav-item">
          <Link to={"/viewimage"}>VIEW IMAGE</Link>
          </li>
          
        </ul>
        <Routes>
          <Route path='/' element={<Listuser></Listuser>}></Route>
          <Route path='/create' element={<CreateUser></CreateUser>}></Route>
          <Route path='/edit/:id' element={<EditUser></EditUser>}></Route>
          <Route path='/upload' element={<Upload_file></Upload_file>}></Route>
          <Route path='/viewimage' element={<ViewImage></ViewImage>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

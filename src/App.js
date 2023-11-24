import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import UserManagement from './Pages/UserManagement/UserManagement';

// import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
     
      <Routes> 
      <Route path='/' element={<Login/>}/>   
      <Route path='/home' element={<Home/>}/>
      <Route path='/profilepage' element={<ProfilePage/>}/>
      <Route path='/usermanagement' element={<UserManagement/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

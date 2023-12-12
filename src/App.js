import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'
import ProfilePage from './Pages/ProfilePage/ProfilePage';
// import UserManagement from './Pages/UserManagement/UserManagement';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './Pages/SignIn/SignIn';
import Joineduser from './components/Joineduser';
import Inviteduser from './components/Inviteduser/Inviteduser';
import UserComponent from './Pages/UserComponent/UserComponent';
function App() {
  return (
    <div className="App">
     <AuthContextProvider>
      <Routes> 
      <Route path='/' element={<Login/>}/>  
      <Route path='/signin' element={<SignUp/>}></Route>
      <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
     
      <Route path='/profilepage' element={
        <ProtectedRoute> <ProfilePage/></ProtectedRoute>}
      />
      <Route path='/usermanagement' element={
      // <ProtectedRoute><UserManagement/></ProtectedRoute>}>
      <ProtectedRoute><UserComponent/></ProtectedRoute>}>
          <Route path='/usermanagement/joined' element={<Joineduser/>}></Route>
          <Route path='/usermanagement/invited' element={<Inviteduser/>}></Route>
      </Route>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

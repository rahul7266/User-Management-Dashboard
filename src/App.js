import {React, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'

import './styles/styles.css';
import AccountCreationTab from './components/AccountCreationTab';
import UserDetailsTab from './components/UserDetailsTab';

import {UserDetailsContext} from './context/UserDetailsContext'
import UserModal from './components/UserModal';

function App() {
  const [selectedUser, setselectedUser] = useState(null)
  const [modalOpen, setmodalOpen] = useState(false) ;

  return (
    <BrowserRouter>
    <div className="App">
    <UserDetailsContext.Provider value={{selectedUser,setselectedUser,setmodalOpen}} >
   <center><h1>User Management Dashboard</h1></center>
      <Navbar />
      <Routes>
      
          <Route path="/" element = {<UserDetailsTab/>}>User Details</Route>

          <Route path="/AccountCreationTab" element = {<AccountCreationTab/>}>Account Creation</Route>
         
        </Routes>

        {modalOpen && <UserModal></UserModal>}
       </UserDetailsContext.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;

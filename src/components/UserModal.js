import React, {useContext} from 'react';

import "../styles/UserModal.css";
import { RiCloseLine } from "react-icons/ri";
import {  useNavigate } from "react-router-dom" ;
import { UserDetailsContext } from '../context/UserDetailsContext';

const UserModal = () => {

  const {selectedUser, setmodalOpen} = useContext(UserDetailsContext) ;
  return (
    <div className="modal">
     <div className="darkBg" onClick={()=>{setmodalOpen(false)}}>
<div className="centered">
  <div className="modal">
    {/* modalHeader */}
    <div className="modalHeader">
      <h5 className="heading">User Details</h5>
    </div>
    <button className="closeBtn" onClick={()=>{setmodalOpen(false)}}>
      <RiCloseLine />
    </button>
    {/* modalContent */}
    <div className="modalContent">
        <p>Username:  {selectedUser?.username}</p>
        <p>Email:  {selectedUser?.email}</p>
        <p>Phone:  {selectedUser?.phone}</p>
        <p>ID:  {selectedUser?.id}</p>
        <p>Creation Date: {selectedUser?.creationDate}</p>
    </div>
  
  </div>
</div>
</div>

    </div>
  );
};

export default UserModal;


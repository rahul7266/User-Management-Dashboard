import React, { useState , useContext} from 'react';
import UserData from '../data/UserData';
import UserModal from './UserModal';
import "../styles/UserDetailsTab.css";
import { UserDetailsContext } from '../context/UserDetailsContext';

const UserDetailsTab = () => {
  const [searchQuery, setSearchQuery] = useState('');

 
  const {setselectedUser,setmodalOpen} = useContext(UserDetailsContext) ;

  const handleUserClick = (user) => {
    setselectedUser(user);
    setmodalOpen(true) ;
  };

  

  // ... (rest of the component)

  return (
    <div className='userDetails'>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
      />

      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        {/* Table data */}
        <tbody>

        {
          UserData.filter((user)=>{
            return searchQuery.toLowerCase().trim()==='' ? user :(user.username.toLowerCase().includes(searchQuery) ||
            user.email.toLowerCase().includes(searchQuery) ||
            user.phone.toLowerCase().includes(searchQuery))
          }).map((user) => (
            <tr key={user.id} onClick={() => handleUserClick(user)}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.id}</td>
              <td>{user.creationDate}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    

    </div>
  );
};

export default UserDetailsTab;

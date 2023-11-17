import React, { useState } from "react";

import "../styles/AccountCreationTab.css" ;



export default function AccountCreationTab() {

  
  const [username, setusername] = useState("")
  const [password, setPassword] = useState("");
  const postData = ()=>{
      console.log(username,password) ;
  }

  return (
    <div className='signIn'>
      
        <div className="form">
         
          <div>
          <input
              type="text"
              name="username"
              id="username"
              placeholder="enter username"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          
          <div>
          <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input
            type="submit"
            id="submit-btn"
            value="Sumbit"
            onClick={() => {
              postData();
            }}
          />
        </div>
      

    </div>
  )
}



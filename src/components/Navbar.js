import {React} from "react";

import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div className="navbar">
   
         <Link to="/">
          <li>User Details</li>
        </Link>

        <Link to="/AccountCreationTab">
          <li>Account Creation </li>
        </Link>
       
    </div>
  )
}




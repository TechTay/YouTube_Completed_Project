import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";



const Navbar = (props) => {
  const { logoutUser, user } = useContext(AuthContext);
  const [userInput,setUserInput] = useState('')
  const navigate = useNavigate();


  async function handleSubmit(event) {
    event.preventDefault();
    props.setSearch(userInput);
  }

  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Motivation Destination</b>
          </Link>
        </li>
        <li>
          <form onSubmit={(e) => handleSubmit(e)}>
          <button  type='submit'className='search' style={{'marginTop': '0.1em', 'marginRight': '0.7em'}}>Search </button>
          <input type='text' className='SearchBar' placeholder="Search Videos Here!" value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
          </form>      
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

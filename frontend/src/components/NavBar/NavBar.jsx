import axios from "axios";
import React from "react";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";



const Navbar = (props) => {
  const { logoutUser, user } = useContext(AuthContext);
  
  const navigate = useNavigate();


  async function handleSubmit(event) {
    event.preventDefault();
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${props.search}&key=AIzaSyB7JFFdYJah4J-bbQIscizH68BUw1QCoD4&part=snippet` 
    )
    console.log(response.data.items)
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
          <input type='text' className='SearchBar' placeholder="Search Videos Here!" value={props.search} onChange={(event) => props.setSearch(event.target.value)}/>
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

import React from "react";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";



const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const [search, setSearch] = useState([''])
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    let newSearch = {
        search: search
    };
    console.log(handleSubmit)
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
          <button onSubmit={handleSubmit} type='submit'className='search' style={{'marginTop': '0.1em', 'marginRight': '0.7em'}}>Search </button>
          <input type='text' className='SearchBar' placeholder="Search Videos Here!" value={search} onChange={(event) => setSearch(event.target.value)}/>
          
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

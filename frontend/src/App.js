// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useState } from "react";
import SearchPage from "./pages/SearchPage/SearchPage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import VideoPage from "./pages/VideoPage/VideoPage";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import CommentForm from "./components/CommentForm/CommentForm";

function App() {
  const [search, setSearch] = useState(['Motivation'])
 
  return (
    <div>
      <Navbar search={search} setSearch={setSearch}/>
      <Routes>
        <Route
          path="/"
          element={
            
              <SearchPage search={search} />
    
          }
        />
        <Route path="/videos/:videoId/" element={<VideoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

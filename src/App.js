import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Createbook from "./Components/Page/Craetebook";
import DeleteBook from "./Components/Page/Deletebook";
import Editbook from "./Components/Page/Editbook";
import Home from "./Components/Page/Home";
import Showbook from "./Components/Page/Showbook";
import Register from "./Components/Users/Register.jsx";
import Login from "./Components/Users/Login.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/register" />} />  
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

        <Route path="/books/create" element={<Createbook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/edit/:id" element={<Editbook />} />
        <Route path="/books/details/:id" element={<Showbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

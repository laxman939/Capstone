import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import PostProperty from "./Components/Post-Property/PostProperty";
import Navigation from "./Components/Navigation/Navigation";
import User from "./Components/User/user";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/postproperty" exact element={<PostProperty />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/user" exact element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

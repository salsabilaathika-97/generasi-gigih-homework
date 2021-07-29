import './App.css';
import gif from './Data';
import { Image, Form } from './Components/Giphy';
import React from "react";
import {Link, Router, Route} from "react-router-dom";

const TrendingPage = () => {
  return <>Trending Page</>
}

const App = () => {
  return(
    <>
    <Router>
      <Route exact path ="/"/>
    </Router>
  </>
  );};



export default App;
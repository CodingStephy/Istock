import { Route, Switch } from 'react-router-dom';
import "./App.css";
import React from "react";
import Header from "./Components /Header"
import Main from "./Pages /Main"


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;

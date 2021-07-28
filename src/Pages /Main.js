import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import About from './About'
import Dashboard from './Dashboard'
import Stock from './Stock'
import Home from './Home'
import stockData from './Stockdata'

const Main = (props) => {
  const [stocks, setStocks] = useState(null)
  
  useEffect(() => {
    setStocks(stockData)
  },[])

    return (
      <div className="Main">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route 
          path="/stocks/:symbol" 
          render={(routerProps) => {return <Stock {...routerProps} stocks={ stocks}/>}}
        />
        <Route path="/stocks">
          <Dashboard  stocks={stocks}/>
        </Route>
        </Switch>
      </div>
    );
  }
  export default Main;
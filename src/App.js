import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe (
  "pk_test_51Kziy8SDrzj4CVs2MikCFzGkSQIcJQO8StKsj4qKn8YPlVOUng9LXBdojqavMBsUtygFR5Tjbsm1g6ry51FYRCfD00R3W5RQVP"
);

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser){

        dispatch({
          type:'SET_USER',
          user: authUser
        })
        
      }else{

        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })

  }, [])

  return (
    <Router> 
    <div className="app">
      <center><h1>CRAFTSCAPE</h1></center>
      <Switch>
          <Route path="/orders">
          <Header/>
          <Orders />
          </Route>
          <Route path="/checkout">
          <Header/>
          <Checkout />
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
          </Route>
          <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

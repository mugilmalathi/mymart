import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Grocery from "./components/Products/Grocery";
import Home from "./components/Home/Home";
import { Signin } from "./components/Login/signin";
import { Signup } from "./components/Login/signup";
import { Checkout } from "./components/Checkout/Checkout";
import { Payment } from "./components/Payment/Payment";
import { Success } from "./components/Success/Success";
import { Addtocart } from "./components/AddToCart/Addtocart";
import Navbar from "./components/Navbar/Navbar";
import { GroceryDetail } from "./components/SingleProduct/GroceryDetail";
import Mobile from "./components/Products/Mobile";
import { MobileDetail } from "./components/SingleProduct/MobileDetail";
import Travel from "./components/Products/Travel";
import Fashion from "./components/Products/Fashion";
import { FashionDetail } from "./components/SingleProduct/FashionDetail";

function App({ current }) {
  return (
    <Router>
      <div className="app">
        {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/grocery" component={Grocery} />
            <Route exact path="/grocery/:groceryId" component={GroceryDetail} />

            <Route exact path="/mobile" component={Mobile} />
            <Route exact path="/mobile/:mobileId" component={MobileDetail} />

            <Route exact path="/fashion" component={Fashion} />
            <Route exact path="/fashion/:fashionId" component={FashionDetail} />
            
            <Route exact path="/login" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup/:userId" component={Navbar} />

            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/cart" component={Addtocart} />
            <Route exact path="/travel" component={Travel} />
          </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

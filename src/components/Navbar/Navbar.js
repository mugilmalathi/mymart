import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Images/logo.png"
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const history = useHistory();
  const [logout, setLogout] = React.useState(false);
  const displayUser = useSelector((state)=> state.displayuser.displayuser);
  console.log(displayUser)
  const count = useSelector((state)=> state.cartcount.cartcount);
  // const dispatch = useDispatch();
  
  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/signin");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <div id="navbar">
      <Link to="/">
        <img id="navbar-logo" src={logo} alt="" />
      </Link>
      
        <div id="nav-cart">
          <Link to="/signin"><button onClick={logoutHandler} id="account">Logout</button></Link>
          <Link to="/cart">
             <img id="nav-img" src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-add-to-cart-online-shopping-tulpahn-flat-tulpahn.png"/>
          </Link>
          <div>{count}</div>
        </div>
        
        <div><p id="display">Welcome, {displayUser.firstname}</p></div>
      
    </div>
  );
};

export default Navbar;

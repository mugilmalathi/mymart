import React, { useEffect } from "react";
import "./login.css"
import signin from "../Images/login.png"
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"
import { emailValidator, passwordValidator } from "./regexValidator";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Home/Home";
import { SetUsers } from "../../redux/Shopping/shopping-actions";
import axios from "axios";

export const Signin = ()=>{

  const history = useHistory()

  const dispatch = useDispatch()

  const users = useSelector((state)=> state.users.users)

  const fetchUsers = async ()=>{
    const res = await axios
    .get("https://boiling-brushlands-36073.herokuapp.com/users")
    .catch((err)=>{
        console.log("Err", err);
    })
    dispatch(SetUsers(res.data));
};

useEffect(()=>{
  fetchUsers();
}, [])

	const [input, setInput] = React.useState({ email: '', password: '' });

	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

  const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	

	React.useEffect(()=>{
		if(localStorage.getItem('auth')) history.push('/')
	},[])

	const formSubmitter = e => {
		e.preventDefault();
		setsuccessMessage('');
		if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

		if (!passwordValidator(input.password))
			return seterrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
		// setsuccessMessage('Successfully Validated');
    users.map((e)=>{
      
      if(input.email !== e.email || input.password !== e.password) return seterrorMessage('Invalid email or password');
        history.push('/')
        localStorage.setItem('auth', true)
    })
    
	};

    return(
        <div id="signin">
          <div id="signin-div">
            <div id="signin-left">
              <img src={signin} alt="" />
            </div>
            <div id="signin-right">
              <h1>SIGN IN</h1>
              {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
              <label>Name</label>
              <br />
              <input 
                  placeholder="Enter Name" 
                  type="text"
                  name="name" 
                  onChange={handleChange}
                  />
              <br />
              <label>Email</label>
              <br />
              <input 
                  placeholder="Enter Email" 
                  type="text"
                  name="email" 
                  onChange={handleChange}
                  />
              <br />
              <label>password</label>
              <br />
              <input 
                  placeholder="Enter Password" 
                  type="password"
                  name="password" 
                  onChange={handleChange}
                  />
              <br />
              {/* <Link to="/"> */}
                <button onClick={formSubmitter} id="signin-but">Sign In</button>
              {/* </Link> */}
              <br />
              <Link to="/login">
                <h4 className="create">Create a new Account. SignUp</h4>
              </Link>
            </div>
          </div>
        </div>
    )
}
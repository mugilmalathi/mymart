import React, { useEffect, useState } from "react";
import "./login.css"
import signin from "../Images/login.png"
import { Link } from "react-router-dom";
import axios from "axios";
import { emailValidator, passwordValidator } from "./validate";
import {useHistory} from "react-router-dom"

export const Signup = ()=>{

  const [input, setInput] = React.useState({ email: '', password: '' });

	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

	const formSubmitter = e => {
		e.preventDefault();
		setsuccessMessage('');
		if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

		if (!passwordValidator(input.password))
			return seterrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
    }

  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: ""
});

const [data, setData] = useState({});

const handleChange = (e)=>{
    const {id, value} = e.target;
    setFormData({
        ...formData,
        [id]:value
    })
}

const handleSubmit = (e)=>{
    axios.post("https://boiling-brushlands-36073.herokuapp.com/users", formData)
    .then(()=>{
        setFormData({
          id: "",
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          password: ""
        })
    })
    .then(()=>{
        getData();
    })
}

useEffect(()=>{
    getData();
}, []);

const getData = ()=>{
    axios.get("https://boiling-brushlands-36073.herokuapp.com/users")
    .then((res)=>{
        setData(res.data)
    })
}

    return(
        <div id="signup">
          <div id="signup-div">
            <div id="signup-left">
              <img src={signin} alt="" />
            </div>
            <div id="signup-right">
              <h1>SIGN UP</h1>
              {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
              <label>First Name</label>
              <br />
              <input 
                id="firstname"
                placeholder="Enter First Name" 
                type="text"
                onChange={handleChange} 
                value={formData.firstname}
                />
              <br />
              <label>Last Name</label>
              <br />
              <input 
                id="lastname"
                placeholder="Enter Last Name" 
                type="text"
                onChange={handleChange} 
                value={formData.lastname}
                />
              <br />
              <label>Email</label>
              <br />
              <input 
                id="email"
                placeholder="Enter Email with @" 
                type="text"
                onChange={handleChange} 
                value={formData.email}
                />
              <br />
              <label>Mobile Number</label>
              <br />
              <input 
                id="mobile"
                placeholder="Enter Mobile Number" 
                type="number"
                onChange={handleChange} 
                value={formData.mobile}
                />
              <br />
              <label>password</label>
              <br />
              <input 
                id="password"
                placeholder="Password should be minimum 8 Character and need to add one upper case and one lower case and number.!" 
                type="password"
                onChange={handleChange}
                value={formData.password}
                />
              <br />
              <Link to="/signin">
                <button 
                   id="signup-but"
                   onClick={handleSubmit}
                   >Sign Up</button>
              </Link>
              <br />
              <Link to="/signin">
                <h4 className="create">Already an Account. SignIn</h4>
              </Link>
            </div>
          </div>
        </div>
    )
}
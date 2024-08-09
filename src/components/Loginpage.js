import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Portpolio.css';

const Loginpage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem(username));
        if (user && user.password === password) {
            localStorage.setItem("Loginuser", username);
            alert("login successfull !!");
            nav('/home');
        }
        else {
            // alert("Invalid details pls try again.");
            nav('/portfolio_page')

        }
        // if (validate()) {
        //     fetch(`http://localhost:5000/user?username=` + username)
        //         .then((res) => res.json())
        //         .then((result) => {
        //             if (result.length > 0 && result[0].password === password) {
        //                 console.log("Login successful", result);
        //                 sessionStorage.setItem('username', username);
        //                 nav('/home'); // Navigate to home page
        //             } else {
        //                 alert("Invalid username or password!");
        //             }
        //         })
        //         .catch((err) => {
        //             console.error("Error fetching user:", err);
        //             alert("An error occurred. Please try again.");
        //         });
        // }
    };

    const validate = () => {
        let result = true;
        if (username === "" || username === null) {
            result = false;
            alert("Enter user name !!");
        }
        if (password === "" || password === null) {
            result = false;
            alert("Enter Valid Password !!");
        }
        return result;
    };

    return (
        <div className='main_login' >
            <div className='container'>
                <div className='row'>
                    <form onSubmit={handleLogin}>
                        <div className='card mt-5'>
                            <div className='card-header'>
                                <h2>User Login</h2>
                            </div>
                            <div className='card-body'>
                                <div className='form-group'>
                                    <label>Username <span className='err-message text-danger'>*</span></label>
                                    <input required type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='form-control mt-2' placeholder='Enter Username...' />
                                </div>
                                <div className='form-group mt-3'>
                                    <label>Password <span className='err-message text-danger'>*</span></label>
                                    <input required type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control mt-2' placeholder='Enter password...' />
                                </div>
                            </div>
                            <div className='card-footer'>
                                <button type='submit' className='btn btn-primary login_btn_loginpage'>Login</button>
                                <Link to="/" className='btn btn-success newacc_btn_loginpage'> Create a New Account </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;

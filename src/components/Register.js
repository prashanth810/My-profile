import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Portpolio.css';

const Register = () => {
    const [error, setError] = useState('');
    const nav = useNavigate();
    const [form, setForm] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        gender: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setForm({
            username: '',
            password: '',
            name: '',
            email: '',
            phone: '',
            country: '',
            address: '',
            gender: ''
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (!localStorage.getItem(form.email)) {
            localStorage.setItem(form.email, JSON.stringify(form));
            alert("Register Success !!");
            nav('/login_page');
        }
        else {
            alert("User name Already Exist !!");
        }
        // const request = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(form)
        // };

        // fetch(`http://localhost:5000/user`, request)
        //     .then((res) => res.json())
        //     .then((result) => {
        //         alert("Data Added!!");
        //         setForm({
        //             username: '',
        //             password: '',
        //             name: '',
        //             email: '',
        //             phone: '',
        //             country: '',
        //             address: '',
        //             gender: ''
        //         });
        //         console.log(result);
        //         nav('/login_page');
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    };

    return (
        <div className='register_page'>
            <div className='row'>
                <form onSubmit={handleRegister}>
                    <div className='card mt-5'>
                        <div className='card-header'>
                            <h2>User Registration</h2>
                        </div>
                        <div className='card-body'>
                            <div className='groups_inputs'>
                                <div className='form_forms'>
                                    <div className='form-group'>
                                        <label> Username <span className='err-message text-danger'>*</span> </label>
                                        <input required type='text' name="username" value={form.username} onChange={handleChange} className='form-control mt-2' placeholder='Enter Username...' />
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label> Full name <span className='err-message text-danger'>*</span> </label>
                                        <input required type='text' name="name" value={form.name} onChange={handleChange} className='form-control mt-2' placeholder='Enter Full name...' />
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label> Phone <span className='err-message text-danger'>*</span> </label>
                                        <input required type='text' name="phone" value={form.phone} onChange={handleChange} className='form-control mt-2' placeholder='Enter Phone number...' />
                                    </div>
                                </div>
                                <div className='form_forms'>
                                    <div className='form-group'>
                                        <label> Password <span className='err-message text-danger'>*</span> </label>
                                        <input required type='password' name="password" value={form.password} onChange={handleChange} className='form-control mt-2' placeholder='Enter Password...' />
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label> Email <span className='err-message text-danger'>*</span> </label>
                                        <input required type='email' name="email" value={form.email} onChange={handleChange} className='form-control mt-2' placeholder='Enter Email...' />
                                    </div>
                                    <div className='form-group mt-3'>
                                        <label> Country <span className='err-message text-danger'>*</span> </label>
                                        <input required type='text' name="country" value={form.country} onChange={handleChange} className='form-control mt-2' placeholder='Enter Country...' />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 mb-2'>
                                <label className='mb-2'>Address <span className='text-danger'>*</span></label>
                                <textarea placeholder='Message...' className='p-2 w-100 text-black' rows={3} name="address" value={form.address} onChange={handleChange} />
                            </div>
                            <div>
                                <label className='mb-2'>Gender</label> <br />
                                <div className='d-flex gap-2'>
                                    <input required type='radio' name='gender' value="male" onChange={handleChange} /> <label> Male </label>
                                    <input required type='radio' name='gender' value="female" onChange={handleChange} className='mx-2' /> <label> Female </label>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer p-3'>
                            <Link to='/login_page' className='btn btn-success firstbtn'> Already have account </Link>
                            <button type='button' className='btn btn-danger p-2 fw-bold mx-2 secondbtn' onClick={handleCancel}>Cancel</button>
                            <button type='submit' className='btn btn-success p-2 fw-bold thirdbtn'>Register</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;

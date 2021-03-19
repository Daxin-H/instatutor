import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"; 
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types'; 

const Register = ({ setAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
        password2: '',
    });

    const { name, email, role, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('passwords do not match', 'danger');
        }
        else {
            console.log('SUCCESS');

            const newUser = {
                name,
                email,
                password,
                role
            };

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const body = JSON.stringify(newUser);
                const res = await axios.post('/api/users', body, config);
                console.log(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        }
    };


    return (
        <Fragment>
            <h1 class="large text-primary">Sign Up</h1>
            <p class="lead">
                <i class="fas fa-user"></i> Create Your Account
        </p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image, use a
                        Gravatar email
                </small>
                </div>

                <div className="form-group">
                <label htmlFor="role">Please choose a role:</label>
                <select id="role" name="role" onChange={e => onChange(e)} required>
                    <option defaultValue="" selected={true} disabled={true}></option>
                    <option value="student">Student</option>
                    <option value="tutor">Tutor</option>
                    <option value="both">Both</option>
                </select>
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        required
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                        required
                        minLength="6" />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>);
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);



import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
//import axios from 'axios';

<<<<<<< Updated upstream
const Register = ({setAlert, register}) => {
=======


const Register = ({ setAlert, register, isAuthenticated }) => {
>>>>>>> Stashed changes
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
        password2: '',
        expertise: '',
        subjects: '',
        year: ''
    });


    const { name, email, role, password, password2, expertise, subjects, year } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
<<<<<<< Updated upstream
            //from 'actions/alert.js/'
            setAlert('Passwords do not match', 'danger');
        }
        else {
            register({name, email, password});
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
=======
            setAlert('passwords do not match', 'danger');

        }else {
            register({ name, email, role, password, expertise, subjects, year });
>>>>>>> Stashed changes
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
                        //required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        //required
                    />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image, use a
                        Gravatar email
                </small>
                </div>
<<<<<<< Updated upstream
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Role"
                        name="role"
                        value={role}
                        onChange={e => onChange(e)}
                        //required
                    />
                </div>
=======

                

>>>>>>> Stashed changes
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        //required
                        //minLength="6"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                        //required
                        //minLength="6" 
                        />
                </div>

                <div className="form-group">
                <label htmlFor="role">Please choose a role:</label>
                <select id="role" name="role" onChange={e => onChange(e)}>
                    <option defaultValue="" selected={true} disabled={true}></option>
                    <option value="student">Student</option>
                    <option value="tutor">Tutor</option>
                    <option value="both">Both</option>
                </select>
                </div>
                
                {formData.role == 'tutor' && (
                    <div className="form-group">
                    <label>Areas of Expertise</label>
                    <input type="text" 
                           name="expertise" 
                           value = {expertise}
                           onChange={e => onChange(e)}
                           ref={register} />
                    </div>
                )}

                {formData.role == 'student' && (
                    <div className="form-group">
                    <label htmlFor="year">Please select your year:</label>
                    <select id="year" name="year" onChange={e => onChange(e)}>
                        <option defaultValue="" selected={true} disabled={true}></option>
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="junior">Senior</option>
                    </select>

                    <label>What Subjects Do You Need Help In?</label>
                    <input type="text" 
                           name="Subjects" 
                           value = {subjects}
                           onChange={e => onChange(e)}
                           ref={register} />

                    </div>
                )}

                {formData.role == 'both' && (
                    <div className="form-group">

                    <label>Areas of Expertise</label>
                    <input type="text" 
                           name="expertise" 
                           value = {expertise}
                           onChange={e => onChange(e)}
                           ref={register} />

                    <label htmlFor="year">Please select your year:</label>
                    <select id="year" name="year" onChange={e => onChange(e)}>
                        <option defaultValue="" selected={true} disabled={true}></option>
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="junior">Senior</option>
                    </select>

                    <label>What Subjects Do You Need Help In?</label>
                    <input type="text" 
                           name="subjects" 
                           value = {subjects}
                           onChange={e => onChange(e)}
                           ref={register} />

                    </div>
                )}
                


                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>);
};

export default connect(null, {setAlert, register})(Register);

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Source from './Source'
import formData from './profile-forms/ProfileForm'
import SearchContainer from '../App';


const Search = () => {
    const [img, setImg] = useState("");
    const InputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    };
    
    return (
        <>
            {(formData.role=='Student'||'Both') && (
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Search For Tutors!"
                    value={img}
                    onChange={InputEvent} />
                <Source name={img} />
            </div>
            )}

          
        </>
    )
};

export default Search;
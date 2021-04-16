import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Source from './Source'
import formData from './profile-forms/ProfileForm'
import SearchContainer from '../App';
import axios from 'axios';
import { getTutors } from '../actions/search';


const Search = () => {
    const [img, setImg] = useState("");
    const [query, setQuery] = useState("");
    const [results, setResult] = useState("");
    const InputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setQuery(data);
        getTutors(query);
        setImg(data);
    };


      useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/profile/expertise', {
                headers:{
                    'Content-Type': 'application/json'
                },
                data:{
                    body: JSON.stringify(query)
                }
            });
            setResult(result.data);
        };
     
        fetchData();
      }, []);

    const onClick = e => {
        e.preventDefault();
        console.log("Data:" + query);
      };
    
    return (
        <>
            {(formData.role=='Student'||'Both') && (
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="What do you need help with?"
                    value={img}
                    onChange={InputEvent} />
                <button onClick={onClick}>
                Search!
                </button>
                <Source name={img} />
            </div>
            )}

          
        </>
    )
};

Search.propTypes = {
    getTutors: PropTypes.func.isRequired,
  };
  
  /*
  const mapStateToProps = state => ({
    query: state.query
  });
  */
  export default connect(null, { getTutors })(Search);

//export default Search;
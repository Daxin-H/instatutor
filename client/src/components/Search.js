import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Source from './Source'
import formData from './profile-forms/ProfileForm'
import SearchContainer from '../App';
import { getTutors } from '../actions/search';


const Search = () => {
    const [img, setImg] = useState("");
    const [query, setQuery] = useState("");
    const InputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setQuery(data);
        setImg(data);
    };

    const onClick = e => {
        e.preventDefault();
        getTutors(query);
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
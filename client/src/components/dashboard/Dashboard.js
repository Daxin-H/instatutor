import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';

import SearchBox from '../searchbar/search';
import { render } from 'react-dom';

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, []);
    return loading && profile === null ? <Spinner /> : <Fragment>
        <hi className="large text-primary"> Personal page </hi>
        <p className="lead">
            <i className='fas fa-user '></i> Welcome {user && user.name}
        </p>

        {profile !== null ? (
            <Fragment>
                <DashboardActions />

                <div className="my-2">
                    <button className="btn btn-danger" onClick={() => deleteAccount()}>
                        <i className="fas fa-user-minus"></i>
                        Delete My Account
                    </button>
                </div>
            </Fragment>
        ) : (
            <Fragment>
                <p> You have not yet setup a profile, please add some info</p>
                <Link to='/create-profile' className='btn btn-primary my-1'>
                    Create Profile
                </Link>
            </Fragment>
        )}
    </Fragment>


};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(
    mapStateToProps, {
    getCurrentProfile,
    deleteAccount
})(
    Dashboard
);
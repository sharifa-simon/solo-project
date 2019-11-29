import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = (props) => (

  <>
    <Link to="/home">
      {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
      {props.user.id ? 'Home' : 'Login / Register'}
    </Link>
  </>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core/';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}<Paper>
        <form onSubmit={this.login}>
          <h2>Login</h2>
          <div>
            <label htmlFor="username">
              
              <TextField id="u-name"  variant="outlined" label="Username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
              />
              {/* <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              /> */}
            </label>
          </div>
          <div>
            <label htmlFor="password">
            <br />
              <TextField id="p-word"  variant="outlined" label="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
              />
              {/* <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              /> */}
            </label>
          </div>
          <div><br />
          <Button variant="contained" color="primary"  size="small" style={{width: `67px`}}
          className="log-in"
          type="submit"
          name="submit"
          value="Log In">Log In</Button>
            
          </div>
        </form>
        </Paper>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);

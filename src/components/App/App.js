import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';


import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import Teams from '../Teams/Teams';
import AddTeam from '../AddTeam/AddTeam';
import Roster from '../Roster/Roster';
import AddSkater from '../AddSkater/AddSkater';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core/';
import SimpleMenu from '../Menu/Menu';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
        <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton  edge="start" color="inherit" aria-label="menu">
                    <SimpleMenu />
                        
                    </IconButton>
                    <Typography variant="h6" >
                        Track Time
                    </Typography>
                    
                </Toolbar>
            </AppBar>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />



            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/teams"
              component={Teams}
            />
            <ProtectedRoute
              exact
              path="/addteam/"
              component={AddTeam}
            />
            <ProtectedRoute
              path="/roster/:teamId"
              component={Roster}
            />
            <ProtectedRoute
              exact
              path="/addskater"
              component={AddSkater}
            />
            <ProtectedRoute
              exact
              path="/profile/edit/:edit"
              component={EditProfile}
            />
            <ProtectedRoute
              exact
              path="/profile/:profileId"
              component={Profile}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);

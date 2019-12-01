import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import { Button, IconButton } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core/';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class Teams extends Component {

    componentDidMount() {
        this.getTeams();
    }

    getTeams = () => {
        this.props.dispatch({ type: 'GET_TEAM' });
    }

    deleteTeams = (id) => {
        //deletes selected button's team to remove from redux state and database
        this.props.dispatch({ type: 'DELETE_TEAM', payload: id });
    }

    handleClickAddTeam = () => {
        //takes user to another page to add a Team
        console.log('Moving to Add Team');
    }

    viewTeam = (teamClicked) => {
        //clicked team's select button to move user to roster with id
        console.log('Team clicked:', teamClicked);
        this.props.dispatch({ type: 'GET_ROSTER', payload: teamClicked });
        this.props.history.push(`/roster/${teamClicked}`);
    }

    render() {
        return (
            <div>
                <h3>Teams</h3>
                <List component="nav" aria-label="contacts">
                    {this.props.teamReducer.map((team) => {
                        return (
                            <ListItem button onClick={() => this.viewTeam(team.id)}>
                                <ListItemText inset primary={team.team_name} />
                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => this.deleteTeams(team.id)} aria-label="delete">
                                        <DeleteForeverIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })}
                </List>

                <Link to="/addteam"><Button onClick={this.handleClickAddTeam} variant="contained" color="secondary" size="small" >
                    <AddIcon fontSize="small" /></Button></Link>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default withRouter(connect(mapStateToProps)(Teams));

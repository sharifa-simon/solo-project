import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

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
                <ul>
                    {this.props.teamReducer.map((team) => {
                        return (
                            <li key={team.id}>
                                <span>{team.team_name}</span>
                                <button onClick={() => this.viewTeam(team.id)}>Select</button>
                                <button onClick={() => this.deleteTeams(team.id)}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
                <br /> <Link to="/addteam"><button onClick={this.handleClickAddTeam}>Add Team</button></Link>

            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default withRouter(connect(mapStateToProps)(Teams));

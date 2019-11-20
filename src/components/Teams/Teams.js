import React, { Component } from 'react';
import {connect} from 'react-redux';


class Teams extends Component {

    componentDidMount(){
        this.getTeams();
    }

    getTeams = () => {
        this.props.dispatch({ type: 'GET_TEAM'});
    }

    handleClickAddTeam = () => {
        //takes user to another page to add a Team
        console.log('Moving to Add Team');
        this.props.history.push('/addteam');
    }

    render() {
        return (
            <div>
                <h3>Teams</h3>
                <ul>
                    <li>Atomic Bombshells</li>
                    <li>Dagger Dolls</li>
                    {this.props.teamReducer.map((team) => {
                        return (
                            <li key={team.id}>
                                <span>{team.team_name}</span>
                            </li>
                        );
                    })}
                </ul>
                <br /> <button onClick={this.handleClickAddTeam}>Add Team</button>
                <pre>{JSON.stringify(this.props.teamReducer, null, 2)}</pre>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(Teams);

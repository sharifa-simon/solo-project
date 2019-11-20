import React, { Component } from 'react';
import {connect} from 'react-redux';


class AddTeam extends Component {
    state = {
        team: ''
    }

    handleCancelClick = () => {
        //takes user back to Team page
        console.log('Cancel clicked');
        this.props.history.push('/teams');
    }

    handleAddTeam = () => {
        //adds new Team to Database and returns user to teams page
        console.log('Adding Team');
        this.props.dispatch({type: 'POST_TEAM', payload: [this.state.team] });
        this.props.history.push('/teams');
    }

    handleInputChangeForNewTeam = (event) => {
        this.setState({
          team: event.target.value,
        });
      }

    render() {
        return (
            <div>
                <h3>Add New Team</h3>
                Name:<input 
                type="text"
                name="team"
                value={this.state.team} onChange={this.handleInputChangeForNewTeam}/>
                <br /> <button onClick={this.handleCancelClick}>Cancel</button>
                <button onClick={this.handleAddTeam}>Add Team</button>

                <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
    
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

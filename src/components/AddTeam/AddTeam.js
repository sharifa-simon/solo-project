import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

class AddTeam extends Component {
    state = {
        team: ''
    }

    // handleCancelClick = () => {
    //     //takes user back to Team page
    //     console.log('Cancel clicked');
    // }

    handleAddTeam = () => {
        //adds new Team to Database and returns user to teams page
        console.log('Adding Team');
        this.props.dispatch({ type: 'POST_TEAM', payload: this.state.team });
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
                Name:
                <TextField id="filled-basic" label="Filled" variant="filled" 
                type="text"
                name="team"
                value={this.state.team} onChange={this.handleInputChangeForNewTeam}/>
                <br /> <Link to="/teams"><button>Cancel</button></Link>
                <button onClick={this.handleAddTeam}>Add Team</button>


            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

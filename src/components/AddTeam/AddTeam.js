import React, { Component } from 'react';



class AddTeam extends Component {

    handleCancelClick = () => {
        //takes user back to Team page
        console.log('Cancel clicked');
        this.props.history.push('/teams');
    }

    handleAddTeam = () => {
        //adds new Team to Database and returns user to teams page
        console.log('Adding Team');
        this.props.history.push('/teams');
    }

    render() {
        return (
            <div>
                <h3>Add New Team</h3>
                Name:<input />
                <br /> <button onClick={this.handleCancelClick}>Cancel</button><button onClick={this.handleAddTeam}>Add Team</button>
            </div>

        )
    }
}

export default AddTeam;

import React, { Component } from 'react';



class Teams extends Component {

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

                </ul>
                <br /> <button onClick={this.handleClickAddTeam}>Add Team</button>
            </div>

        )
    }
}

export default Teams;

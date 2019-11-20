import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddTeam extends Component {

    handleClickAddSkater = () => {
        //takes user to another page to add a Team
        console.log('Moving to Add Skater');
        this.props.history.push('/addskater');
    }

    componentDidMount(){
        this.getRoster();
    }
    
    getRoster = () => {
        this.props.dispatch({ type: 'SET_ROSTER' });
    }
    render() {
        return (
            <div>
                <h3>Roster</h3>
               
                {this.props.rosterReducer}

                <button onClick={this.handleClickAddSkater}>Add Skater</button>
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
    
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

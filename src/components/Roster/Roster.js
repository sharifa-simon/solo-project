import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddTeam extends Component {

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
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
    
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

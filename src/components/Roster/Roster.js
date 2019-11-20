import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddTeam extends Component {

    render() {
        return (
            <div>
                <h3>Roster</h3>
                
                
            </div>
    
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

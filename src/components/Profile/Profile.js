import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTeam extends Component {


    render() {
        return (
            <div>
                <h3>Profile</h3>
                {this.props.profileReducer.skater_name}
                <br />#{this.props.profileReducer.number}
                <br />Position: {this.props.profileReducer.position}

                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

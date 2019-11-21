import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTeam extends Component {

    handleBackButton = () => {
        console.log('Back to roster');
        this.props.history.push('/roster')
    }


    render() {
        return (
            <div>
                <button onClick={this.handleBackButton}>Back to Roster</button>
                <h3>Profile</h3> 
                {this.props.profileReducer.skater_name}
                <br />#{this.props.profileReducer.number}
                <br />Position: {this.props.profileReducer.position}

                <p>Practices Attended</p>
                <ul>
                    <li>date - attendance type</li>
                </ul>

                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

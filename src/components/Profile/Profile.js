import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class Profile extends Component {

    handleBackButton = () => {
        console.log('Back to roster');
        this.props.history.push(`/roster/:teamId`);
    }

    componentDidMount() {
        // this.getProfile();
        // this.getAttend();
        this.props.dispatch({ type: 'GET_PROFILE', payload: this.props.match.params.profileId });
        this.props.dispatch({ type: 'GET_ATTEND', payload: this.props.match.params.profileId });
    }

    editAttendance = (practice) => {
        console.log('This date clicked', practice)
    }
    // getProfile = () =>{
    //     let skaterId = this.props.match.params.id
    //     this.props.dispatch({type: 'SET_PROFILE', payload: skaterId})
    // }

    // getAttend = () => {
    //     this.props.dispatch({ type: 'GET_ATTEND' })
    // }


    render() {
        return (
            <div>
                <button onClick={this.handleBackButton}>Back to Roster</button>
                <h3>Profile</h3>
                {this.props.profileReducer.skater_name}
                <br />#{this.props.profileReducer.number}
                <br />Position: {this.props.profileReducer.position}

                <p>Practices Attended</p>

                <ul>{this.props.attendReducer.map((date) => {
                    return (
                        <li key={date.id + 1}>
                            <span> {date.date} {date.attend_type}</span>
                            <button onClick={() => this.editAttendance(date.id)}>Edit</button>
                        </li>
                    );
                })}
                </ul>

                <pre>{JSON.stringify(this.props.attendReducer, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.profileReducer, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.match.params, null, 2)}</pre>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default withRouter(connect(mapStateToProps)(Profile));

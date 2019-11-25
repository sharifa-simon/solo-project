import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddTeam extends Component {

    handleBackButton = () => {
        console.log('Back to roster');
        this.props.history.push('/roster')
    }

    componentDidMount() {
        // this.getProfile();
        this.getAttend();

    }

    // getProfile = () =>{
    //     let skaterId = this.props.match.params.id
    //     this.props.dispatch({type: 'SET_PROFILE', payload: skaterId})
    // }

    getAttend = () =>{
        this.props.dispatch({type: 'GET_ATTEND'})
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
            
                            <ul>{this.props.attendReducer.map((date) => {
                                return (
                                    <li key={date.id + 1}>
                                        <span> {date.date} {date.attend_type}</span>
                                    </li>
                                );
                            })}
                        </ul>

                <pre>{JSON.stringify(this.props.attendReducer, null, 2)}</pre>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

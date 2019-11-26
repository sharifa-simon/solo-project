import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class Roster extends Component {


    state = {
        practice: {
            skater_id: '',
            attend_type: '',
        }
    }

    componentDidMount() {
        // this.getRoster();
        // this.forHistory();
        this.props.dispatch({ type: 'GET_ROSTER', payload: this.props.match.params.teamId });

    }


    submitFormHandler = event => {
        console.log('submit clicked');
        event.preventDefault();
        this.props.dispatch({ type: 'POST_ATTEND', payload: this.state.practice });
        ;
    }

    handleClickAddSkater = () => {
        //takes user to another page to add a Team
        console.log('Moving to Add Skater:');
    }

    deleteSkater = (skaterid) => {
        console.log('DELETE:', skaterid);

        //deletes selected button's skater to remove from redux state and database
        this.props.dispatch({ type: 'DELETE_SKATER', payload: skaterid });
    }

    // getRoster = () => {
    //     this.props.dispatch({ type: 'GET_ROSTER' });
    // }

    selectSkater = (skaterClicked) => {
        //clicked skater button moves user to profile with id
        console.log('Skater clicked:', skaterClicked);
        this.props.dispatch({ type: 'GET_PROFILE, GET_ATTEND', payload: skaterClicked });
        this.props.history.push(`/profile/${skaterClicked}`);
    }


    handleChangeFor = (attend_type, skater_id) => {

        this.props.dispatch({ type: 'POST_ATTEND', payload: {event: attend_type.target.value, skater_id} });
        // this.setState({
        //     practice: {
        //         ...this.state.practice,
        //         attend_type: event.target.value,
        //         skater_id: skaterId,
        //     }
        // });

    }

    handleForID = propertyName => event => {
        event.preventDefault();
        this.setState({
            practice: {
                ...this.state.practice,
                [propertyName]: event.target.value,
            }
        });
    }


    render() {
        return (
            <div>
                <h3>Roster</h3>

                <form>
                    <label>
                        <ul>
                            {this.props.rosterReducer.map((skater) => {
                                return (
                                    <li key={skater.id + 1}>
                                        <span> <span onClick={() => this.selectSkater(skater.id)}>{skater.skater_name}</span> - #{skater.number} - {skater.position}
                                            <select key={skater.id} value={this.state.attend_type} onChange={(event)=>this.handleChangeFor(event, skater.id)} name="attend_type">
                                                <option value="" ></option>
                                                <option value="On Skates">On Skates</option>
                                                <option value="Off Skates">Off Skates</option>
                                                <option value="No" >No</option></select>
                                        </span>
                                        <br /> <button value={skater.id} onClick={this.handleForID('skater_id')}>Select</button>
                                        <button onClick={() => this.deleteSkater(skater.id)}>Delete</button>
                                    </li>
                                );
                            })}
                        </ul>

                    </label>
                    <input onClick={this.submitFormHandler} type="submit" value="Submit" />
                </form>



                <Link to="/home"><button>Home</button></Link>
                <Link to="/addskater"><button onClick={this.handleClickAddSkater}>Add Skater</button></Link>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default withRouter(connect(mapStateToProps)(Roster));

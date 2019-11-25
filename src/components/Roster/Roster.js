import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class AddTeam extends Component {


    state = {
        practice: {
        skater_id: '',
        attend_type: '',
        }
    }

    componentDidMount() {
        // this.getRoster();
        // this.forHistory();
        
    }

    
    submitFormHandler = event => {
        console.log('submit clicked');
        event.preventDefault();
        this.props.dispatch({type: 'POST_ATTEND', payload: this.state.practice });
        ;
    }

    handleClickAddSkater = () => {
        //takes user to another page to add a Team
        console.log('Moving to Add Skater:' );
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
          console.log('Skater clicked:', skaterClicked.id);
          this.props.dispatch({ type: 'GET_PROFILE', payload: skaterClicked});
          this.props.history.push(`/profile/${skaterClicked}`);
      }


      handleChangeFor = propertyName => (event, skaterId) => {
        this.props.dispatch({type: 'POST_ATTEND', payload: this.state.practice });
        this.setState({
            practice: {
                ...this.state.practice,
                [propertyName]: event.target.value,
            }
        });
        
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
                                        <span> <span onClick={() => this.selectSkater(skater)}>{skater.skater_name}</span> - #{skater.number} - {skater.position}
                                            <select key={skater.id} value={this.state.attend_type} onChange={this.handleChangeFor('attend_type')} name="attend_type">
                                                <option value="On Skates" ></option>
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
                    <input onClick={this.submitFormHandler}type="submit" value="Submit" />
                </form>

                

                <Link to="/addskater"><button onClick={this.handleClickAddSkater}>Add Skater</button></Link>
                
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default withRouter(connect(mapStateToProps)(AddTeam));

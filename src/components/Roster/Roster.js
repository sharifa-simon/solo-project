import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTeam extends Component {


    state = {
        skater_id: '',
        attend_type: '',
        date: 20 / 11 / 2019
    }

    componentDidMount() {
        this.getRoster();
    }

    handleClickAddSkater = () => {
        //takes user to another page to add a Team
        console.log('Moving to Add Skater');
        this.props.history.push('/addskater');
    }

    deleteSkater = (id) => {
        //deletes selected button's skater to remove from redux state and database
        this.props.dispatch({ type: 'DELETE_SKATER', payload: id });
    }

    getRoster = () => {
        this.props.dispatch({ type: 'GET_ROSTER' });
    }

    selectSkater = (skaterClicked) => {
        //clicked movie image moves user to details with id
          console.log('Movie title clicked:', skaterClicked.id);
          this.props.dispatch({ type: 'GET_PROFILE', payload: skaterClicked});
          this.props.history.push('/profile');
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
                                        <span>{skater.skater_name} - #{skater.number} - {skater.position}
                                            <select key={skater.id} value={this.state.attend_type} name="attend_type">
                                                <option value="On Skates">On Skates</option>
                                                <option value="Off Skates">Off Skates</option>
                                                <option value="No">No</option></select>
                                        </span>
                                        <br /> <button key={skater.id} onClick={() => this.selectSkater(skater)}>Select</button>
                                        <button onClick={() => this.deleteSkater(skater.id)}>Delete</button>
                                    </li>
                                );
                            })}
                        </ul>

                    </label>
                    <input type="submit" value="Submit" />
                </form>


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

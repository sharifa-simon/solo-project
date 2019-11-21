import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddTeam extends Component {

    handleClickAddSkater = () => {
        //takes user to another page to add a Team
        console.log('Moving to Add Skater');
        this.props.history.push('/addskater');
    }
    
    deleteSkater = (id) => {
        //deletes selected button's skater to remove from redux state and database
        this.props.dispatch({ type: 'DELETE_SKATER', payload: id });
    }

    
    componentDidMount(){
        // this.getRoster();
    }
    
    // getRoster = () => {
    //     this.props.dispatch({ type: 'SET_ROSTER' });
    // }
    render() {
        return (
            <div>
                <h3>Roster</h3>
                <ul>
                    {this.props.rosterReducer.map((skater) => {
                        return (
                            <li key={skater.id}>
                                <span>{skater.skater_name} - #{skater.number} - {skater.position}</span>
                                <button >Select</button>
                                <button onClick={() => this.deleteSkater(skater.id)}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
                

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

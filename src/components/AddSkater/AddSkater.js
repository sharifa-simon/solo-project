import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class AddTeam extends Component {
    state = {
        skater: {
        name: '',
        number: '',
        position:'',
        }
    }

    handleCancelClick = () => {
        //takes user back to Roster page
        console.log('Cancel clicked');
    }

    handleAddSkater = () => {
        //adds new Skater to Database and returns user to roster page
        console.log('Adding Team');
        this.props.dispatch({type: 'POST_TEAM', payload: this.state.skater});
        this.props.history.push('/roster');
    }

    handleInputChangeForNewSkater = (event) => {
        console.log(event);
        this.setState({
            skater: {
                name: event.target.value,
                number: event.target.value,
                position: event.target.value,
            }
        });
      }

    render() {
        return (
            <div>
                <h3>Add New Skater</h3>
                Name:<input 
                type="text"
                name="name"
                value={this.state.skater.name} onChange={this.handleInputChangeForNewSkater('name')}/>
                <br />Number:<input 
                type="text"
                name="number"
                value={this.state.skater.number} onChange={this.handleInputChangeForNewSkater('number')}/>
                <br />Position:<input 
                type="text"
                name="position"
                value={this.state.skater.position} onChange={this.handleInputChangeForNewSkater('position')}/>
                <br /> <button onClick={this.handleCancelClick}>Cancel</button>
                <Link to="/roster"><button onClick={this.handleAddTeam}>Add Skater</button></Link>

                <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
    
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

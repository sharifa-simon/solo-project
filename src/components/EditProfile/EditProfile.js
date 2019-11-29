import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class EditProfile extends Component {
        state = {
            skater: {
                name: '',
                team_id: '',
                number: '',
                position: '',
            }
        }
    
        componentDidMount() {
            this.getTeams();
            
        }
    
        getTeams = () => {
            this.props.dispatch({ type: 'GET_TEAM' });
        }
    
        handleCancelClick = () => {
            //takes user back to Roster page
            console.log('Cancel clicked');
            this.props.history.push(`/profile/${this.props.profileReducer.id}`)
        }
    
        handleSaveProfile = (addteam) => {
            //edits profile and sends changes to to Database and returns user to that skater's profile page
            console.log('Editing profile', addteam.team_id);
            this.props.dispatch({ type: 'PUT_PROFILE', payload: this.state.skater });
            this.props.history.push(`/profile/${this.props.profileReducer.id}`)
        }
    
        handleInputChangeForNewSkater = (event) => {
            this.setState({
                skater: {
                    ...this.state.skater,
                    [event.target.name]: event.target.value,
                }
            });
        }
    
        handleChangeFor = propertyName => (event) => {
            console.log(event.target.value);
            this.setState({
                skater: {
                    ...this.state.skater,
                    [propertyName]: event.target.value,
                }
            });
        }
    
        render() {
            return (
                <div>
                    <h3>Edit Skater</h3>
                    Name:<input
                        type="text"
                        name="name" placeholder={this.props.profileReducer.skater_name}
                        value={this.state.skater.name} onChange={this.handleInputChangeForNewSkater} />
                    <br />Number:<input
                        type="text"
                        name="number"
                        placeholder={this.props.profileReducer.number}
                        value={this.state.skater.number} onChange={this.handleInputChangeForNewSkater} />
                    <br />Position:<input
                        type="text"
                        name="position"
                        placeholder={this.props.profileReducer.position}
                        value={this.state.skater.position} onChange={this.handleInputChangeForNewSkater} />
                    <br /> Team: <select key={this.state.skater.id} value={this.state.skater.team_id} onChange={this.handleChangeFor('team_id')} name="team_id">
                        <option value="">Select</option>
                        {this.props.teamReducer.map((team) => {
                            return (
                                <option value={team.id}>{team.team_name}</option>
    
                            );
                        })}
                    </select>
    
    
                    <br />
                    {/* <br /> <Link to="/roster/:teamId"><button onClick={this.handleCancelClick}>Cancel</button></Link>
                    <Link to="/roster/:teamId"> <button onClick={this.handleAddSkater}>Add Skater</button></Link> */}
                    <br /> <button onClick={this.handleCancelClick}>Cancel</button>
                    <button onClick={this.handleSaveProfile}>Save Skater</button>
    
    
                    <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
                    <pre>{JSON.stringify(this.state, null, 2)}</pre>
                    <pre>{JSON.stringify(this.props.teamReducer, null, 2)}</pre>
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
export default withRouter(connect(mapStateToProps)(EditProfile));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import TextField from '@material-ui/core/TextField';
import { Button, ButtonGroup } from '@material-ui/core/';
import { Grid, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core/';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class EditProfile extends Component {
    state = {
        skater: {
            id: this.props.profileReducer.id,
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
        this.props.history.push(`/profile/${this.props.match.params.edit}`)
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
            <div><br /><Button variant="contained" color="primary" size="small"
                onClick={this.handleCancelClick}>
                <KeyboardBackspaceIcon fontSize="small" />
            </Button>
                <h3>Edit Profile for: {this.props.profileReducer.skater_name}</h3>

                {/* Name:<input
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
                </select> */}


                <Grid container spacing={1} direction="column" alignItems="center">

                    <TextField id="outlined-basic" label="Name" variant="outlined"
                        type="text"
                        name="name"
                        placeholder={this.props.profileReducer.skater_name}
                        value={this.state.skater.name} onChange={this.handleInputChangeForNewSkater} />
                    <br />
                    <TextField id="outlined-basic" label="Number" variant="outlined"
                        type="number"
                        name="number"
                        placeholder={this.props.profileReducer.number}
                        value={this.state.skater.number} onChange={this.handleInputChangeForNewSkater} />
                    <br />
                    <TextField id="outlined-basic" label="Position" variant="outlined"
                        type="text"
                        name="position"
                        placeholder={this.props.profileReducer.position}
                        value={this.state.skater.position} onChange={this.handleInputChangeForNewSkater} />
                    <br />
                    <FormControl variant="outlined">
                        <InputLabel id="demo-simple-select-outlined-label">
                            Team
                         </InputLabel>
                        <Select key={this.state.skater.id}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.state.skater.team_id}
                            onChange={this.handleChangeFor('team_id')}
                        >
                            <MenuItem value="">
                                <em> </em>
                            </MenuItem>
                            {this.props.teamReducer.map((team) => {
                                return (
                                    <MenuItem value={team.id}>{team.team_name}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>

                    <Grid item xs={12} md={6}>
                        <ButtonGroup variant="contained"
                            color="primary" aria-label="full width outlined button group" size="small">
                            <Button onClick={this.handleSaveProfile}>Save Profile</Button>

                        </ButtonGroup>
                    </Grid>
                </Grid>


                {/* <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.teamReducer, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.attendReducer, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.profileReducer, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.match.params, null, 2)}</pre> */}

            </div>

        )
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default withRouter(connect(mapStateToProps)(EditProfile));

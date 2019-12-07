import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Button, ButtonGroup } from '@material-ui/core/';
import { Grid, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core/';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Paper } from '@material-ui/core/';

class AddSkater extends Component {
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
        this.props.dispatch({ type: 'GET_ROSTER', payload: this.props.match.params.teamId });
    }

    getTeams = () => {
        this.props.dispatch({ type: 'GET_TEAM' });
    }

    handleCancelClick = () => {
        //takes user back to Roster page
        console.log('Cancel clicked');
        this.props.history.push(`/teams`);
    }

    handleAddSkater = (addteam) => {
        //adds new Skater to Database and returns user to roster page
        console.log('Adding Skater', addteam.team_id);
        this.props.dispatch({ type: 'POST_SKATER', payload: this.state.skater });
        this.props.history.push(`/roster/${this.state.skater.team_id}`)
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
            <div><br />
            <Button variant="contained" color="primary" size="small" onClick={() => this.handleCancelClick()}>
            <KeyboardBackspaceIcon fontSize="small" /></Button>
                <h3>Add New Skater</h3>

                
                {/* <br /> <Link to="/roster/:teamId"><button onClick={this.handleCancelClick}>Cancel</button></Link>
                <Link to="/roster/:teamId"> <button onClick={this.handleAddSkater}>Add Skater</button></Link> */}

<Paper>
    <br />
                <Grid container spacing={1} direction="column" alignItems="center">

                    <TextField id="outlined-basic" label="Name" variant="outlined"
                        type="text"
                        name="name"
                        value={this.state.skater.name} onChange={this.handleInputChangeForNewSkater} />
                    <br />
                    <TextField id="outlined-basic" label="Number" variant="outlined"
                        type="number"
                        name="number"
                        value={this.state.skater.number} onChange={this.handleInputChangeForNewSkater} />
                    <br />
                    <TextField id="outlined-basic" label="Position" variant="outlined"
                        type="text"
                        name="position"
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
                            style={{width:`194px`}}
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
                            
                            <Button onClick={this.handleAddSkater}>Add To Roster</Button>

                        </ButtonGroup>
                    </Grid>
                </Grid>


                <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.teamReducer, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.match.params, null, 2)}</pre>
              </Paper>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddSkater);

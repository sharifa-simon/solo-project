import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Paper } from '@material-ui/core/';

class AddTeam extends Component {
    state = {
        team: ''
    }

    // handleCancelClick = () => {
    //     //takes user back to Team page
    //     console.log('Cancel clicked');
    // }

    handleAddTeam = () => {
        //adds new Team to Database and returns user to teams page
        console.log('Adding Team');
        this.props.dispatch({ type: 'POST_TEAM', payload: this.state.team });
        this.props.history.push('/teams');
    }

    handleCancel = () => {
        this.props.history.push('/teams');
    }

    handleInputChangeForNewTeam = (event) => {
        this.setState({
            team: event.target.value,
        });
    }

    render() {
        return (
            <div><br />
                <Button variant="contained" color="primary" size="small"
                    onClick={this.handleCancel}>
                    <KeyboardBackspaceIcon fontSize="small" />
                </Button>
                <h3>Add New Team</h3>
                <Paper>
                    <br />
                <Grid container spacing={1} direction="column" alignItems="center">

                    <TextField id="outlined-basic" label="Team Name" variant="outlined"
                        type="text"
                        name="team"
                        value={this.state.team} onChange={this.handleInputChangeForNewTeam} />

                    <Grid item xs={12} md={6}>
                       
                        <ButtonGroup variant="contained"
                            color="primary" aria-label="full width outlined button group" size="small">

                            <Button onClick={this.handleAddTeam}>Add Team</Button>

                        </ButtonGroup>
                    </Grid>
                </Grid>
                </Paper>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

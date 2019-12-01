import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

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

    handleInputChangeForNewTeam = (event) => {
        this.setState({
            team: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h3>Add New Team</h3>
                <Grid container spacing={1} direction="column" alignItems="center">
                
  <TextField id="outlined-basic" label="Team Name" variant="outlined" 
                    type="text"
                    name="team"
                    value={this.state.team} onChange={this.handleInputChangeForNewTeam} />
                
                
                
                <Grid item xs={12} md={6}>
                    <ButtonGroup variant="contained"
              color="primary" aria-label="full width outlined button group" size="small">
                        <Button><Link to="/teams">Cancel </Link></Button>
                        <Button onClick={this.handleAddTeam}>Add</Button>
                        
                    </ButtonGroup>
                </Grid>
                </Grid>

            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddTeam);

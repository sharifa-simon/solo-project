import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

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
        console.log('Cancel clicked', this.props.match.params.teamId);
        // this.props.history.push(`/roster/${this.props.match.params.teamId} `)
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
            <div>
                <h3>Add New Skater</h3>
                Name:<input
                    type="text"
                    name="name"
                    value={this.state.skater.name} onChange={this.handleInputChangeForNewSkater} />
                <br />Number:<input
                    type="text"
                    name="number"
                    value={this.state.skater.number} onChange={this.handleInputChangeForNewSkater} />
                <br />Position:<input
                    type="text"
                    name="position"
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
                <br /> <button onClick={() => this.handleCancelClick()}>Cancel</button>
                <button onClick={this.handleAddSkater}>Add Skater</button>

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
                        value={this.state.skater.position}  onChange={this.handleInputChangeForNewSkater} />

                    <Grid item xs={12} md={6}>
                        <ButtonGroup variant="contained"
                            color="primary" aria-label="full width outlined button group" size="small">
                            <Button onClick={() => this.handleCancelClick()}>Cancel </Button>
                            <Button onClick={this.handleAddSkater}>Add</Button>

                        </ButtonGroup>
                    </Grid>
                </Grid>


                <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.teamReducer, null, 2)}</pre>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default connect(mapStateToProps)(AddSkater);

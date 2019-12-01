import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import TodayDate from '../Date/Date';

//styling imports
import { Button, IconButton, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { TableBody, Table, TableCell, TableHead, TableRow, Paper } from '@material-ui/core/';

class Roster extends Component {


    state = {
        practice: {
            skater_id: '',
            attend_type: '',
        }
    }

    componentDidMount() {
        // this.getRoster();
        // this.forHistory();
        this.props.dispatch({ type: 'GET_ROSTER', payload: this.props.match.params.teamId });
    }


    submitFormHandler = event => {
        console.log('submit clicked');
        event.preventDefault();
        this.props.dispatch({ type: 'POST_ATTEND', payload: this.state.practice });
    }

    handleClickAddSkater = () => {
        //takes user to another page to add a Team
        console.log('Moving to Add Skater:');
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
        console.log('Skater clicked:', skaterClicked);
        this.props.dispatch({ type: 'GET_PROFILE', payload: skaterClicked });
        this.props.history.push(`/profile/${skaterClicked}`);
    }


    handleChangeFor = (attend_type, skater_id) => {

        this.props.dispatch({ type: 'POST_ATTEND', payload: { event: attend_type.target.value, skater_id } });
        // this.setState({
        //     practice: {
        //         ...this.state.practice,
        //         attend_type: attend_type.target.value,
        //         skater_id: skater_id,
        //     }
        // });

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
                <h2>Roster</h2>
                <h3><TodayDate /></h3>

                <Paper >
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Skater</TableCell>
                                <TableCell align="right">Number</TableCell>
                                <TableCell align="right">Position</TableCell>
                                <TableCell align="right">Attendance</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.rosterReducer.map(skater => (
                                <TableRow key={skater.id}>
                                    <TableCell component="th" scope="row">
                                        <Button size="small" variant="outlined" onClick={() => this.selectSkater(skater.id)}> {skater.skater_name}</Button>
                                    </TableCell>
                                    <TableCell align="right">{skater.number}</TableCell>
                                    <TableCell align="right">{skater.position}</TableCell>
                                    <TableCell align="right">
                                       <FormControl> <InputLabel id="demo-simple-select-label"></InputLabel>

                                        <Select key={skater.id}
                                           
                                            id="demo-simple-select"
                                            onChange={(event) => this.handleChangeFor(event, skater.id)}>
                                            <MenuItem value="On Skates">On Skates</MenuItem>
                                            <MenuItem value="Off Skates">Off</MenuItem>
                                            <MenuItem value="No">No</MenuItem>
                                        </Select>

                                        </FormControl> </TableCell>
                                    <TableCell align="right"><IconButton aria-label="delete" onClick={() => this.deleteSkater(skater.id)}>
                                        <DeleteForeverIcon />
                                    </IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>

                <br />
                    <Link to="/addskater"><Button size="small" variant="contained" color="primary" onClick={this.handleClickAddSkater}>
                        <AddIcon fontSize="small" />Skater</Button></Link>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default withRouter(connect(mapStateToProps)(Roster));

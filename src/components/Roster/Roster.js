import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import TodayDate from '../Date/Date';

//styling imports
import { Button, IconButton, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core/';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { TableBody, Table, TableCell, TableHead, TableRow, Paper } from '@material-ui/core/';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

class Roster extends Component {

    state = {
        practice: {
            skater_id: '',
            attend_type: '',
        }
    }

    componentDidMount() {
        this.getRoster();
    }

    getRoster = () => {
        this.props.dispatch({ type: 'GET_ROSTER', payload: this.props.match.params.teamId });
    }

    handleClickAddSkater = () => {
        // moves user to another page to add a Team
        this.props.history.push(`/addskater`);
    }

    deleteSkater = (skaterid) => {
        // deletes selected button's skater to remove from redux state and database
        this.props.dispatch({ type: 'DELETE_SKATER', payload: skaterid });
    }

    selectSkater = (skaterClicked) => {
        // clicked skater button moves user to profile with id
        this.props.dispatch({ type: 'GET_PROFILE', payload: skaterClicked });
        this.props.history.push(`/profile/${skaterClicked}`);
    }


    handleChangeFor = (attend_type, skater_id) => {
        this.props.dispatch({ type: 'POST_ATTEND', payload: { event: attend_type.target.value, skater_id } });
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
                Begin tracking time by using the attendance dropdown menu,
                <br />select a skater to view their profile,
                or add a skater to this roster.
                <h3><TodayDate /></h3>

                <Paper >
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ backgroundColor: `#ff6f60` }}>Skater</TableCell>
                                <TableCell style={{ backgroundColor: `#ff6f60`, width: `25px` }} align="right">Number</TableCell>
                                <TableCell style={{ backgroundColor: `#ff6f60` }} align="right">Position</TableCell>
                                <TableCell style={{ backgroundColor: `#ff6f60` }} align="right">Attendance</TableCell>
                                <TableCell style={{ backgroundColor: `#ff6f60` }} align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.rosterReducer.map(skater => (
                                <TableRow key={skater.id}>
                                    <TableCell component="th" scope="row">
                                        <Button size="small" onClick={() => this.selectSkater(skater.id)}> {skater.skater_name}</Button>
                                    </TableCell>
                                    <TableCell align="right">{skater.number}</TableCell>
                                    <TableCell align="right">{skater.position}</TableCell>
                                    <TableCell align="right">
                                        <FormControl variant="outlined">
                                            <InputLabel id="demo-simple-select-label"></InputLabel>

                                            <Select key={skater.id}
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                style={{ width: `100px` }}
                                                onChange={(event) => this.handleChangeFor(event, skater.id)}>

                                                <MenuItem value="On Skates" >On Skates</MenuItem>
                                                <MenuItem value="Off Skates" >Off</MenuItem>
                                                <MenuItem value="No" >No</MenuItem>
                                            </Select>

                                        </FormControl> </TableCell>
                                    <TableCell align="right"><IconButton color="secondary" aria-label="delete" onClick={() => this.deleteSkater(skater)}>
                                        <DeleteForeverIcon />
                                    </IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>

                <br />
                <Button onClick={this.handleClickAddSkater} size="small" variant="contained" color="primary" >
                    <PersonAddIcon onClick={this.handleClickAddSkater} /></Button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default withRouter(connect(mapStateToProps)(Roster));

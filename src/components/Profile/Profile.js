import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Box from '@material-ui/core/Box';

//material-ui imports
import Typography from '@material-ui/core/Typography';
import { Card, CardActions, CardContent } from '@material-ui/core/';
import { Button, IconButton } from '@material-ui/core/';
import { Paper } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core/';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class Profile extends Component {

    handleBackButton = (teamroster) => {
        this.props.history.push(`/roster/${teamroster}`);
    }

    editSkater = (skaterprofile) => {
        this.props.history.push(`/profile/edit/${skaterprofile}`)
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PROFILE', payload: this.props.match.params.profileId });
        this.props.dispatch({ type: 'GET_ATTEND', payload: this.props.match.params.profileId });
    }

    editAttendance = (practice) => {
       // will allow a user to edit date and attendance type
    }

    deletePractice = (dateid) => {
        // deletes selected button's skater to remove from redux state and database
        this.props.dispatch({ type: 'DELETE_PRACTICE', payload: dateid,  });
    }

    render() {
        return (
            <div>
                <br />
                <Button variant="contained" color="primary" size="small"
                    onClick={() => this.handleBackButton(this.props.profileReducer.team_id)}>
                    <KeyboardBackspaceIcon fontSize="small" />
                </Button>

                <h3>Profile</h3>

                <Box display="flex" justifyContent="center"> <Card style={{ width: `500px` }}>
                    <CardContent>

                        <Typography variant="h5" component="h2" >
                            {this.props.profileReducer.skater_name}
                        </Typography>
                        <Typography color="textSecondary" >
                            #{this.props.profileReducer.number}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Position: {this.props.profileReducer.position}

                            <br />

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => this.editSkater(this.props.profileReducer.id)} size="small" >Edit Profile</Button>
                    </CardActions>
                </Card>
                </Box>
                <h3>Practice History</h3>

                <Paper>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ backgroundColor: `#ff6f60` }}>Date Attended</TableCell>
                                <TableCell style={{ backgroundColor: `#ff6f60` }} align="right">Status</TableCell>

                                <TableCell style={{ backgroundColor: `#ff6f60` }} align="right">Edit</TableCell>
                                <TableCell style={{ backgroundColor: `#ff6f60` }} align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.attendReducer.map((date) => {
                               
                                return (
                                    <TableRow key={date.id}>
                                        <TableCell component="th" scope="row">
                                            {date.date}
                                        </TableCell>
                                        <TableCell align="right">{date.attend_type}</TableCell>
                                        <TableCell align="right"><IconButton onClick={() => this.editAttendance(date.id)} edge="end" aria-label="delete">
                                            <EditIcon fontSize="small" />
                                        </IconButton></TableCell>
                                        <TableCell align="right"><IconButton color="secondary" onClick={() => this.deletePractice(date)} edge="end" aria-label="delete">
                                            <DeleteForeverIcon />
                                        </IconButton></TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </Paper>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
};
export default withRouter(connect(mapStateToProps)(Profile));

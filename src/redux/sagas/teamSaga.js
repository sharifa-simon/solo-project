import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* teamSaga() {
    yield takeLatest('POST_TEAM', addTeam);
    yield takeLatest('GET_TEAM', getTeam);
    yield takeLatest('DELETE_TEAM', removeTeam);
}

function* addTeam(action) {
    //sends inputted user value from AddTeam to server side post route
    try {
        yield axios.post('/api/teams', {team: action.payload});
        yield put({ type: 'GET_TEAM' })
    } catch (error) {
        console.log('error posting team', error);
    }
}

function* getTeam(action) {
    //gets database information and sends to client side
    try {
        const teamResponse = yield axios.get('/api/teams');
        yield put({ type: 'SET_TEAM', payload: teamResponse.data });
        console.log('getTeam was hit with action:', action);
    } catch (error) {
        console.log('error fetching teams', error);
    }
}

function* removeTeam(action) {
    //communicates with server side to remove team from database
    try {
        yield axios.delete(`/api/teams/${action.payload}`);
        yield put({ type: 'GET_TEAM' });
    } catch (error) {
        console.log('error deleting team', error);
    }
}

export default teamSaga;
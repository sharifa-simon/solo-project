import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* rosterSaga() {
    yield takeLatest('POST_SKATER', addSkater);
    yield takeLatest('GET_ROSTER', rosterDetails);
    yield takeLatest('DELETE_SKATER', removeSkater);
}

function* addSkater(action) {
    //sends inputted user value from AddSkater to server side post route
    try {
        yield axios.post('/api/roster', action.payload);
        // yield put({ type: 'GET_ROSTER' })
    } catch (error) {
        console.log('error posting skater', error);
    }
}

function* rosterDetails(action) {
    // communicates with server route to get skaters from database
    try {
        const rosterResponse = yield axios.get(`/api/roster/${action.payload}`);
        yield put({ type: 'SET_ROSTER', payload: rosterResponse.data });
    } catch (error) {
        console.log('error fetching skaters', error);
    }
}

function* removeSkater(action) {
    // communicates with server side to remove a skater from database
    try {
        yield axios.delete(`/api/roster/${action.payload.id}`);
        yield put({ type: 'GET_ROSTER', payload: action.payload.team_id });
    } catch (error) {
        console.log('error deleting skater', error);
    }
}



export default rosterSaga;
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* rosterSaga() {
    yield takeLatest('GET_ROSTER', rosterDetails);
}

function* rosterDetails(action) {
    // gets all skaters associated with that team id
    try {
        const rosterResponse = yield axios.get('/api/roster');
        yield put({ type: 'SET_ROSTER', payload: rosterResponse.data });
    } catch (error) {
        console.log('error fetching roster', error);
    }
}

export default rosterSaga;
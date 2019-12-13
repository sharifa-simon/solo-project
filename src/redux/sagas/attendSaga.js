import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* attendSaga() {
    yield takeLatest('POST_ATTEND', addAttend);
    yield takeLatest('GET_ATTEND', attendDetails);
    yield takeLatest('DELETE_PRACTICE', removePractice);
}

function* addAttend(action) {
    // sends user selected values from Roster to server side attend post route
    try {
        yield axios.post('/api/attend/',  action.payload);
    } catch (error) {
        console.log('error posting attendance', error);
    }
}

function* attendDetails(action) {
    // requests attedance data, for a skater, from database
    const attendDetailsResponse = yield axios.get(`/api/attend/${action.payload}`);
    yield put({ type: 'SET_ATTEND', payload: attendDetailsResponse.data});
}

function* removePractice(action) {
    // communicates with server side to remove skater from database
    try {
        yield axios.delete(`/api/attend/${action.payload.id}`);
        yield put({ type: 'GET_ATTEND', payload: action.payload.skater_id });
    } catch (error) {
        console.log('error deleting practice', error);
    }
}

export default attendSaga;
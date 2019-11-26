import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* attendSaga() {
    yield takeLatest('POST_ATTEND', addAttend);
    yield takeLatest('GET_ATTEND', attendDetails);
}

function* addAttend(action) {
    //sends user selected values from Roster to server side attend post route
    try {
        yield axios.post('/api/attend/',  action.payload);
        yield put({ type: 'GET_ATTEND' })
    } catch (error) {
        console.log('error posting attendance', error);
    }
}

function* attendDetails(action) {
    console.log('attendance details', action);
    const attendDetailsResponse = yield axios.get(`/api/attend/${action.payload}`);
    yield put({ type: 'SET_ATTEND', payload: attendDetailsResponse.data});
}

export default attendSaga;
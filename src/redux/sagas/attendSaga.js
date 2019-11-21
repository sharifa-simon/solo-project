import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* attendSaga() {
    yield takeLatest('GET_ATTEND', attendDetails);
}

function* attendDetails(action) {
    console.log('attendance details', action);
    const attendDetailsResponse = yield axios.get(`/api/attend/${action.payload.id}`);
    yield put({ type: 'SET_ATTEND', payload: attendDetailsResponse.data});
}

export default attendSaga;
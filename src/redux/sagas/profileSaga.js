import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* profileSaga() {
    yield takeLatest('GET_PROFILE', profileDetails);
}

function* profileDetails(action) {
    console.log('skater details', action);
    const profileDetailsResponse = yield axios.get(`/api/profile/${action.payload.id}`);
    yield put({ type: 'SET_DETAILS', payload: profileDetailsResponse.data});
}

export default profileSaga;
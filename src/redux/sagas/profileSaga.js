import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* profileSaga() {
    yield takeLatest('GET_PROFILE', profileDetails);
}

function* profileDetails(action) {
    console.log('skater details', action.payload);
    const profileDetailsResponse = yield axios.get(`/api/profile/${action.payload}`);
    console.log('PROFILE DEETS', profileDetailsResponse.data);
    yield put({ type: 'SET_PROFILE', payload: profileDetailsResponse.data });

}

export default profileSaga;
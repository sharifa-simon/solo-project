import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* profileSaga() {
    yield takeLatest('GET_PROFILE', profileDetails);
    yield takeLatest('PUT_PROFILE', editProfile);
}

function* profileDetails(action) {
    console.log('skater details', action.payload);
    const profileDetailsResponse = yield axios.get(`/api/profile/${action.payload}`);
    console.log('PROFILE DEETS', profileDetailsResponse.data);
    yield put({ type: 'SET_PROFILE', payload: profileDetailsResponse.data });
}

function* editProfile(action) {
    
    try {
        yield axios.put(`/api/profile/edit/${action.payload.id}`, action.payload);
        console.log('NEW PROFILE MAYBE', action.payload);
        yield put({ type: 'GET_PROFILE', payload: action.payload.id })
    } catch (error) {
        console.log('error editing profile', error);
    }
}

export default profileSaga;
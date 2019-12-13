import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* profileSaga() {
    yield takeLatest('GET_PROFILE', profileDetails);
    yield takeLatest('PUT_PROFILE', editProfile);
}

function* profileDetails(action) {
    // requests profile for a skater from database then adds to reducer
    const profileDetailsResponse = yield axios.get(`/api/profile/${action.payload}`);
    yield put({ type: 'SET_PROFILE', payload: profileDetailsResponse.data });
}

function* editProfile(action) {
    // uses a skater id to edit that skater's previously user inputted data
    try {
        yield axios.put(`/api/profile/edit/${action.payload.id}`, action.payload);
        yield put({ type: 'GET_PROFILE', payload: action.payload.id })
    } catch (error) {
        console.log('error editing profile', error);
    }
}

export default profileSaga;
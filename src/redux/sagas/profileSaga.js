import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* profileSaga() {
    yield takeLatest('GET_PROFILE', profileDetails);
}

function* profileDetails(action) {
    console.log('skater details', action.payload.id);
    const profileDetailsResponse = yield axios.get(`/api/profile/${action.payload.id}`);
    console.log('you want this one', profileDetailsResponse.data);
    
    yield put({ type: 'SET_PROFILE', payload: profileDetailsResponse.data});
    yield put({ type: 'GET_ATTEND', payload: {skater_id: profileDetailsResponse.data.id}})
}

export default profileSaga;
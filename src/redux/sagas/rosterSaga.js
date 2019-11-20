import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* rosterSaga() {
    yield takeLatest('GET_ROSTER', rosterDetails);
}

// function* rosterDetails(action) {
//     // gets all skaters associated with that team id
//     try {
//         const rosterResponse = yield axios.get('/api/roster');
//         yield put({ type: 'SET_ROSTER', payload: rosterResponse.data });
//     } catch (error) {
//         console.log('error fetching roster', error);
//     }
// }

function* rosterDetails(action) {
    console.log('roster details', action);
    const rosterResponse = yield axios.get(`/api/roster/${action.payload.id}`);
    yield put({ type: 'SET_ROSTER', payload: rosterResponse.data});
    // const movieGenresResponse = yield axios.get(`/api/movies/genres/${action.payload.id}`);
    // yield put({ type: 'SET_GENRES', payload: movieGenresResponse.data});
}

export default rosterSaga;
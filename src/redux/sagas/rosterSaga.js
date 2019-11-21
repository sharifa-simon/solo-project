import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* rosterSaga() {
    yield takeLatest('POST_SKATER', addSkater);
    yield takeLatest('GET_ROSTER', rosterDetails);
}

function* addSkater(action) {
    //sends inputted user value from AddSkater to server side post route
    try {
        yield axios.post('/api/roster',  action.payload);
        yield put({ type: 'GET_ROSTER' })
    } catch (error) {
        console.log('error posting skater', error);
    }
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
    try {
    const rosterResponse = yield axios.get(`/api/roster/`);
    yield put({ type: 'SET_ROSTER', payload: rosterResponse.data});
    console.log('rosterDetails was hit with action:', action);
    } catch (error) {
        console.log('error fetching skaters', error);
    }
}
    // const movieGenresResponse = yield axios.get(`/api/movies/genres/${action.payload.id}`);
    // yield put({ type: 'SET_GENRES', payload: movieGenresResponse.data});


export default rosterSaga;
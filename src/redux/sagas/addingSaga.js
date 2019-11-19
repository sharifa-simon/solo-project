import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addingSaga() {
    yield takeLatest('POST_TEAM', addTeam);
    
  }

  function* addTeam(action){
    try {
        yield axios.post('', action.payload);
        yield put({ type: 'SET_TEAM' })
      } catch (error) {
        console.log('error posting team', error);
      }
    }

    export default addingSaga;
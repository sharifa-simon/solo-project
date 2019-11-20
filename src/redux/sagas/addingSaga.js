import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addingSaga() {
    yield takeLatest('POST_TEAM', addTeam);
    
  }

  function* addTeam(action){
      //sends inputted user value from AddTeam to server side post route
    try {
        yield axios.post('/api/teams', action.payload);
        yield put({ type: 'SET_TEAM' })
      } catch (error) {
        console.log('error posting team', error);
      }
    }

    export default addingSaga;
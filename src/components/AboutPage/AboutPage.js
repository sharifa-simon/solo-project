import React from 'react';
import { Paper } from '@material-ui/core/';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div> 
  <h3>About</h3>
  <Paper>
    <div>
      <p>
        Track Time was created as a simple application, for Minnesota Roller Derby, 
        <br />to keep attendance for active skaters attending practices. It is currently in Beta.
      </p>
    </div>
    </Paper>
  </div>
);

export default AboutPage;

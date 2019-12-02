import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Track Time was created, for Minnesota Roller Derby, 
        <br />to keep attendance for active skaters attending practices.
      </p>
    </div>
  </div>
);

export default AboutPage;

import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Weather from './components/Weather';

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Weather />
      </Main>
    </React.Fragment>
  );
}

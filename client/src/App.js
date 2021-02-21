import React from 'react';
import Header from './components/Header';
import Weather from './components/Weather';

export default () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Weather />
      </main>
    </React.Fragment>
  );
}

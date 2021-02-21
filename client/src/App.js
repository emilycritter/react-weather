import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import Search from './components/Search';

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Card header="React Weather App">
          <Search />
        </Card>
      </Main>
    </React.Fragment>
  );
}

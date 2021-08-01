import React, { Fragment } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header title="Header Application">
        <div>App 2</div>
      </Header>
      <Sidebar />
    </Fragment>
  );
};

export default App;

import React, { Fragment } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

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

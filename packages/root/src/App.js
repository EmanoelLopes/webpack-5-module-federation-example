import React, { Fragment, useState, useEffect } from 'react';
import { Container, GlobalStyle } from './GlobalStyle';
import Header from '@layout/Header';
import Routes from '@routes/App';
import Deniro from './assets/images/de-niro.jpg';

function App() {
  const [user, setUser] = useState({
    name: '',
    photo: '',
  });

  useEffect(() => {
    setUser({
      name: 'Robert De Niro',
      photo: Deniro,
    });
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <div>
        <Header
          onClick={() => alert('Hello!')}
          user={user}
        >
          <h1>Dashboard</h1>
        </Header>
        <Container>
          <Routes />
        </Container>
      </div>
    </Fragment>
  );
}

export default App;

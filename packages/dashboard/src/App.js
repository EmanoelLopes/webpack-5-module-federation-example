import React, { Fragment, lazy, Suspense, useState } from 'react';
import { Container, GlobalStyle } from './GlobalStyle';
import Header from '@layout/Header';
import Sidebar from '@layout/Sidebar';
import * as S from './App.styles';
import Deniro from './assets/images/de-niro.jpg';

function App() {
  const [user, setUser] = useState({
    name: 'Robert Deniro',
    photo: Deniro,
  });

  return (
    <Fragment>
      <GlobalStyle />
      <div>
        <Header
          onClick={() => console.log('Viva la revolución!')}
          user={user}
        >
          <h1>Dashboard</h1>
        </Header>
        <Container>
          <Sidebar>
            <div>Sidebar</div>
          </Sidebar>
          <S.MainContent>
            <h2>Main Content</h2>
          </S.MainContent>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;

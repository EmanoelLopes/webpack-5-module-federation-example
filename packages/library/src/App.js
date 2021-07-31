import React, { Fragment } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Avatar, Button } from './components';

export function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div style={{
        alignItems: 'center', 
        backgroundColor: '#ddd',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        overflowX: 'hidden',
        padding: '16px',
        width: '100%',
      }}>
        <div style={{
          backgroundColor:'#fff',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '600px',
          padding: '16px',
          width: '100%',
        }}>
          <h1>App 3 - Library</h1>
          <div>
            <h2> Exemplo de componente Avatar</h2>
            <Avatar />
          </div>
          <div>
            <h2> Exemplo de componente Button</h2>
            <Button onClick={() => console.log('Olá!')}>Click!</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;

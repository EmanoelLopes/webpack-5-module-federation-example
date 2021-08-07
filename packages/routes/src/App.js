import React, { lazy, Suspense } from 'react';
import { GlobalStyle, Container } from './GlobalStyle';
import { Home, PageTwo, PageThree } from './pages';
import Sidebar from '@layout/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <Container>
      <Router>
        <GlobalStyle />
        <Sidebar>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </Sidebar>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <PageThree />
            </Route>
            <Route path="/users">
              <PageTwo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}
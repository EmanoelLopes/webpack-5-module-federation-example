import React, { lazy, Suspense } from 'react';
import { GlobalStyle, Container } from './GlobalStyle';
import Sidebar from '@layout/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const PageTwo = lazy(() => import('./pages/PageTwo'));
const PageThree = lazy(() => import('./pages/PageThree'));

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
                <Link to="/page-two">Page Two</Link>
              </li>
              <li>
                <Link to="/page-three">Page Three</Link>
              </li>
            </ul>
          </nav>
        </Sidebar>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/page-three">
              <Suspense fallback={<div>Loading...</div>}>
                <PageThree />
              </Suspense>
            </Route>
            <Route path="/page-two">
              <Suspense fallback={<div>Loading...</div>}>
                <PageTwo />
              </Suspense>
            </Route>
            <Route path="/">
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}
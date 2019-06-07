import React from 'react';
import { Navbar } from 'react-bootstrap';
import { css, cx } from 'emotion';
import TagList from './TagList';

const NavBarClass = cx(
  'NavBar',
  css`
    margin-bottom: 20px;
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.7);
  `,
);

const App = () => (
  <div className="App">
    <Navbar bg="primary" variant="dark" className={NavBarClass}>
      <Navbar.Brand variant="light">Test Radio App</Navbar.Brand>
    </Navbar>
    <TagList />
  </div>
);

export default App;

import React from 'react';
import {
  Navbar, Form, FormControl, Button,
} from 'react-bootstrap';
import { css, cx } from 'emotion';
import TagList from './TagList';

const NavBarClass = cx(
  'NavBar',
  css`
    margin-bottom: 20px;
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.7);
  `,
);

const query = window.location.hash.split('tags=')[1];
const tagsArray = query ? query.split(',') : [];
const tagsList = tagsArray.map(item => item);

const App = () => (
  <div className="App">
    <TestApp />
    <TestApp />
    <TestApp />
  </div>
);

const TestApp = () => {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(tagsList);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (value) {
      const updatedList = list.concat(value);
      setList(updatedList);
      window.location.hash = `tags=${updatedList.toString()}`;
    }
    setValue('');
    event.preventDefault();
  };

  const handleDeleteTag = tag => (event) => {
    event.preventDefault();
    const updatedList = list.filter(item => item !== tag);
    setList(updatedList);
    window.location.hash = `tags=${updatedList.toString()}`;
  };

  return (
    <div className="TestApp">
      <Navbar bg="primary" variant="dark" className={NavBarClass}>
        <Navbar.Brand variant="light"> Test Radio App </Navbar.Brand>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            value={value}
            onChange={handleChange}
            type="text"
            placeholder="Enter your own tag"
            className="mr-sm-2"
          />
          <Button type="submit">Add tag</Button>
        </Form>
      </Navbar>
      <TagList tagsList={list} onDelete={handleDeleteTag} />
    </div>
  );
};

export default App;

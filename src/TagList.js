import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { css, cx } from 'emotion';
import PropTypes from 'prop-types';

const TagListItemClass = cx(
  'TabList-item',
  css`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;

    &::before {
      content: '';
      margin-right: 10px;
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 7.5px;
      background-color: black;
    }
  `
);

const TagList = props => {
  const { tagsList, onDelete } = props;
  const [list, setList] = React.useState(tagsList);

  useEffect(() => {
    setList(tagsList);
  }, [tagsList]);

  return (
    <div>
      <ul>
        {list.map(tag => (
          <li className={TagListItemClass} key={tag}>
            <Button variant="light" onClick={onDelete(tag)}>
              {tag}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;

TagList.propTypes = {
  tagsList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

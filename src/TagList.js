import React from 'react';
import { css, cx } from 'emotion';

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
  `,
);

const TagList = () => {
  const query = window.location.hash.split('tags=')[1];
  const tagsArray = query ? query.split(',') : [];

  const listItems = tagsArray.map(tag => (
    <li className={TagListItemClass} key={tag}>
      {tag}
    </li>
  ));

  return (
    <div>
      <ul className="list-group">{listItems}</ul>
    </div>
  );
};

export default TagList;

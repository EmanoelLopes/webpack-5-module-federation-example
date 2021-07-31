import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Sidebar.styles';

function Sidebar({ items, children }) {
  return (
    <S.SidebarWrapper>
      <ul>
        {items && items.map((item, index) => {
          <li key={index * Math.random()}>{item}</li>
        })}
      </ul>
      <div>{children}</div>
    </S.SidebarWrapper>
  );
}

Sidebar.defaultProps = {
  item: [],
  children: <div />,
  className: '',
};

Sidebar.propTypes = {
  item: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object
  ]),
  className: PropTypes.string,
};

export default Sidebar;

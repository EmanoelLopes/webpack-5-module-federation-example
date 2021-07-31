import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.styles';
import Button from '@library/Button';
import Avatar from '@library/Avatar';
import Menu from '../../assets/icons/menu.svg';

function Header({ children, user, onClick }) {
  return (
    <S.HeaderWrapper>
      <S.HeaderLeft>
        <Button onClick={onClick}>
          <img src={Menu} alt="Menu" />
        </Button>
      </S.HeaderLeft>
      <S.HeaderCenter>{children}</S.HeaderCenter>
      <S.HeaderRight>
        <span>{user?.name}</span>
        <Avatar name={user?.name} src={user?.photo} />
      </S.HeaderRight>
    </S.HeaderWrapper>
  );
}

Header.defaultProps = {
  children: `<div />`,
  user: {
    name: '',
    src: '',
  },
  click: () => {},
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object
  ]),
  user: PropTypes.shape({
    name: PropTypes.string,
    src: PropTypes.string,
  }),
  click: PropTypes.func,
};

export default Header;
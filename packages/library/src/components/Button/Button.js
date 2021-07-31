import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styles';

function Button({ onClick, children }) {
  return <S.Button onClick={onClick}>{children}</S.Button>
};

Button.defaultProps = {
  onClick: () => {},
  children: 'Click',
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.string,
  ]),
};

export default Button;


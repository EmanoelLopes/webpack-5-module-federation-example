import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Avatar.styles';
import AvatarPlacholder from '../../assets/images/avatar-placeholder.png';

function Avatar({ src, name }) {
  return (
    <S.AvatarWrapper>
      <img src={src} alt={name} />
    </S.AvatarWrapper>
  );
};

Avatar.defaultProps = {
  src: AvatarPlacholder,
  name: 'John Doe',
};

Avatar.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};

export default Avatar;
import React from 'react';
import styled from '@emotion/styled';

const ButtonComponent = styled('button')(({ disabled }) => ({
  background: disabled ? '#dbe9fd' : '#0b6bf2',
  height: '45px',
  width: '175px',
  borderRadius: '5px',
  borderColor: 'transparent',
  color: 'white',
  fontWeight: '600',
  fontSize: '16px',
  cursor: 'pointer',
  margin: '0 15px',
  '&:active': {
    background: '#0243eb'
  },
  '&:disabled': {
    background: '#dbe9fd'
  }
}));

export const Button = props => {
  const { children, name } = props;
  return <ButtonComponent {...props}>{children ?? name}</ButtonComponent>;
};

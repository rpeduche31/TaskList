import React from 'react';
import styled from '@emotion/styled';

const TopbarContainer = styled.div({
  background: '#2e384d',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 35px'
});

const TopbarBody = styled.div({
  color: 'white'
});

export const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarBody>Pictureworks Task List</TopbarBody>
    </TopbarContainer>
  );
};

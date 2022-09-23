import React from 'react';
import styled from '@emotion/styled';

let ContentLayout = styled.div({
  background: 'hotpink',
  padding: '25px 45px'
});

export const Content = ({ children }) => {
  return <ContentLayout>{children}</ContentLayout>;
};

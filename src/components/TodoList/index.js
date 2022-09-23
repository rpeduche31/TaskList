import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../Button';

const ContentContainer = styled('div')(({ hidden }) => ({
  width: '100%',
  borderRadius: '12px'
}));

const NewContentContainer = styled('div')(({ hidden }) => ({
  padding: '5px 20px',
  display: 'flex',
  alignItems: 'center',
  justifContent: 'center',
  flexDirection: 'row',
  height: '60px',
  background: 'gainsboro',
  marginBottom: '7px',
  borderRadius: '5px'
}));

const ListContainer = styled('div')(({ hidden }) => ({
  width: '75%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

const BottomButtonConainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifContent: 'center'
});

export const TodoList = ({ items }) => {
  return (
    <ContentContainer key={items?.text}>
      <NewContentContainer>
        <ListContainer>{items?.text}</ListContainer>
        {items?.status === 'inProgress' ? (
          <BottomButtonConainer>
            <Button style={{ height: '30px', marginRight: '0' }}>Mark as Done</Button>
            <Button style={{ height: '30px', background: 'red' }}>Cancel To Do</Button>
          </BottomButtonConainer>
        ) : (
          <></>
        )}
      </NewContentContainer>
    </ContentContainer>
  );
};

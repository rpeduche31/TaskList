import React from 'react';
import styled from '@emotion/styled';
import { TodoList } from '../../../components/TodoList';

const ContentContainer = styled('div')(({ hidden }) => ({
  width: '100%',
  height: '450px',
  display: 'flex',
  alignItems: 'center',
  justifContent: 'center',
  flexDirection: 'column',
  background: 'orange',
  padding: '5px',
  overflow: 'auto'
}));

const ListEmpty = styled('div')(({ hidden }) => ({
  marginTop: '30px',
  fontSize: '24px',
  fontWeight: '600'
}));

export const ListContent = ({ listValue }) => {
  return (
    <ContentContainer className="content-list">
      {listValue?.length > 0 ? (
        listValue?.map((items, i) => {
          return <TodoList key={items?.text + i} items={items} />;
        })
      ) : (
        <ListEmpty>List Empty</ListEmpty>
      )}
    </ContentContainer>
  );
};

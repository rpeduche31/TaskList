import React from 'react';
import styled from '@emotion/styled';
import { TodoList } from '../../../components/TodoList';

const ContentContainer = styled('div')(({ hidden }) => ({
  width: '100%'
}));

const NewContainer = styled('div')(({ hidden }) => ({
  height: '450px',
  display: 'flex',
  alignItems: 'center',
  justifContent: 'center',
  flexDirection: 'column',
  background: '#2e384d',
  overflow: 'auto',
  borderRadius: '5px',
  padding: '12px 18px'
}));

const ListEmpty = styled('div')(({ hidden }) => ({
  marginTop: '30px',
  fontSize: '24px',
  fontWeight: '600',
  color: 'white'
}));

export const ListContent = ({ listValue, handleComplete, handleCancel, onItemClick }) => {
  return (
    <ContentContainer className="content-list">
      <NewContainer>
        {listValue?.length > 0 ? (
          listValue?.map((items, i) => {
            return (
              <TodoList
                onItemClick={onItemClick}
                key={items?.text + i}
                items={items}
                handleComplete={handleComplete}
                handleCancel={handleCancel}
              />
            );
          })
        ) : (
          <ListEmpty>List Empty</ListEmpty>
        )}
      </NewContainer>
    </ContentContainer>
  );
};

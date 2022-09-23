import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../Button';
import { ModalConfirm } from '../../components/Modal';

const ContentContainer = styled('div')(({ hidden }) => ({
  width: '100%',
  borderRadius: '12px'
}));

const NewContentContainer = styled('div')(({ status }) => ({
  padding: '5px 20px',
  display: 'flex',
  alignItems: 'center',
  justifContent: 'center',
  flexDirection: 'row',
  height: '60px',
  background: '#e8e8e8',
  marginBottom: '7px',
  borderRadius: '5px',
  cursor: status === 'done' ? 'pointer' : 'default',
  position: 'relative',
  '&:hover': {
    background: '#cbcaca'
  }
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

const ColorCoding = styled('div')(({ color }) => ({
  height: '20px',
  width: '20px',
  borderRadius: '50%',
  background: color
}));

const ColorCodingContainer = styled('div')(({ color }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: '20px'
}));

export const TodoList = ({ items, onItemClick, handleComplete, handleCancel }) => {
  const [modalStatus, setOpenModalStatus] = useState(false);
  const [actionType, setActionType] = useState(false);

  const handleSubmit = () => {
    actionType === 'done' ? handleComplete(items) : handleCancel(items);
  };

  return (
    <>
      <ModalConfirm
        item={items?.text}
        message={actionType === 'done' ? 'Ccomplete To Do?' : 'Cancel To Do'}
        open={modalStatus}
        onClose={() => setOpenModalStatus(!modalStatus)}
        handleFunction={handleSubmit}
      />
      <ContentContainer key={items?.text} status={items?.status}>
        <NewContentContainer status={items?.status}>
          <ListContainer>{items?.text}</ListContainer>
          {items?.status === 'inProgress' ? (
            <BottomButtonConainer>
              <Button
                onClick={() => {
                  setActionType('done');
                  setOpenModalStatus(!modalStatus);
                }}
                style={{ height: '35px', marginRight: '0' }}>
                Mark as Done
              </Button>
              <Button
                onClick={() => {
                  setActionType('cancel');
                  setOpenModalStatus(!modalStatus);
                }}
                style={{ height: '35px', background: 'red' }}>
                Cancel To Do
              </Button>
            </BottomButtonConainer>
          ) : (
            <ColorCodingContainer>
              <ColorCoding color={items?.status === 'done' ? '#1fe21f' : 'red'} />
            </ColorCodingContainer>
          )}
        </NewContentContainer>
      </ContentContainer>
    </>
  );
};

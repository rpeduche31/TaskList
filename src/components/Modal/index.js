import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../Button';

const ModalContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  zIndex: 10,
  top: 0,
  left: 0
});

const ModalBackdrop = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  background: '#000000b8'
});

const ModalContent = styled('div')({
  height: '450px',
  width: '600px',
  borderRadius: '10px',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
});

const CloseContainer = styled('div')({
  display: 'flex',
  width: '50%',
  alignItems: 'center',
  justifyContent: 'flex-end',
  fontSize: '22px',
  color: 'white',
  fontWeight: '600',
  cursor: 'pointer',
  margin: '25px',
  marginTop: '55px'
});

const CustomTextArea = styled('textarea')({
  height: '300px',
  width: '550px',
  marginBottom: '25px',
  resize: 'none'
});

const BottomButtonConainer = styled('div')({
  display: 'flex'
});

export const Modal = ({ open, onClose, handleFunction }) => {
  const [todoInput, setTodoInput] = useState('');

  const handleSave = () => {
    handleFunction(todoInput);
    onClose();
  };

  const handleClose = () => {
    setTodoInput();
    onClose();
  };

  return open ? (
    <ModalContainer id="modal">
      <ModalBackdrop>
        <CloseContainer onClick={handleClose}>X</CloseContainer>
        <ModalContent>
          <CustomTextArea onChange={e => setTodoInput(e.target.value)} resize={'none'} />
          <BottomButtonConainer>
            <Button onClick={handleClose}>Cancel</Button>
            <Button disabled={!todoInput} onClick={handleSave}>
              Save
            </Button>
          </BottomButtonConainer>
        </ModalContent>
      </ModalBackdrop>
    </ModalContainer>
  ) : (
    <></>
  );
};

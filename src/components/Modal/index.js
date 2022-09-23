import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

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
    handleFunction({ text: todoInput, status: 'inProgress' });
    onClose();
  };

  const handleClose = () => {
    setTodoInput();
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Add Todo List</DialogTitle>
      <ModalContent>
        <CustomTextArea onChange={e => setTodoInput(e.target.value)} resize={'none'} />
        <BottomButtonConainer>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={!todoInput} onClick={handleSave}>
            Save
          </Button>
        </BottomButtonConainer>
      </ModalContent>
    </Dialog>
  );
};

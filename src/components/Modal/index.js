import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const ModalContent = styled('div')(({ type }) => {
  return {
    height: type === 'confirm' ? '155px' : '450px',
    width: type === 'confirm' ? '500px' : '600px',
    borderRadius: '10px',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };
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
const ItemContent = styled('div')({
  padding: '5px 45px'
});

export const Modal = ({ open, onClose, handleFunction }) => {
  const [todoInput, setTodoInput] = useState('');

  const handleSave = () => {
    handleFunction({
      text: todoInput,
      status: 'inProgress',
      id: `${Math.floor(Math.random() * 1000)}-id`
    });
    onClose();
    setTodoInput('');
  };

  const handleClose = () => {
    setTodoInput();
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Add Todo List</DialogTitle>
      <ModalContent type="add">
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

export const ModalConfirm = ({ open, onClose, handleFunction, message, item }) => {
  const handleSave = () => {
    handleFunction();
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{message}</DialogTitle>
      <ItemContent>{item}</ItemContent>
      <ModalContent type="confirm">
        <BottomButtonConainer>
          <Button style={{ background: 'red' }} onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Submit</Button>
        </BottomButtonConainer>
      </ModalContent>
    </Dialog>
  );
};

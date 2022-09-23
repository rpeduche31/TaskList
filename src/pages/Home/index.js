import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

const Home = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const HomeContainer = styled('div')({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifContent: 'center',
    flexDirection: 'column'
  });
  const ButtonContainer = styled('div')({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  });

  const handleSave = list => {
    setTodoList([...todoList, list]);
  };

  return (
    <>
      <Modal
        open={modalStatus}
        onClose={() => setModalStatus(!modalStatus)}
        handleFunction={handleSave}
      />
      <HomeContainer>
        <ButtonContainer>
          <Button onClick={() => setModalStatus(!modalStatus)} name="Add Todo" />
        </ButtonContainer>
        <div>Home</div>
      </HomeContainer>
    </>
  );
};

export default Home;

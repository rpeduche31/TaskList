import React, { useState } from 'react';
import styled from '@emotion/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

import { ListContent } from './ListContent';

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
  justifyContent: 'flex-end',
  marginBottom: '20px'
});
const TabContainer = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start'
});

const CustomTab = styled(Tab)({
  color: 'gray',
  fontWeight: '600'
});

const CustomTabPanel = styled('div')({
  width: '100%'
});

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <CustomTabPanel
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && children}
    </CustomTabPanel>
  );
};

const Home = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState(0);

  const handleSave = list => {
    setTodoList([...todoList, list]);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <TabContainer>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <CustomTab label="In Progress" />
            <CustomTab label="Done" />
            <CustomTab label="Cancelled" />
          </Tabs>
        </TabContainer>

        <TabPanel value={value} index={0}>
          <ListContent
            listValue={todoList?.filter(list => {
              return list?.status === 'inProgress';
            })}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListContent
            listValue={todoList?.filter(list => {
              return list?.status === 'done';
            })}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ListContent
            listValue={todoList?.filter(list => {
              return list?.status === 'cancelled';
            })}
          />
        </TabPanel>
      </HomeContainer>
    </>
  );
};

export default Home;

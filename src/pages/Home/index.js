import React, { useState } from 'react';
import styled from '@emotion/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

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
  fontWeight: '600',
  display: 'flex'
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
  const navigate = useNavigate();
  const [modalStatus, setModalStatus] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState(0);

  const handleSave = list => {
    setTodoList([...todoList, list]);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleComplete = list => {
    const newList = todoList?.map(item => {
      if (item?.id === list?.id) {
        return {
          ...item,
          status: 'done'
        };
      } else {
        return item;
      }
    });

    setTodoList(newList);
  };

  const handleCancel = list => {
    const newList = todoList?.map(item => {
      if (item?.id === list?.id) {
        return {
          ...item,
          status: 'cancelled'
        };
      } else {
        return item;
      }
    });

    setTodoList(newList);
  };

  const onItemClick = (item, e) => {
    console.log(navigate, 'history');
    navigate(`/details/${item?.id}`);
  };

  const ColorCoding = styled('div')(({ color }) => ({
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    background: color,
    marginLeft: '15px'
  }));

  const ColorCodingContainer = styled('div')(({ color }) => ({
    display: 'flex',
    alignItems: 'center'
  }));

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
            <CustomTab
              label={
                <ColorCodingContainer>
                  In Progress
                  <ColorCoding color="orange" />
                </ColorCodingContainer>
              }
            />
            <CustomTab
              label={
                <ColorCodingContainer>
                  Done
                  <ColorCoding color="#1fe21f" />
                </ColorCodingContainer>
              }
            />
            <CustomTab
              label={
                <ColorCodingContainer>
                  Cancelled
                  <ColorCoding color="red" />
                </ColorCodingContainer>
              }
            />
          </Tabs>
        </TabContainer>

        <TabPanel value={value} index={0}>
          <ListContent
            onItemClick={onItemClick}
            handleComplete={handleComplete}
            handleCancel={handleCancel}
            listValue={todoList?.filter(list => {
              return list?.status === 'inProgress';
            })}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListContent
            onItemClick={onItemClick}
            listValue={todoList?.filter(list => {
              return list?.status === 'done';
            })}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ListContent
            onItemClick={onItemClick}
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

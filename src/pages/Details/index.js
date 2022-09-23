import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const GoBackContainer = styled('div')(({ disabled }) => ({
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '600'
}));

const SampleDetailsContainer = styled('div')(({ disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '34px',
  fontWeight: '600'
}));

const Details = () => {
  const navigate = useNavigate('');
  return (
    <div>
      <GoBackContainer
        onClick={() => {
          navigate('/');
        }}>
        GO BACK
      </GoBackContainer>
      <SampleDetailsContainer>Sample TO DO Details</SampleDetailsContainer>
    </div>
  );
};

export default Details;

import React from 'react';
import { Topbar } from './Topbar';
import { Content } from './Content';

const Layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <Content>
        <div>{children}</div>
      </Content>
    </div>
  );
};

export default Layout;

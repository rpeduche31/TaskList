import React from 'react';
import { Topbar } from './Topbar';
import { Footer } from './Footer';
import { Content } from './Content';

const Layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <Content>
        <div>{children}</div>
      </Content>
      <Footer />
    </div>
  );
};

export default Layout;

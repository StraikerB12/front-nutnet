import React, { FC } from 'react';
import Header from '../header/Header';
import Menu from '../menu/Menu';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Menu />
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

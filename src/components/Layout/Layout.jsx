import React from 'react';
import Head from '../Head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      {children}
    </div>
  );
};

export default Layout;

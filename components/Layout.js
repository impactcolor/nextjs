import React, { useState } from 'react';
import Header from './Header';

const Layout = props => {

  const [children, setChildren] = useState(props.children);

  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout;

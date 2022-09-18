import './style/index.less';
import NavHeader from './layout/NavHeader';
import NavFooter from './layout/NavFooter';
import Home from './views/home';
import React from 'react';
function Index() {
  return (
    <>
      <NavHeader />
      <Home />
      <NavFooter />
    </>
  );
}

export default Index;
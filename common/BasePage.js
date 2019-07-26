import React from 'react';
import { Helmet } from 'react-helmet';
import { Page, NavBar } from 'ot-ui';
import CustomFooter from './CustomFooter';

const BasePage = ({ children }) => (
  <Page
    header={<NavBar name="Platform" />}
    footer={<CustomFooter/>}
  >
    <Helmet
      defaultTitle="Open Targets Platform"
      titleTemplate="%s | Open Targets Platform"
    />
    {children}
  </Page>
);

export default BasePage;

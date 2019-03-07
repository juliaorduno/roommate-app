import React from 'react';
import { CopyrightContainer, ActionsContainer } from './styles';

const Footer = () => (
  <React.Fragment>
    <CopyrightContainer>2019 © Roommate App. All Rights Reserved.</CopyrightContainer>
    <ActionsContainer>
      <a>Privacy Policy</a>
      <a>Terms and Conditions</a>
      <a>Careers</a>
    </ActionsContainer>
  </React.Fragment>
);

Footer.displayName = 'Footer';

export default Footer;

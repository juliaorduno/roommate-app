import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { NavBar, LogoImg, LinksContainer, LinkContainer, LinkItem } from './styles';
import { links } from './navigation.json';

const Navigation = ({ active }) => (
  <NavBar>
    <LogoImg src="/static/images/roommate-logo-black.png" />
    <LinksContainer>
      {links.map(link => (
        <LinkContainer key={link.label}>
          <Link href={link.route}>
            <LinkItem className={link.label === active ? 'active' : ''}>{link.label}</LinkItem>
          </Link>
        </LinkContainer>
      ))}
    </LinksContainer>
  </NavBar>
);

Navigation.displayName = 'Navigation';

Navigation.propTypes = {
  active: PropTypes.string.isRequired
};

export default Navigation;

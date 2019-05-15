import React from 'react';
import PropTypes from 'prop-types';
import { LoggedIn, LoggedOut, Value } from '@solid/react'
import { SolidButton, SolidMessage } from './styles';
import MainCard from '../../MainCard'
import {Container, Avatar, InfoContainer, TitleContainer, SinceContainer, SinceDate, Highlight, SolidLoginContainer } from '../../styles'

const UserInfoCard = ({ avatar, userName, date, children }) => (
  <MainCard title={<Highlight>User information</Highlight>}>
    <Container>
      <Avatar src={avatar || '../../../../static/images/defaultAvatar.svg'} />
      <InfoContainer>
        <LoggedOut>
          <TitleContainer>{userName}</TitleContainer>
        </LoggedOut>
        <LoggedIn>
          <TitleContainer><Value src='user.name' /></TitleContainer>
        </LoggedIn>
        <SinceContainer>
          <SinceDate>Member since {date}</SinceDate>
        </SinceContainer>
        {children}
      </InfoContainer>
      <SolidLoginContainer>
          <SolidButton popup="./popup.html" />
          <LoggedIn>
              <SolidMessage>Logged In.</SolidMessage>
          </LoggedIn>
          <LoggedOut>
              <SolidMessage>Log in to use your SOLID pod info.</SolidMessage>
          </LoggedOut>
      </SolidLoginContainer>
    </Container>
  </MainCard>
);

UserInfoCard.displayName = 'GroupInfoCard';

UserInfoCard.propTypes = {
  avatar: PropTypes.string,
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.node
};

UserInfoCard.defaultProps = {
  avatar: 'No code to display',
  children: null
};

export default UserInfoCard;
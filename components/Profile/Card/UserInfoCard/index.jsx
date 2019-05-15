import React from 'react';
import PropTypes from 'prop-types';
import { AuthButton, LoggedIn, Value } from '@solid/react'
import MainCard from '../../MainCard'
import {Container, Avatar, InfoContainer, TitleContainer, SinceContainer, SinceDate, Highlight, SolidLoginContainer } from '../../styles'

const UserInfoCard = ({ avatar, userName, date, children }) => (
  <MainCard title={<Highlight>User information</Highlight>}>
    <Container>
      <Avatar src={avatar || '../../../../static/images/defaultAvatar.svg'} />
      <InfoContainer>
        <TitleContainer>{userName}</TitleContainer>
        <SinceContainer>
          <SinceDate>Member since {date}</SinceDate>
        </SinceContainer>
        {children}
      </InfoContainer>
      <SolidLoginContainer>
          <AuthButton popup="./popup.html" />
          <LoggedIn>
              <p>Welcome back, <Value src='user.name' />.</p>
          </LoggedIn>
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
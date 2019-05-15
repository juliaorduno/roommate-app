import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Avatar,
  Container,
  Date,
  DateContainer,
  InfoContainer,
  ItemTypeOuter,
  ItemTypeInner,
  ItemTypeIcon,
  TitleContainer,
  PositionItemType
} from './styles';
import { CardContainer } from '../../../../static/styleConstants';

const MainCard = ({ avatar, icon, children, color, date, Title, showIcon }) => (
  <CardContainer>
    {showIcon && (
      <PositionItemType>
        <ItemTypeOuter>
          <ItemTypeInner color={color}>
            <ItemTypeIcon>
              <FontAwesomeIcon icon={icon} />
            </ItemTypeIcon>
          </ItemTypeInner>
        </ItemTypeOuter>
      </PositionItemType>
    )}
    <Container>
      <Avatar src={avatar || '../../../../static/images/defaultAvatar.svg'} />
      <InfoContainer>
        <TitleContainer>{Title}</TitleContainer>
        <DateContainer>
          <Date>{date}</Date>
        </DateContainer>
        {children}
      </InfoContainer>
    </Container>
  </CardContainer>
);

MainCard.displayName = 'MainCard';

MainCard.propTypes = {
  avatar: PropTypes.string,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node,
  color: PropTypes.string,
  date: PropTypes.string.isRequired,
  Title: PropTypes.element.isRequired
};

MainCard.defaultProps = {
  avatar: '',
  children: null,
  color: '',
  showIcon: true
};

export default MainCard;

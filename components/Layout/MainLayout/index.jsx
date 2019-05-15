import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Title from './Title';
import {
  MainContainer,
  Content,
  HeaderContainer,
  TitleContainer,
  CenteredContent,
  FooterContainer,
  Footer
} from './styles';
import AddButton from './AddButton';
import MeetingModal from './Modal/MeetingModal';
import AnnouncementModal from './Modal/AnnouncementModal';
import ShoppingModal from './Modal/ShoppingModal';
import ToDoModal from './Modal/ToDoModal';

class MainLayout extends Component {
  state = {
    isToDoOpen: false,
    isAnnouncementOpen: false,
    isMeetingOpen: false,
    isShoppingOpen: false,
  }

  toggleModal = (modal) => {
    const { isToDoOpen, isAnnouncementOpen, isMeetingOpen, isShoppingOpen } = this.state;
    switch(modal) {
      case 'ToDo':
        this.setState({ isToDoOpen: !isToDoOpen});
        break;
      case 'Announcement':
        this.setState({ isAnnouncementOpen: !isAnnouncementOpen});
        break;
      case 'Meeting':
        this.setState({ isMeetingOpen: !isMeetingOpen});
        break;
      case 'Shopping':
        this.setState({ isShoppingOpen: !isShoppingOpen});
        break;
      default:
        break;
    }
  }

  render() {
    const { children, title, footer, hasAddButton, active } = this.props;
    const { isToDoOpen, isAnnouncementOpen, isMeetingOpen, isShoppingOpen } = this.state;

    return (
      <MainContainer>
        <HeaderContainer>
          <Navigation active={active} />
        </HeaderContainer>
        <Content>
          <CenteredContent>
            <TitleContainer>
              {title && <Title title={title} />}
              {hasAddButton && <AddButton toggleModal={this.toggleModal}/>}
            </TitleContainer>
            {children}
            {footer && (
              <FooterContainer>
                <Footer>{footer}</Footer>
              </FooterContainer>
            )}
            <MeetingModal isMeetingOpen={isMeetingOpen} toggleModal={() => this.toggleModal('Meeting')}/>
            <AnnouncementModal isAnnouncementOpen={isAnnouncementOpen} toggleModal={() => this.toggleModal('Announcement')}/>
            <ShoppingModal isShoppingOpen={isShoppingOpen} toggleModal={() => this.toggleModal('Shopping')}/>
            <ToDoModal isToDoOpen={isToDoOpen} toggleModal={() => this.toggleModal('ToDo')}/>
          </CenteredContent>
        </Content>
      </MainContainer>
    );
  }
}

MainLayout.displayName = 'MainLayout';

MainLayout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.string,
  title: PropTypes.string,
  hasAddButton: PropTypes.bool,
  active: PropTypes.string.isRequired
};

MainLayout.defaultProps = {
  children: null,
  footer: '',
  title: '',
  hasAddButton: false
};

export default MainLayout;

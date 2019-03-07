import styled from 'styled-components';

export const MainContainer = styled.div`
  height: fit-content;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/static/images/login-bg.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 532px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormContainer = styled.div`
  height: fit-content;
  width: 100%;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 51px;
  position: relative;
  bottom: 50px;
`;

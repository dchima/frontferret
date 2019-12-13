import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Nav, 
} from 'components';

const AppContainer = styled.div`
  border: 1px solid black;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 200px 180px 30px 200px;
  ${Screen.largePhone`
  margin-left: 10px;
  margin-right: 10px;
`};
`;



const App = () => (
  <AppContainer>
  <Helmet>
    <meta charSet="utf-8" />
    <title>capcards</title>
  </Helmet>
    <GlobalStyle />
    <Nav />
  </AppContainer>
);

export default App;

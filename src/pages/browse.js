import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import { Nav, Captions } from 'components';

const BrowseContainer = styled.div`
  position: relative;
  display: flex;
  margin: 200px 280px 0px 280px;
  align-items: center;
  flex-direction: column;
  ${Screen.largePhone`
    margin-left: 10px;
    margin-right: 10px;
`};
`;

const App = () => (
  <BrowseContainer>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Browse Captions</title>
  </Helmet>
  <GlobalStyle />
  <Captions />
  <Nav />
</BrowseContainer>
);

export default App;

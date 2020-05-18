import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import { Nav, Captions, Autocomplete } from 'components';

const BrowseContainer = styled.div`
  position: relative;
  display: flex;
  margin: 200px 280px 0px 280px;
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
  <Autocomplete suggestions={[
    'books', 'braids', 'bags', 'bullet', 'beans', 'bank', 'bread']} />
  <Captions />
  <Nav />
</BrowseContainer>
);

export default App;

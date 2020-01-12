import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import { Nav, CaptionCard } from 'components';

const CaptionsContainer = styled.div`
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

const Batch = styled.div`
  position: relative;
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  ${Screen.largePhone`
    margin-top: 0px;
    align-items: center;
    margin-bottom: 10px;
`};
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      captions: [],
    };
  }

  componentDidMount() {
    fetch('https://capcards-api.herokuapp.com/v1.0/api/caption/')
      .then((res) => res.json())
      .then((response) => {
        this.setState({ captions: response.data.captions });
      })
      .catch(console.log);
  }

  render() {
    const captions = this.state.captions.map((caption) => <CaptionCard key={caption.id} content={caption} />);
    return (
      <CaptionsContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Browse Captions</title>
        </Helmet>
        <GlobalStyle />
        <Batch>
          {captions}
        </Batch>
        <Nav />
      </CaptionsContainer>
    );
  }
}
export default App;

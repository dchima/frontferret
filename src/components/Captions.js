import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCaptions } from 'redux/actions/captions';
import styled from 'styled-components';
import { Screen } from 'styles';
import { CaptionCard } from 'components';

const CaptionsContainer = styled.div`
  position: relative;
  display: flex;
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

  componentDidMount() {
     this.props.getAllCaptions();
  }

  render() {
    const captions = this.props.captions.map((caption) => <CaptionCard key={caption.id} content={caption} />);
    return (
      <CaptionsContainer>
        <Batch>
          {captions}
        </Batch>
      </CaptionsContainer>
    );
  }
}

App.propTypes = {
  getAllCaptions: PropTypes.func.isRequired,
  captions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  captions: state.Captions.items,
});

export default connect(mapStateToProps,{ getAllCaptions } )(App);

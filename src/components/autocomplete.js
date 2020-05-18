import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Basics, Screen } from 'styles';

const Input = styled.input`
  box-shadow: 0px 4px 5px ${Basics.colors.chalk};
  border: 1px solid white;
  border-radius: 15px;
  padding: 0.5rem;
  width: calc(500px + 1rem);
  font-size: 20px;
  height: 40px;
  margin-bottom: 10px;
  ${Screen.largePhone`
    margin: 20px;
    width: 85%;
  `};
  ${Screen.smallPhone`
    margin: 10px 3px;
    width: 90%;
  `};
`;
const NoSuggestions = styled.div`
  color: #999;
  padding: 0.5rem;
`;
const Suggestions = styled.ul`
  border: 1px solid white;
  box-shadow: 0px 4px 5px ${Basics.colors.chalk};
  border-radius: 15px;
  background-color: white;
  border-top-width: 0;
  list-style: none;
  overflow-y: auto;
  padding-left: 0;
  width: calc(510px + 1rem);
  ${Screen.largePhone`
    margin: 20px;
    width: 90%;
`};
  ${Screen.smallPhone`
    margin: 10px 3px;
    width: 96%;
  `};

  li {
    padding: 0.5rem;
    &:hover {
      background-color: ${Basics.colors.cheeseCake};
      color: ${Basics.colors.laserBlue};
      cursor: pointer;
      font-weight: 700;
    }
  }
`;

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",
      // what the user selects
      selected: [],
    };
  }

  // Event fired when the input value is changed
  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  // Event fired when the user clicks on a suggestion
  onClick = e => {
    // Update the user input and reset the rest of the state
    const { selected } = this.state;
    selected.push(e.currentTarget.innerText);
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
      selected
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions, selected } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      selected.push(filteredSuggestions[activeSuggestion]);
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
        selected,
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
        selected
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <Suggestions>
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </Suggestions>
        );
      } else {
        suggestionsListComponent = (
          <NoSuggestions>
            <em>No suggestions, you're on your own!</em>
          </NoSuggestions>
        );
      }
    }
    console.log('user input', userInput);
    console.log('selected input', selected);
    return (
      <Fragment>
        <Input
          type="text"
          placeholder="     search tags"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import updateSearchResults from '../../Data/searchResults/actions';
import {
  updateAPIStatus,
  updateNetworkResponse
} from '../../Data/apiStatus/actions';
import { StyledInput, StyledButton } from '../../StyledComponents/Inputs';
import { SearchBarWrap } from './styled';
import { fetchData } from '../../Global/helpers';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    const text = e.target.value;
    this.setState({ query: text });
  }

  handleSubmit() {
    const {
      updateSearchResults,
      updateAPIStatus,
      updateNetworkResponse
    } = this.props;
    // commence search
    updateAPIStatus(true);
    const { query } = this.state;
    fetchData(query).then(response => {
      if (response.status === 404) {
        updateNetworkResponse(true);
      } else {
        response.json().then(data => {
          updateSearchResults(data);
          // end search
          updateAPIStatus(false);
        });
      }
    });
  }

  render() {
    return (
      <SearchBarWrap>
        <StyledInput
          type="text"
          value={this.state.query}
          placeholder="Show Title"
          className="form-control"
          onChange={this.handleTextChange}
        />
        <StyledButton onClick={this.handleSubmit}>GO</StyledButton>
      </SearchBarWrap>
    );
  }
}

const mapDispatchToProps = {
  updateAPIStatus,
  updateNetworkResponse,
  updateSearchResults
};

export default connect(null, mapDispatchToProps)(Search);

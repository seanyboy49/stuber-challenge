/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';
import { Text } from '../../StyledComponents/Text';
import { SummaryWrap, EpisodeWrap, ResultsWrap } from './styled';

const SearchResults = ({ searchResults, noResults, searching }) => {
  if (noResults) {
    return (
      <ResultsWrap>
        <Text>No Results from API</Text>
      </ResultsWrap>
    );
  }
  if (searching) {
    return <Loader />;
  }
  if (searchResults) {
    const { summary, image, _embedded } = searchResults;
    const { episodes } = _embedded;

    return (
      <ResultsWrap>
        <SummaryWrap>
          <image src={image.medium} />
          <Text small> {summary}</Text>
        </SummaryWrap>
        {episodes.map(e => (
          <EpisodeWrap>
            <Text>
              {e.airdate}, Season {e.season} Episode {e.number}
            </Text>
            <Text small>{e.summary}</Text>
          </EpisodeWrap>
        ))}
      </ResultsWrap>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  noResults: state.apiStatusReducer.noResults,
  searchResults: state.searchResultsReducer.searchResults,
  searching: state.apiStatusReducer.searching
});

export default connect(mapStateToProps)(SearchResults);

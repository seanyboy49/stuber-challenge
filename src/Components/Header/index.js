/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Text } from '../../StyledComponents/Text';
import Logo from './logo';
import { HeaderWrapper, TitleWrap } from './styled';

const Header = ({ searchResults }) => {
  if (searchResults) {
    const { name } = searchResults;
    return (
      <HeaderWrapper>
        <Logo />
        <TitleWrap>
          <Text title>{name}</Text>
        </TitleWrap>
      </HeaderWrapper>
    );
  }
  return (
    <HeaderWrapper>
      <Logo />
      <TitleWrap>
        <Text title>Search</Text>
      </TitleWrap>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => ({
  searchResults: state.searchResultsReducer.searchResults
});

export default connect(mapStateToProps)(Header);

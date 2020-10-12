import React from 'react';
import { AppWrap, Content } from './styled';
import Header from '../Header';
import Search from '../Search';
import SearchResults from '../SearchResults';

const App = () => (
  <AppWrap>
    <Header />
    <Content>
      <Search />
      <SearchResults />
    </Content>
  </AppWrap>
);

export default App;

import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      {dummyData.map((post, i) => <PostContainer key={i} postData={post} />)}
    </div>
  );
}
    
   

export default App;

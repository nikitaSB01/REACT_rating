import React from 'react';
import MovieList from './components/MovieList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Фильмотека</h1>
      <MovieList />
    </div>
  );
};

export default App;

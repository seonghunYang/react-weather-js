import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherList from './components/WeatherList';
import Container from 'react-bootstrap/Container';
import ErrorMessage from './components/ErrorMessage';


function App() {
  return (
    <Container className="App">
      <SearchBar />
      <ErrorMessage/>
      <WeatherList />
    </Container>
  );
}

export default App;

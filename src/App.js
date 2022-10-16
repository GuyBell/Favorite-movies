import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import FCHomePage from "./Components/FCHomePage"
import FCFavoritesMovies from "./Components/FCFavoritesMovies"

function App() {
  return (
    <Routes>
      <Route path="/" element={<FCHomePage />} />
      <Route path="/FavoritesMovies" element={<FCFavoritesMovies />} />
    </Routes>
  );
}

export default App;

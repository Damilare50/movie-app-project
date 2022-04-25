import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import ActorProfile from './components/ActorProfile';
import NotFound from './components/NotFound';
import { GlobalStyle } from './GlobalStyle';
import SeriesHome from './components/SeriesHome';
import SingleSeries from './components/SingleSeries';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/series' element={<SeriesHome />} />
        <Route path='/series/:tvId' element={<SingleSeries />} />
        <Route path='/actor/:actorId' element={<ActorProfile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
};

export default App;

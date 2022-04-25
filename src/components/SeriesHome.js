import React from 'react';
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { useSeriesFetch } from '../hooks/useSeriesFetch';
import HeroImage from './HeroImage/HeroImage';
import Loading from './Loading';
import defaultImg from '../images/no_image.jpg'
import SearchBar from './SearchBar/SearchBar';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';
import Spinner from './Spinner/Spinner.styles';
import Button from './Button/Button';

const SeriesHome = () => {
  const { series, isError, isLoading, searchTerm , setSearchTerm, setLoadMore, topRated } = useSeriesFetch();
  //console.log(series)


  if (isError) {
    return <h3>Series - Something went wrong. Create a f**king Error component!</h3>;
  }

  return (
    <>
      {/* Hero image */}
      {series.results[0] ? <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${series.results[0].backdrop_path}`} title={series.results[0].original_name} text={series.results[0].overview} /> : <Loading defaultImg={defaultImg} /> }

      {/* Searchbars */}
      <SearchBar setSearchTerm={setSearchTerm} text="TV Shows" />

      {/* Grid for movie thumbs for popular movies */}
      <Grid header={searchTerm ? "Search Results" : "Popular TV Shows"}>
        {series.results.map((tv_show) => {
          return <Thumb key={tv_show.id} clickable={true} image={tv_show.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tv_show.poster_path}` : defaultImg} movieId={tv_show.id} isSeries={true} />
        })}
      </Grid>

      {/* Spinner!! */}
      {isLoading ? <Spinner /> : ""}

      {/* Loadmore button */}
      {series.page < series.total_pages && !isLoading ? <Button text="Load more..." handleClick={setLoadMore} /> : "" }

      {/* Grid for top rated shows */}
      <Grid header="Top Rated Shows">
        {topRated.results.map((tv_show) => {
          return <Thumb key={tv_show.id} clickable={true} image={tv_show.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tv_show.poster_path}` : defaultImg} movieId={tv_show.id} isSeries={true} />
        })}
      </Grid>
    </>
  )
}

export default SeriesHome;
import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//custom hook
import { useHomeFetch } from '../hooks/useHomeFetch';
//components
import HeroImage from './HeroImage/HeroImage';
import Loading from './Loading';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';
import Spinner from './Spinner/Spinner.styles';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';

import defaultImg from '../images/no_image.jpg';



const Home = () => {

    const { state, isLoading, isError, searchTerm, setSearchTerm, setLoadingMore } = useHomeFetch();

    if (isError) {
        return <h3>Home - Something went wrong. Create a f**king Error component!</h3>;
    }

    return (
        <>
            {state.results[0] ? <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} title={`${state.results[0].original_title}`} text={`${state.results[0].overview}`} /> : <Loading defaultImg={defaultImg} />}
            <SearchBar setSearchTerm={setSearchTerm} text="Movies" />
            <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
                {state.results.map((movie) => (
                    <Thumb key={movie.id} clickable={true} image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : defaultImg} movieId={movie.id} isSeries={false} />
                ))}
            </Grid>
            {isLoading ? <Spinner /> : ""}
            {state.page < state.total_pages && !isLoading ? <Button text="Load More" handleClick={() => setLoadingMore(true)} /> : ""}
        </>
    )
}

export default Home;
import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import Grid from './Grid/Grid';
import Spinner from './Spinner/Spinner.styles';
import defaultImg from '../images/no_image.jpg';
import useMovieFetch from '../hooks/useMovieFetch';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';
import Actor from './Actor/Actor';



const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, isLoading, isError } = useMovieFetch(movieId);
    //console.log(movie);
    if (isError) {
        return <h3>Movie - Something went wrong. Create a f**king Error component!</h3>;
    }
    if (isLoading) return <Spinner />;
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header="Actors">
                {movie.actors.map(actor => {
                    return <Actor key={actor.credit_id} name={actor.original_name} character={actor.character} imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : defaultImg} actorId={actor.id} clickable={true} />
                })}
            </Grid>
        </>
    )
}

export default Movie;
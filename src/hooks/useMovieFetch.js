import { useState, useEffect } from 'react';
import API from '../API'

const useMovieFetch = (movieId) => {
    const [ state, setState ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setIsError(false);

                const movie = await API.fetchMovie(movieId);
                const movieCredits = await API.fetchCredits(movieId);
                const directors = movieCredits.crew.filter(crewMember => crewMember.job === "Director")

                setState({
                    ...movie,
                    actors: movieCredits.cast,
                    directors
                });
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
            }
        }


        fetchData()
    }, [movieId])

    return {
        state,
        isLoading,
        isError
    }
}

export default useMovieFetch;
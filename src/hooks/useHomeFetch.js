import { useState, useEffect } from 'react';
import API from '../API';
// import { persistState } from '../helpers';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ state, setState ] = useState(initialState);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const [ loadingMore, setLoadingMore ] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setIsError(false);
            setIsLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            
            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    }


    //Get data with useEffect hook
    useEffect(() => {
        // if (!searchTerm) {
        //     const sessionState = persistState('homestate');

        //     if (sessionState) {
        //         setState(sessionState);
        //         return;
        //     }
        // }
        fetchMovies(1, searchTerm);
    }, [searchTerm])

    //load more data if button is clicked
    useEffect(() => {
        if (!loadingMore) return;

        fetchMovies(state.page + 1, searchTerm);
        setLoadingMore(false);
    }, [searchTerm, state.page, loadingMore])

    //Writing to the sessionStorage with useEffect
    // useEffect(() => {
    //     if (!searchTerm) window.localStorage.setItem('homestate', JSON.stringify(state));  
    // }, [searchTerm, state])


    return {
        state,
        isError,
        isLoading,
        searchTerm,
        setSearchTerm,
        setLoadingMore
    }
}
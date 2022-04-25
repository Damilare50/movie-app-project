import { useState, useEffect } from "react";
import API from "../API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useSeriesFetch = () => {
    const [ series, setSeries ] = useState(initialState);
    const [ topRated, setTopRated ] = useState(initialState);
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const [ loadMore, setLoadMore ] = useState(false);

    const fetchSeries = async (page, searchTerm = "") => {
        try {
            setIsLoading(true);
            setIsError(false);

            const API_results = await API.fetchMultipleSeries(searchTerm, page);
            const topRated_results = await API.fetchTopRatedSeries(1);
            setTopRated(() => ({
                ...topRated_results
            }));
            setSeries((prev) => {
                return {
                    ...API_results,
                    results: page > 1 ? [...prev.results, ...API_results.results] : [...API_results.results]
                }
            });

        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    }
    
    //call function that gets data from API
    useEffect(() => {

        fetchSeries(1, searchTerm)
    },[searchTerm])

    //Add more items on click of loadmore button
    useEffect(() => {
        if (!loadMore) return;

        fetchSeries(series.page + 1, searchTerm);
        setLoadMore(false);
    }, [loadMore, series.page, searchTerm])


    return {
        series,
        isLoading,
        isError,
        searchTerm,
        setSearchTerm,
        setLoadMore,
        topRated
    }
}
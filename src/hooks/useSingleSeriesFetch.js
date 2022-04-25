import { useState, useEffect } from "react";
import API from "../API";

const useSingleSeriesFetch = (tvId) => {
    const [ singleSeries, setSingleSeries ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(true);

    useEffect(() =>{
        const fetchSingle = async () => {
            try {
                setIsError(false);
                setIsLoading(true);

                const fetchSingle = await API.fetchSeries(tvId);
                const fetchCredits = await API.fetchSeriesCredits(tvId);

                setSingleSeries({
                    ...fetchSingle,
                    actors: fetchCredits.cast
                })

                setIsLoading(false);
            } catch (error) {
                setIsError(true);
            }
        }

        fetchSingle()
    }, [tvId])
    
    return {
        singleSeries,
        isLoading,
        isError
    }
}

export default useSingleSeriesFetch;
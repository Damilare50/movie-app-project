import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import useSingleSeriesFetch from "../hooks/useSingleSeriesFetch";
import Actor from "./Actor/Actor";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Grid from "./Grid/Grid";
import SeriesInfo from "./SeriesInfo/SeriesInfo";
import SeriesInfoBar from "./SeriesInfoBar/SeriesInfoBar";
import Spinner from "./Spinner/Spinner.styles";

import defaultImg from "../images/no_image.jpg";


const SingleSeries = () => {
    const { tvId } = useParams();
    const { isError, isLoading, singleSeries } = useSingleSeriesFetch(tvId);
    console.log(singleSeries)

    if (isError) {
        return <h3>Single Series - Something went wrong. Create a f**king Error component!</h3>;
    }

    if (isLoading) return <Spinner />

    return (
        <>
            <BreadCrumb movieTitle={singleSeries.original_name} isSeries={true} />
            <SeriesInfo series={singleSeries} />
            <SeriesInfoBar episode_runtime={singleSeries.episode_run_time[0]} first_episode={singleSeries.first_air_date} last_episode={singleSeries.last_air_date} />
            <Grid header="Actors">
                {singleSeries.actors.map((actor) => {
                    return (
                        <Actor key={actor.credit_id} name={actor.original_name} character={actor.character} imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : defaultImg} clickable={true} actorId={actor.id} />
                    )
                })}
            </Grid>
        </>
    )

}

export default SingleSeries;
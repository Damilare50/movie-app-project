import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content, Text } from './SeriesInfo.styles';
import Thumb from '../Thumb/Thumb';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../config';
import defaultImg from '../../images/no_image.jpg'

const SeriesInfo = ({series}) => {
  return (
    <>
        <Wrapper backdrop={series.backdrop_path} >
            <Content>
                <Thumb clickable={false} image={ series.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${series.poster_path}` : defaultImg } />
                <Text>
                    <h1>{series.original_name}</h1>
                    <h3>SYNOPSIS</h3>
                    <p>{series.overview}</p>

                    <div className="rating-details">
                        <article>
                            <h3>SEASONS</h3>
                            <div className="score">{series.number_of_seasons}</div>
                        </article>
                        <article>
                            <h3>EPISODES</h3>
                            <div className="score">{series.number_of_episodes}</div>
                        </article>
                        <article>
                            <h3>RATING</h3>
                            <div className="score">{series.vote_average}</div>
                        </article>
                        <article className="details">
                            <h3>STATUS</h3>
                            <div>{series.status}</div>
                        </article>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    </>
  )
}

SeriesInfo.propTypes = {
    movie: PropTypes.shape({
        backdrop_path: PropTypes.string,
        poster_path: PropTypes.string,
        original_name: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
        number_of_episodes: PropTypes.number,
        number_of_seasons: PropTypes.number
    })
}

export default SeriesInfo;
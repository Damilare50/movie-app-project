import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content, Text } from './MovieInfo.styles';
import Thumb from '../Thumb/Thumb';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../config';
import defaultImg from '../../images/no_image.jpg'

const MovieInfo = ({movie}) => {
  return (
    <>
        <Wrapper backdrop={movie.backdrop_path} >
            <Content>
                <Thumb clickable={false} image={ movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : defaultImg } />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>SYNOPSIS</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-director">
                        <article>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </article>
                        <article className="director">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map((director) => {
                                return <p key={director.credit_id}>
                                    {director.name}
                                </p>
                            })}
                        </article>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    </>
  )
}

MovieInfo.propTypes = {
    movie: PropTypes.shape({
        backdrop_path: PropTypes.string,
        title: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number,
        directors: PropTypes.array
    })
}

export default MovieInfo;
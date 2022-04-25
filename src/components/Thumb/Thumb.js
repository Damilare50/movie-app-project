import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable, isSeries }) => {
    return (
        <>
            <article>
                {clickable ? 
                ( isSeries ? 
                <Link to={`/series/${movieId}`}>
                    <Image src={image} alt="movie-thumb" />
                </Link> : 
                <Link to={`/${movieId}`}>
                    <Image src={image} alt="movie-thumb" />
                </Link>) : 
                (<Image src={image} alt="movie-thumb" />)}
            </article>
        </>
    )
}

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
    isSeries: PropTypes.bool
}

export default Thumb;
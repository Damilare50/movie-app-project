import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Image } from './Actor.styles';
import PropTypes from 'prop-types';

const Actor = ({name, character, imageUrl, clickable, actorId}) => {
  return (
    <Wrapper>
        {clickable ? <Link to={`/actor/${actorId}`}><Image src={imageUrl} alt='actor-thumb' /></Link> : <Image src={imageUrl} alt='actor-thumb' /> }
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
  )
}

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
  clickable: PropTypes.bool,
  actorId: PropTypes.number
}

export default Actor;
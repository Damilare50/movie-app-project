import React from 'react';
import { useParams } from 'react-router-dom';

const ActorProfile = () => {
  const { actorId } = useParams();
  console.log(actorId);
  return (
    <div>Actor</div>
  )
}

export default ActorProfile;
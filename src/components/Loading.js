import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from './Spinner/Spinner.styles';

const NoImage = styled.div`
  background: ${(props) =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.defaultImg}'), var(--darkGrey)`};
  background-size: 100%, contain;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Loading = ({defaultImg}) => {
  return (
    <div>
      <p>Loading data...</p>
      <Spinner />
      <NoImage defaultImg={defaultImg} alt="No data" />
    </div>
  )
}

Loading.propTypes = {
  defaultImg: PropTypes.string
}

export default Loading;
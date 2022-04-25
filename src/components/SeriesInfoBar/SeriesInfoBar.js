import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './SeriesInfoBar.styles';
import { convertDate,calcTime } from '../../helpers';

const SeriesInfoBar = ({episode_runtime, first_episode, last_episode}) => {
    return (
        <Wrapper>
            <Content>
                <div className="column">
                    <p>Episode Running time: {calcTime(episode_runtime)}</p>
                </div>
                <div className="column">
                    <p>First Episode Date: {convertDate(first_episode)}</p>
                </div>
                <div className="column">
                    <p>Last Episode Date: {convertDate(last_episode)}</p>
                </div>
            </Content>
        </Wrapper>
    )
}

SeriesInfoBar.propTypes = {
    episode_runtime: PropTypes.number,
    first_episode: PropTypes.string,
    last_episode: PropTypes.string
}


export default SeriesInfoBar
import React from 'react';
import { Link } from 'react-router-dom';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, TMDBLogoImg } from './Header.styles';

const Header = () => {
  return (
    <>
        <Wrapper>
            <Content>
                <Link to="/">
                  <div className='column'>
                    <h3>Movies</h3>
                  </div>
                </Link>
                <Link to='/series'>
                  <div className='column'>
                    <h3>TV Shows</h3>
                  </div>
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    </>
  )
}

export default Header;
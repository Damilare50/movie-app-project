import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  text-align: justify;

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--lightGrey);
    border-radius: 20px;
    width: 100px;
    margin: 0 20px;
    flex: 1;

    
  }

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;



export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;

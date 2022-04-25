import React from "react";
import PropTypes from 'prop-types';
import { Wrapper } from './Button.styles';

const Button = ({ text, handleClick}) => {
    return (
        <>
            <Wrapper type="button" onClick={handleClick}>
                {text}
            </Wrapper>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button;
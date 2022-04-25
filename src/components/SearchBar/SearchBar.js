import React, { useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';
import { Wrapper, Content } from "./SearchBar.styles";
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({setSearchTerm, text}) => {
    const [ searchValue, setSearchValue] = useState('');
    const init = useRef(true)

    useEffect(() => {
        if (init.current) {
            init.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(searchValue)
        }, 10);

        return () => clearTimeout(timer);
    }, [setSearchTerm, searchValue])
    return (
        <>
            <Wrapper>
                <Content>
                    <span><FaSearch style={{height: "30px", width: "30px"}}/></span>
                    <input type="text"
                     name=""
                     id=""
                     placeholder={`Search ${text}`} 
                     value={searchValue} 
                     onChange={(event) => setSearchValue(event.target.value)} />
                </Content>
            </Wrapper>
        </>
    )
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func,
    text: PropTypes.string
}

export default SearchBar;
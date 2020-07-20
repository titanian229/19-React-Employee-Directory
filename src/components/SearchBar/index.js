import React from 'react';
import './style.scss';

import { InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
    const {setSearch} = props
    return (
        <div className="py-4" id="searchDiv">
            <InputGroup size="lg">
                <FormControl placeholder="Employee Search" aria-label="Large" aria-describedby="inputGroup-sizing-lg" onChange={setSearch} />
                <InputGroup.Append>
                    <InputGroup.Text>
                        <FaSearch />
                    </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default SearchBar;

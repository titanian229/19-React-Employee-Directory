import React from 'react';
import './style.scss';

import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
    const { setSearch } = props;
    return (
        <div className="py-4" id="searchDiv">
            <InputGroup size="lg">
                <FormControl
                    placeholder="Employee Search"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-lg"
                    onChange={setSearch}
                />
                <InputGroup.Append>
                    <InputGroup.Text>
                        <FaSearch />
                    </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <Form.Group className="mt-2 mb-0">
                <Form.Control name="searchBy" onChange={props.changeSearchBy} placeholder="Search by: " size="sm" as="select">
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="location">Location</option>
                    <option value="dob">Date of Birth</option>
                    <option value="phone">Phone</option>
                </Form.Control>
            </Form.Group>
        </div>
    );
};

export default SearchBar;

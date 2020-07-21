import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserTable from '../components/UserTable';
import styles from './Search.module.scss';


const Search = () => {
    // let [{ data, loading, error }] = useAxios('http://slowwly.robertomurray.co.uk/delay/3000/url/http://www.google.co.uk'); //&seed=jam'

    const [searchText, setSearchText] = useState('');
    const [searchBy, setSearchBy] = useState('name')

    const changeSearchBy = (searchBySelection) => {
        setSearchBy(searchBySelection.target.value)
    }

    const setSearch = (searchFieldContents) => {
        setSearchText(searchFieldContents.target.value);
    };

    return (
        <div>
            <SearchBar setSearch={setSearch} changeSearchBy={changeSearchBy} searchField={searchText} />
            <div className={styles.wideContainer}>
                <UserTable searchBy={searchBy} searchText={searchText} />
            </div>
        </div>
    );
};

export default Search;

import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
// import Container from 'react-bootstrap/Container';
import UserTable from '../components/UserTable'
import Alert from 'react-bootstrap/Alert'
import styles from './Search.module.scss'

import useAxios from 'axios-hooks'

const Search = () => {

    let [{ data, loading, error }] = useAxios('https://randomuser.me/api/?results=50&nat=CA&seed=jam');

    const [searchText, setSearchText] = useState('')

    if (loading) return <Alert>Loading...</Alert>
    if (error) return <Alert variant="danger">Error, API fetch failed.</Alert>

    const setSearch = (searchFieldContents) => {
        setSearchText(searchFieldContents.target.value)
    }

    return (
        <div>
            <SearchBar setSearch={setSearch} searchField={searchText} />
            {/* <Container> */}
            <div className={styles.wideContainer}>
                <UserTable users={data.results} sortSetter={null} searchText={searchText} />
            </div>
            {/* </Container> */}

        </div>
    )
}

export default Search;

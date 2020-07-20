import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import Container from 'react-bootstrap/Container';
import UserTable from '../components/UserTable'
import Alert from 'react-bootstrap/Alert'


import useAxios from 'axios-hooks'

const Search = () => {

    const [searchText, setSearchText] = useState('')
    let [{ data, loading, error }, refetch] = useAxios('https://randomuser.me/api/?results=50&nat=CA');

    if (loading) return <Alert>Loading...</Alert>
    if (error) return <Alert variant="danger">Error, API fetch failed.</Alert>

    const setSearch = (searchFieldContents) => {
        setSearchText(searchFieldContents.target.value)
    }

    return (
        <div>
            <SearchBar setSearch={setSearch} searchField={searchText} />
            <Container>
                <UserTable users={data.results} sortSetter={null} />
            </Container>

        </div>
    )
}

export default Search;

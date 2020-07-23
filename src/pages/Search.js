import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserTable from '../components/UserTable';
import UserInfoModal from '../components/UserInfoModal';
import styles from './Search.module.scss';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [searchBy, setSearchBy] = useState('name');
    const [infoModal, setInfoModal] = useState({
        user: {
            name: '',
            dob: { age: '' },
            phone: '',
            cell: '',
            email: '',
            picture: { large: '' },
            location: { street: { number: '', name: '' }, city: '', state: '' },
        },
        show: false,
    });

    const showInfoModal = (userInfo) => {
        console.log(userInfo);
        setInfoModal({ user: userInfo, show: true });
    };

    const toggleModal = () => {
        setInfoModal({ ...infoModal, show: !infoModal.show });
    };

    const onHide = () => {
        setInfoModal({ ...infoModal, show: false });
    };

    const changeSearchBy = (searchBySelection) => {
        setSearchBy(searchBySelection.target.value);
    };

    const setSearch = (searchFieldContents) => {
        setSearchText(searchFieldContents.target.value);
    };

    return (
        <div>
            <SearchBar setSearch={setSearch} changeSearchBy={changeSearchBy} searchField={searchText} />
            <div className={styles.wideContainer}>
                <UserTable searchBy={searchBy} searchText={searchText} showInfoModal={showInfoModal} />
            </div>
            <UserInfoModal user={infoModal.user} onHide={onHide} toggleModal={toggleModal} show={infoModal.show} />
        </div>
    );
};

export default Search;

import React, { useState } from 'react';
import './style.scss';
import UserTableHeader from './UserTableHeader';
import UserTableRow from './UserTableRow';
import Table from 'react-bootstrap/Table';
import useAxios from 'axios-hooks';
import Alert from 'react-bootstrap/Alert';

const sortBy = {
    name: (asc) => {
        return (a, b) => {
            if (asc) {
                return a.name.last.localeCompare(b.name.last);
            }
            return b.name.last.localeCompare(a.name.last);
        };
    },
    location: (asc) => {
        return (a, b) => {
            if (asc) {
                return a.location.city.localeCompare(b.location.city);
            }
            return b.location.city.localeCompare(a.location.city);
        };
    },
    dob: (asc) => {
        return (a, b) => {
            if (asc) {
                return a.dob.date.localeCompare(b.dob.date);
            }
            return b.dob.date.localeCompare(a.dob.date);
        };
    },
    sortProperty: (asc, property) => {
        return (a, b) => {
            if (asc) {
                return a[property].localeCompare(b[property]);
            }
            return b[property].localeCompare(a[property]);
        };
    },
};

const filterBy = {
    name: (users, searchText) => {
        searchText.forEach((stringSegment) => {
            users = users.filter(
                (user) =>
                    user.name.first.toLowerCase().includes(stringSegment) ||
                    user.name.last.toLowerCase().includes(stringSegment)
            );
        });
        return users;
    },
    email: (users, searchText) => {
        searchText.forEach((stringSegment) => {
            users = users.filter((user) => user.email.toLowerCase().includes(stringSegment));
        });
        return users;
    },
    location: (users, searchText) => {
        searchText.forEach((stringSegment) => {
            users = users.filter((user) => user.location.city.toLowerCase().includes(stringSegment));
        });
        return users;
    },
    dob: (users, searchText) => {
        searchText.forEach((stringSegment) => {
            users = users.filter((user) => user.dob.date.toLowerCase().includes(stringSegment));
        });
        return users;
    },
    phone: (users, searchText) => {
        searchText.forEach((stringSegment) => {
            users = users.filter((user) => user.phone.includes(stringSegment));
        });
        return users;
    },
};

const UserTable = (props) => {
    let [{ data, loading, error }] = useAxios('https://randomuser.me/api/?results=200&nat=CA&seed=jamie'); //&seed=jam'
    const [sort, setSort] = useState('name');
    const [asc, setAsc] = useState(true);

    if (loading) return <Alert>Loading...</Alert>;
    if (error) return <Alert variant="danger">Error, API fetch failed.</Alert>;

    let { results: users } = data;
    let { searchText } = props;

    const populateModal = (row) => {
        const selectedUserPhone = row.target.dataset.id;

        const userInfo = users.filter((user) => user.phone === selectedUserPhone)[0];
        props.showInfoModal(userInfo);
    };

    const changeSort = (obj) => {
        const sortField = obj.target.dataset.sort;
        if (sortField === sort) {
            setAsc(!asc);
        } else {
            setAsc(true);
            setSort(sortField);
        }
    };

    if (searchText !== '') {
        searchText = searchText.trim().toLowerCase().split(' ');
        users = filterBy[props.searchBy](users, searchText);
    }

    switch (sort) {
        case 'name':
        case 'location':
        case 'dob':
            users = users.sort(sortBy[sort](asc));
            break;
        case 'email':
        case 'phone':
            users = users.sort(sortBy.sortProperty(asc, sort));
            break;
        default:
            users = users.sort(sortBy.name(asc));
            break;
    }

    return (
        <Table striped bordered hover className="userTable">
            <UserTableHeader sort={sort} changeSort={changeSort} asc={asc} setAsc={setAsc} />
            <tbody>
                {users.map((user, ind) => (
                    <UserTableRow key={ind} user={user} showInfo={populateModal} />
                ))}
            </tbody>
        </Table>
    );
};

export default UserTable;

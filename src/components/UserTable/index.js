import React, { useState } from 'react';
import './style.scss';
import UserTableHeader from './UserTableHeader';
import UserTableRow from './UserTableRow';
import Table from 'react-bootstrap/Table';

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
const UserTable = (props) => {
    const [sort, setSort] = useState('name');
    const [asc, setAsc] = useState(true);

    const changeSort = (obj) => {
        const sortField = obj.target.dataset.sort;
        if (sortField === sort) {
            setAsc(!asc);
        } else {
            setSort(sortField);
        }
    };

    let { users, searchText } = props;
    if (searchText !== '') {
        searchText = searchText.trim().toLowerCase().split(' ');
        searchText.forEach((stringSegment) => {
            users = users.filter(
                (user) =>
                    user.name.first.toLowerCase().includes(stringSegment) ||
                    user.name.last.toLowerCase().includes(stringSegment)
            );
        });
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
            <UserTableHeader sort={sort} changeSort={changeSort} setAsc={setAsc} />
            <tbody>
                {users.map((user, ind) => (
                    <UserTableRow key={ind} user={user} />
                ))}
            </tbody>
        </Table>
    );
};

export default UserTable;

import React from 'react';
import './style.scss'

const UserTableHeader = (props) => {
    // const {sortCol, setSortCol} = {props}
    return (
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Birthdate</th>
                <th>Phone</th>
            </tr>
        </thead>
    );
};

export default UserTableHeader;

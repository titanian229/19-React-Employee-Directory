import React from 'react';
import './style.scss';

const UserTableHeader = (props) => {
    // const {sortCol, setSortCol} = {props}

    return (
        <thead className="dynamicHeader">
            <tr>
                <th></th>
                <th data-sort="name" onClick={props.changeSort}>
                    <span>Name</span>
                </th>
                <th data-sort="email" onClick={props.changeSort}>
                    Email
                </th>
                <th data-sort="location" onClick={props.changeSort}>
                    Location
                </th>
                <th data-sort="dob" onClick={props.changeSort}>
                    Birthdate
                </th>
                <th data-sort="phone" onClick={props.changeSort}>
                    Phone
                </th>
            </tr>
        </thead>
    );
};

export default UserTableHeader;

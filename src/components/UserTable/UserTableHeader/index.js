import React from 'react';
import './style.scss';

const UserTableHeader = (props) => {
    // const {sortCol, setSortCol} = {props}

    let { sort, asc } = props;

    const selectedSortCarrot = asc ? 'carrot carrotup' : 'carrot carrotdown';

    return (
        <thead className="dynamicHeader">
            <tr>
                <th></th>
                <th data-sort="name" onClick={props.changeSort} className={sort === 'name' ? selectedSortCarrot : ''}>
                    Name
                </th>
                <th data-sort="email" onClick={props.changeSort} className={sort === 'email' ? selectedSortCarrot : ''}>
                    Email
                </th>
                <th data-sort="location" onClick={props.changeSort} className={sort === 'location' ? selectedSortCarrot : ''}>
                    Location
                </th>
                <th data-sort="dob" onClick={props.changeSort} className={sort === 'dob' ? selectedSortCarrot : ''}>
                    Birthdate
                </th>
                <th data-sort="phone" onClick={props.changeSort} className={sort === 'phone' ? selectedSortCarrot : ''}>
                    Phone
                </th>
            </tr>
        </thead>
    );
};

export default UserTableHeader;

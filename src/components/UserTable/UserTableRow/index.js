import React from 'react';
import './style.scss';

const UserTableRow = (props) => {
    // const {sortCol, setSortCol} = {props}
    let { name, email, location, dob, phone, picture } = props.user;
    name = `${name.last}, ${name.first}`;
    return (
        <tr>
            <td></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{`${location.city}, ${location.state}`}</td>
            <td>{new Date(dob.date).getFullYear()}</td>
            <td className="nobreak">{phone}</td>
        </tr>
    );
};

export default UserTableRow;

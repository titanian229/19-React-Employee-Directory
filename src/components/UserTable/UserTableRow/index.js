import React from 'react';
import './style.scss';

import Image from 'react-bootstrap/Image'


const UserTableRow = (props) => {
    // const {sortCol, setSortCol} = {props}
    let { name, email, location, dob, phone, picture } = props.user;
    name = `${name.last}, ${name.first}`;
    return (
        <tr>
            <td><Image src={picture.thumbnail} roundedCircle /></td>
            <td className="name" data-id={phone} onClick={props.showInfo}>{name}</td>
            <td>{email}</td>
            <td>{`${location.city}, ${location.state}`}</td>
            <td>{new Date(dob.date).getFullYear()}</td>
            <td className="nobreak">{phone}</td>
        </tr>
    );
};

export default UserTableRow;

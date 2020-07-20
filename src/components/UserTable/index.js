import React from 'react';
import './style.scss';
import UserTableHeader from './UserTableHeader';
import UserTableRow from './UserTableRow';
import Table from 'react-bootstrap/Table'

const UserTable = (props) => {
    return (
        <Table striped bordered hover className="userTable">
            <UserTableHeader />
            <tbody>
                {props.users.map((user, ind) => (
                    <UserTableRow key={ind} user={user} />
                ))}
            </tbody>
        </Table>
    );
};

export default UserTable;

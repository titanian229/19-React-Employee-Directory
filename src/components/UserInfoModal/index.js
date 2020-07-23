import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

const UserInfoModal = (props) => {
    const user = props.user;

    return (
        <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{`${user.name.first} ${user.name.last}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <Image src={user.picture.large} />
                </div>
                <Table striped bordered>
                    <tbody>
                        <tr>
                            <td>Email: </td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>{`${user.location.street.number} ${user.location.street.name} - ${user.location.city}, ${user.location.state}`}</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{user.dob.age}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <td>Cell:</td>
                            <td>{user.cell}</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserInfoModal;

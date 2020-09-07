import React from "react";
import { Modal, Button, Table, Image } from "react-bootstrap";

const ConfirmModal = ({ showModal, setShowModal, fields }) => {
  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Image style={{ maxWidth: "125px" }} fluid src="./raisely.png" />
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-center text-muted">
            Please confirm your information is correct.
          </h5>
          <Table className="text-center">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{fields.firstName}</td>
                <td>{fields.lastName}</td>
                <td>{fields.email}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Submit
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConfirmModal;

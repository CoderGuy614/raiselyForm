import React from "react";
import { apiPost } from "../api";
import { Modal, Button, Table, Image } from "react-bootstrap";

const ConfirmModal = ({ showModal, setShowModal, setResponse, fields }) => {
  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Image style={{ maxWidth: "125px" }} fluid src="./raisely.png" />
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-center text-muted">
            Please confirm that your information is correct.
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
          <Button
            variant="success"
            onClick={() => {
              apiPost(fields)
                .then((res) => {
                  setResponse(res);
                })
                .catch((err) => console.log(err));
              setShowModal(false);
            }}
          >
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

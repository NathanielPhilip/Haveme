import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import EditUsers from "./EditUsers";
import { useDispatch } from "react-redux";
import { deleteUser } from "../reducers/contactReducer";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase/config";

function User({ item, deleteContact, editContact }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "contacts", id));
  };

  return (
    <>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUsers
              handleClose={handleClose}
              editContact={editContact}
              item={item}
            />
          </Modal.Body>
        </Modal>
      </>

      {/* rendered card begins */}
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {item.address}
          </Card.Subtitle>
          <Card.Text>{item.phone}</Card.Text>
          <Button variant="info" onClick={()=>handleDelete(item.id)}>
            Delete
          </Button>{" "}
          <Button variant="info" onClick={handleShow}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default User;

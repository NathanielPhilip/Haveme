import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser } from "../reducers/contactReducer";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/config";

function EditUsers({ handleClose, editContact, item }) {
  const { id } = item;

  const [name, setName] = useState(item.name);
  const [address, setAddress] = useState(item.address);
  const [phone, setPhone] = useState(item.phone);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    const items = {
      name: name,
      address: address,
      phone: phone,
      id: item.id,
    };

    e.preventDefault();

    // editContact(item.id, items);
    // dispatch(editUser(id, items));

    const contactRef = doc(db, "contacts", item.id);

    await updateDoc(contactRef, items);

    handleClose();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone no.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Phone no."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default EditUsers;

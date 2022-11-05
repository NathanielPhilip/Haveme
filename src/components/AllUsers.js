import React from "react";
import User from "./User";
import { useSelector } from "react-redux";
import { selectContacts } from "../reducers/contactReducer";

function AllUsers({ contact, deleteContact, editContact }) {
  const contacts = useSelector(selectContacts);

  return (
    <>
      {contacts.map((item, index) => {
        return (
          <User
            key={index}
            item={item}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        );
      })}
    </>
  );
}

export default AllUsers;
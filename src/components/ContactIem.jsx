import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../features/contacts/ContactsSlice';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #ff4b5c;
  color: white;
  border: none;
  cursor: pointer;
`;

const EditButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const ContactItem = ({ contact, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editContact({ id: contact.id, name, email, phone }));
    setIsEditing(false);
  };

  return (
    <Item>
      {isEditing ? (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <EditButton onClick={handleEdit}>Save</EditButton>
        </>
      ) : (
        <>
          <span>{name} - {email} - {phone}</span>
          <div>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
            <Button onClick={onDelete}>Delete</Button>
          </div>
        </>
      )}
    </Item>
  );
};

export default ContactItem;

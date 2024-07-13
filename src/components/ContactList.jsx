import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../features/contacts/ContactsSlice';
import ContactItem from './ContactIem';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={() => dispatch(removeContact(contact.id))} />
      ))}
    </List>
  );
};

export default ContactList;

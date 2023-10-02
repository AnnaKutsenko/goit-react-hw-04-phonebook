import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Section, Container, PhoneTitle, ContactsTitle } from 'Section.styled';

const getInitialContacts = () => {
  const contacts = localStorage.getItem('key');
  const parsedContacts = JSON.parse(contacts);

  if (contacts) {
    return parsedContacts;
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(contacts))
  }, [contacts]);

  const addContact = (newContact) => {
    if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts.`)
      return;
    };

    setContacts(prevContacts => [...prevContacts, { id: nanoid(), ...newContact}]);
  };

  const changeFilterContacts = newContactName => {
    setFilter(newContactName);
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <Section>
        <Container>
          <PhoneTitle>Phonebook</PhoneTitle>
          <ContactForm onAdd={addContact} />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactFilter
            filter={filter}
            onChangeFilterContacts={changeFilterContacts}
          />
          {contacts.length > 0 ? (
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={deleteContact}
            />
          ) : (
            <p>Your phonebook is empty. Add first contact!</p>
          )}
        </Container>
      </Section>
    </>
  );
}
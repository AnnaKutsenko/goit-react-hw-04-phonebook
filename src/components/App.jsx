import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Section, Container, PhoneTitle, ContactsTitle } from 'Section.styled';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

    componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  addContact = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`)
      return;
    }
    
    this.setState(({contacts}) => ({
      contacts: [...contacts, { id: nanoid(), name, number }],
    }));
  };

  changeFilterContacts = newContactName => {
    this.setState({
      filter: newContactName,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getVisibleContacts();

    return (
      <>
        <Section>
          <Container>
            <PhoneTitle>Phonebook</PhoneTitle>
            <ContactForm onAdd={this.addContact} />
          </Container>
        </Section>

        <Section>
          <Container>
            <ContactsTitle>Contacts</ContactsTitle>
            <ContactFilter
              filter={filter}
              onChangeFilterContacts={this.changeFilterContacts}
            />
            {contacts.length > 0 ? (
              <ContactList
                contacts={filteredContacts}
                onDeleteContact={this.deleteContact}
              />
            ) : (
              <p>Your phonebook is empty. Add first contact!</p>
            )}
          </Container>
        </Section>
      </>
    );
  }
}
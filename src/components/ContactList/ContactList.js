import { ContactsList, ContactsListItem, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactsList>
        {contacts.map(contact => (
            <ContactsListItem key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
                <DeleteBtn onClick={() => onDeleteContact(contact.id)}>Delete</DeleteBtn>
            </ContactsListItem>
        ))}
        </ContactsList>
    );
};
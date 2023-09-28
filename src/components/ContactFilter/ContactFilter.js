import { FilterInput, FilterText } from './ContactFilter.styled';

export const ContactFilter = ({ filter, onChangeFilterContacts }) => {
  return (
    <>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        type="text"
        value={filter}
        onChange={event => {
          onChangeFilterContacts(event.target.value);
        }}
      />
    </>
  );
};
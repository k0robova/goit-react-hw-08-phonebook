import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contatcs/selectors';
import { ContactElement } from 'components/ContactElement/ContactElement';
import { getFilter } from '../../redux/filter/filterSlice';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleFilteredContacts = filteredContacts();

  return (
    <ul>
      {visibleFilteredContacts.map(({ _id, name, number }) => {
        return (
          <ContactElement key={_id} id={_id} name={name} number={number} />
        );
      })}
    </ul>
  );
};

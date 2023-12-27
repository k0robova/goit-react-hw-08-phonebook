import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contatcs/selectors';
import { ContactElement } from 'components/ContactElement/ContactElement';
// import { ContactElement } from 'components/ContactElement/ContactElement';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactElement key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, selectLoading } from '../redux/contatcs/selectors';
import { fetchContactsAction } from '../redux/contatcs/operations';

import { useEffect } from 'react';
// import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  const contacts = useSelector(getContacts);

  return (
    // <>
    //   <h1>Your contacts</h1>

    //   <div>{isLoading && 'Request in progress...'}</div>
    //   <Form />
    //   <ContactsList />
    // </>
    <div>
      <h2 className={css.title_contacts_page}>Try to save your contacts!</h2>
      <Form />

      <h1 className={css.title_main_contacts}>Your list of contacts</h1>
      <Filter />

      {isLoading ? (
        <Loader />
      ) : contacts.length > 0 ? (
        <ContactsList />
      ) : (
        <p className={css.nocontacts_title}>No contacts added yet! </p>
      )}
    </div>
  );
}

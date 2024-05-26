import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../Redux/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../Redux/selector';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <span className={css.loader} />}

      {!filteredContacts?.length && !error && (
        <p className={css.text}>No contacts found.</p>
      )}
      {error && <p className={css.error}>Error: {error}</p>}

      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <p className={css.text}>
              {name}: {number ? number : 'No number provided'}
            </p>
            <button
              className={css.buttonDelete}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

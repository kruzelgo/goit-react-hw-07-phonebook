// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';

// const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul className={css.contactList}>
//     {contacts.map(contact => (
//       <li key={contact.id}>
//         {contact.name}: {contact.number ? contact.number : 'No number provided'}
//         <button
//           onClick={() => onDeleteContact(contact.id)}
//           className={css.buttonDelete}
//         >
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string, // Remove .isRequired here
//     }).isRequired
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../Redux/operations';
import { selectError, selectFilteredContacts } from '../../Redux/selector';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
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
      {!filteredContacts?.length && !error && (
        <p className={css.text}>No contacts found.</p>
      )}
      {error && <p className={css.error}>Error: {error}</p>}

      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, phone }) => (
          <li className={css.item} key={id}>
            <p className={css.text}>
              {name}: {phone ? phone : 'No number provided'}
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

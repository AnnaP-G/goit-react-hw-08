import { useDispatch } from "react-redux";

import css from "./Contact.module.css";
import { apiDeleteContact } from "../../redux/contacts/operations";
import { getRandomColor } from "../../redux/contacts/selectors";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId));
  };

  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <li className={css.contactItem}>
      <div
        className={css.contactLetter}
        style={{ backgroundColor: getRandomColor() }}
      >
        {firstLetter}
      </div>
      <div>
        <p className={css.contactText}> {name}</p>
        <a className={css.contactText} href={`tel:${number}`}>
          <span>📞 </span>
          {number}
        </a>
      </div>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

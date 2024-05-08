export const ContactList = ({ contacts, deleteEvent }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => deleteEvent(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

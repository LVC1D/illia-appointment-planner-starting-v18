import React from "react";

export const ContactPicker = ({contacts, setContact, value, name}) => {
  return (
    <>
      <select 
        onChange={({target}) => setContact(target.value)}
        value={value}
        name={name}>
          <option value="No Contact Selected">No Contact Selected</option>
          {contacts.map(contact => (
            <option value={contact.name} key={contact.name}>
              {contact.name}
            </option>
          ))}
      </select>
    </>
  );
};

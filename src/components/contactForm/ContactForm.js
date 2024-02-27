import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          required
          placeholder="Johnny Smith"
          value={name}
          onChange={({target}) => setName(target.value)} />
        <input 
          type="text"
          required
          placeholder="example@email.com"
          value={email}
          onChange={({target}) => setEmail(target.value)} />
        <input 
          type="text"
          required
          placeholder="+357 9X XXXXXX"
          value={phone}
          onChange={({target}) => setPhone(target.value)}
          pattern="^\+357\s[976][0-9]\s[0-9]{6}$" />
        <input type="submit" value="Add the contact" />
      </form>
    </>
  );
};


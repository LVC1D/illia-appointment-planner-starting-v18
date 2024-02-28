import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          required
          placeholder="Appointment Name"
          value={name}
          onChange={({target}) => setName(target.value)} />
        <input 
          type="date"
          required
          placeholder="15.02.2024"
          min={getTodayString()}
          value={date}
          onChange={({target}) => setDate(target.value)} />
        <input 
          type="time"
          required
          placeholder="17:30"
          value={time}
          onChange={({target}) => setTime(target.value)} />
          <ContactPicker contacts={contacts} value={contact} setContact={setContact} name={name} />
        <input type="submit" value="Add the contact" />
      </form>
    </>
  );
};

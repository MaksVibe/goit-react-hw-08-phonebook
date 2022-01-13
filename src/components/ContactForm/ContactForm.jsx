import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/contacts-actions";
// import {
//   useAddContactMutation,
//   useFetchContactsQuery,
// } from "../../redux/todos/todoSlice";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  //   const [addTodo] = useAddContactMutation();
  //   const { data } = useFetchContactsQuery();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContacts({ name, number }));
    // data.some(({ name }) => name === e.target.name.value)
    //   ? alert(`${name} is already in contacts`)
    //   : addTodo({ name, number });
    reset();
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        placeholder="Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

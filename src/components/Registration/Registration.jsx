import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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
      case "email":
        setEmail(e.target.value);
        break;
      case "pass":
        setPass(e.target.value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPass("");
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
        value={email}
        type="email"
        name="email"
        placeholder="Email"
        pattern=".+@globex\.com"
        title="Please Provide A Valid Email Address !"
        required
      />
      <input
        onChange={handleChange}
        value={pass}
        type="password"
        name="pass"
        // placeholder="Password"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
        title="Please Provide A Valid Email Address !"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;

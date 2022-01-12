import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";
import { login } from "../../redux/authorization/auth-operations";
// import { useLoginUserMutation } from "../../redux/todos/todoSlice";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const [loginUser] = useLoginUserMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    //   navigate(`/user/${user.id}`);
    // loginUser({ email, password });
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button>Sign in</button>
      </form>
      <Outlet />
    </div>
  );
}

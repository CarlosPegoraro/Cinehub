import { Link } from "react-router-dom";

export function Login() {

  const onSubmit = (ev: { preventDefault: () => void; }) => {
    ev.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} >
      <h1 className="title">
        Login in your account
      </h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn btn-block">Login</button>
      <p className="message">
        Not Register? <Link to="/singup">Create an accont</Link>
      </p>
    </form>
  );
}

import { Link } from "react-router-dom";

export function Singup() {
  const onSubmit = (ev: { preventDefault: () => void; }) => {
    ev.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} >
      <h1 className="title">
        Sing Up for free
      </h1>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Password Confirmaction" />
      <button className="btn btn-block">Sing Up</button>
      <p className="message">
        Already Registered? <Link to="/login">Sing In</Link>
      </p>
    </form>
  );
}

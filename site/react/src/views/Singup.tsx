import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export function Singup() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const {setUser, setToken} = useStateContext()

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      password_confirmation: passwordConfirmationRef.current?.value,
    };
    axiosClient.post("/signup", payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token)
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 442) {
          console.log(response.data.errors);
        }
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1 className="title">Sing Up for free</h1>
      <input ref={nameRef} type="text" placeholder="Full Name" />
      <input ref={emailRef} type="email" placeholder="Email Address" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <input
        ref={passwordConfirmationRef}
        type="password"
        placeholder="Password Confirmation"
      />
      <button className="btn btn-block">Sing Up</button>
      <p className="message">
        Already Registered? <Link to="/login">Sing In</Link>
      </p>
    </form>
  );
}

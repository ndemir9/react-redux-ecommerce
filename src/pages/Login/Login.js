import React, { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import { TextInput, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice";
import { useNavigate, Navigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.authSlice);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    await dispatch(
      loginUser({
        fullName: fullName,
        email: email,
        password,
        password,
      })
    );
    navigate("/", {
      replace: true,
    });
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <div className="w-2/5 mx-auto mt-20">
        <button onClick={() => localStorage.removeItem("user")}>
          remove user
        </button>
        <div className="mb-5">
          <TextInput
            type="text"
            required={true}
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {fullName}
        </div>
        <div className="mb-5">
          <TextInput
            type="email"
            required={true}
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email}
        </div>
        <div className="mb-5">
          <TextInput
            type="password"
            required={true}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password}
        </div>
        <Button type="submit" onClick={handleLogin}>
          Submit
        </Button>
      </div>
    </Layout>
  );
}

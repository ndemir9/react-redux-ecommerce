import React, { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import { TextInput, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../../components/Header/Header";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.authSlice);

  const [userName, setUserName] = useState("1");
  const [password, setPassword] = useState("83r5^_");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/users/${userName}`)
      .then((response) => {
        if (response.status == 200) {
          dispatch(loginUser(response.data));
          setLoading(false);
          navigate("/", {
            replace: true,
          });
          toast.success("Giriş başarılı");
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status == 401) {
          toast.error(error.response.data);
        }
      });
  };

  // const handleLogin = async (e) => {
  //   setLoading(true);
  //   await axios
  //     .post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/auth/login`, {
  //       username: userName,
  //       password: password,
  //     })
  //     .then((response) => {
  //       if (response.status == 200) {
  //         console.log(response.data.token);
  //         dispatch(loginUser(response.data.token));
  //         setLoading(false);
  //         navigate("/", {
  //           replace: true,
  //         });
  //         toast.success("Giriş başarılı");
  //       }
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       if (error.response.status == 401) {
  //         toast.error(error.response.data);
  //       }
  //     });
  // };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <div className="w-2/3 lg:w-2/5 mx-auto mt-20">
        <div className="mb-5">
          <TextInput
            type="text"
            required={true}
            placeholder="Full "
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
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
          {loading == true ? "Loading..." : "Login"}
        </Button>
      </div>
    </>
  );
}

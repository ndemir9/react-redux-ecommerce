import React from "react";
import Layout from "../../layout/Layout";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Profile() {
  const { user } = useSelector((state) => state.authSlice);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <div className="w-5/6 lg:w-2/3 mx-auto mt-10">
        <div>Profile</div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
}

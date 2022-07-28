import React from "react";
import Layout from "../../layout/Layout";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const { user } = useSelector((state) => state.authSlice);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div>Profile</div>
    </Layout>
  );
}

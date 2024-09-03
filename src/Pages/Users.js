import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../Components/users/UserCard";
import Loader from "../Components/common/Loader";

const Users = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  });
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/get-all-users`, {
        headers: {
          blog_pro: token,
        },
      })
      .then((res) => {
        setUsers(res.data.data);
        setIsLoading(false);
      })
      .catch(() => {
        alert("error");
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="list-users">
          <h3>User's</h3>
          {users && users.map((user) => <UserCard user={user} />)}
        </div>
      )}
    </>
  );
};

export default Users;

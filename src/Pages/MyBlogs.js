import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../Components/Blog/BlogCard";
import Loader from "../Components/common/Loader";

const MyBlogs = () => {
  const [myBlog, setMyBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/blog/get-user-Blog`, {
        headers: {
          blog_pro: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          setMyBlog(res.data.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="blog-body">
          <h3>My Blog</h3>
          <div>
            {myBlog.map(
              (item) =>
                !item.isDeleted && <BlogCard item={item} homepage={false} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MyBlogs;

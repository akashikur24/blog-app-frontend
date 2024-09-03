import { Route, Routes } from "react-router";
import Register from "./Pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import CreateBlog from "./Pages/CreateBlog";
import MyBlogs from "./Pages/MyBlogs";
import HomepageBlog from "./Pages/HomepageBlog";
import Header from "./Components/common/Header";
import Users from "./Pages/Users";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/homepage" element={<CreateBlog />}></Route>
        <Route path="/my-blogs" element={<MyBlogs />}></Route>
        <Route path="/home-blog" element={<HomepageBlog />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </>
  );
}

export default App;

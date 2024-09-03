import axios from "axios";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserCard({ user }) {
  function hanldeUnFollow() {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/follow/unfollow`,
        { followingUserId: user._id },
        {
          headers: {
            blog_pro: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        window.location.href = "users";
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }
  function hanldeFollow() {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/follow/follow`,
        { followingUserId: user._id },
        {
          headers: {
            blog_pro: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        window.location.href = "users";
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }
  return (
    <ListGroup horizontal className="my-2">
      <ListGroup.Item action>{user.name}</ListGroup.Item>
      <ListGroup.Item action>{user.username}</ListGroup.Item>
      <ListGroup.Item action>{user.email}</ListGroup.Item>
      {user.follow ? (
        <ListGroup.Item action variant="danger" onClick={hanldeUnFollow}>
          unfollow
        </ListGroup.Item>
      ) : (
        <ListGroup.Item action variant="primary" onClick={hanldeFollow}>
          follow
        </ListGroup.Item>
      )}
    </ListGroup>
  );
}

export default UserCard;

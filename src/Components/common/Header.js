import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const token = localStorage.getItem("token");
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home-blog">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/homepage">Create Blog</Nav.Link>
            <Nav.Link href="/my-blogs">My Blogs</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            {token ? (
              <>
                <Nav.Link href="#" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/">register</Nav.Link>
                <Nav.Link href="/login">login</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

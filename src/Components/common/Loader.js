import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    // <Spinner animation="border" role="status" className="loader-posistion">
    //   <span></span>
    // </Spinner>
    <div className="loader-posistion">
      <Spinner animation="border" variant="dark" />
    </div>
  );
}

export default Loader;

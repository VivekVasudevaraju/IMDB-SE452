import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import UserCard from "../components/User/UserCard";
import Rating from "../components/Rating/MovieRating";

const HeaderBar = () => {
  const [showRating, setShowRating] = useState(false);
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="rounded btn" href="#">
          IMDb
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form id="search" className="d-flex form">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-success d-flex align-items-center">
              <BsSearch />
            </Button>
          </Form>
          <Nav.Link className="link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="link" href="#movies">
            Movies
          </Nav.Link>
          <Nav.Link className="link" href="#tv_shows">
            TV Shows
          </Nav.Link>
          <Nav.Link className="link" href="#liked">
            Liked
          </Nav.Link>
          <Button variant="dark" onClick={() => setShowRating(true)}>
            Rate
          </Button>
          <Rating show={showRating} handleClose={() => setShowRating(false)} />
        </Navbar.Collapse>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <NavDropdown title="User" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#setting">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#log_out">
              <UserCard />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;

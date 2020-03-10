import React, { Component, useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import * as auth from "../services/AuthService";
import userIcon from "../assets/userIcon.png";

const Styles = styled.div`
  form {
    width: auto;
  }
  button {
    margin: 1vh;
  }
  .navbar {
    background-color: black;
  }
  .navbar-default,
  .collapsed {
    border-color: white;
    background-color: white;
  }
  .navbar-default,
  .toggle {
    background-color: white;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    margin: 2vh 2vw 2vh 2vw;
    &:hover {
      color: #690505;
    }
  }
  .navbar-light .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #690505;
    }
  }
  .navbar-light .navbar-brand {
    color: white;
    &:hover {
      color: #690505;
    }
  }
`;

export const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/">MovieSurfer</Navbar.Brand>
        <Navbar.Toggle area-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/reservation">Gallery</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {!auth.isLoggedIn() ? <Nav.Link href="/sign">Sign</Nav.Link> : null}
            <Nav.Link href="/admin/login">Admin</Nav.Link>
            {auth.isLoggedIn() ? (
              <Nav.Link href="/sign" onClick={auth.logout}>
                Logout
              </Nav.Link>
            ) : null}

            {auth.isLoggedIn() ? (
              <Nav.Link>{auth.getUserFirstName()}</Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
export default NavigationBar;

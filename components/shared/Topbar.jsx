"use client";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-left: 10%;
  padding-right: 10%;
  position: sticky;
  top: 0;
  left: 0;
  height: 5rem;
  box-sizing: border-box;
  z-index: 100;
  width: 100%;
  background-color: transparent;

  @media screen and (max-width: 500px) {
    padding: 1rem;
    height: 3rem;
  }
`;
const Topbar = () => {
  return (
    <Container>
      <Logo />
      <Nav />
    </Container>
  );
};

export default Topbar;

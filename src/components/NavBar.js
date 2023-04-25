import React from "react";
import styled from "styled-components";
function NavBar() {
  return (
    <>
      <Header>
        <Logo>
          <a href="#">
            <img src="/img/logo.png" alt="" />
          </a>
        </Logo>
        <Links>
          <ul>
            <li>
              <a href="#">VIEW PRODUCTS</a>
            </li>
            <li>
              <a href="#">WHAT'S NEW</a>
            </li>
            <li>
              <a href="#">NEWSLETTER</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </Links>
        <BuyButton>BUY PEPSI PRODUCTS</BuyButton>
      </Header>
    </>
  );
}

export default NavBar;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
`;
const Logo = styled.div`
  img {
    width: 80px;
  }
`;
const Links = styled.div`
  ul {
    display: flex;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        transform: translateY(-10px);
      }
      a {
        margin-right: 30px;
        color: white;
        text-decoration: none;
        font-weight: 600;
        font-family: roboto;
      }
    }
  }
`;
const BuyButton = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.4s ease-in-out;

  &:hover {
    background: white;
    color: #0062be;
    letter-spacing: 2px;
    scale: 110%;
    height: 35px;
  }
`;

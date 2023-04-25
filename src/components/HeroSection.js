import React, { useState } from "react";
import styled from "styled-components";

function HeroSection() {
  return (
    <>
      <Container>
        <TopContainer>
          <div>
            <img src="/img/pepsi1.png" alt="" />
          </div>
          <div>
            <img src="/img/pepsi2.png" alt="" />
          </div>
          <div>
            <img src="/img/pepsi3.png" alt="" />
          </div>
        </TopContainer>
        <BottomContainer>
          <Content>
            <h2>
              That's What <br /> <span>I like</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              sequi? Dignissimos, possimus! Laboriosam cum ipsa eveniet est
              voluptatum officiis autem et nesciunt ipsum dolore, obcaecati
              earum ad! Fugiat accusamus ipsum earum eligendi nisi eum inventore
              exercitationem fugit quia mollitia. Vel dolor et ipsa doloribus
              cum officia ut molestiae, mollitia labore, incidunt quos at nihil
              iure accusamus sed quia magnam! Cupiditate aut enim praesentium
              unde est sint temporibus voluptate inventore voluptas ut dolorem
              odio, ea perspiciatis dolores velit eos obcaecati corrupti
              distinctio saepe ab dolor perferendis atque fugiat dicta.
              Voluptate iste aspernatur corrupti architecto reiciendis amet
              minima, explicabo consequuntur iure laborum.
            </p>
            <a href="#">View All Products</a>
          </Content>
          <ImageSection>
            <img src="/img/pepsi1.png" alt="" />
          </ImageSection>
          <Socials>
            <li>
              <img src="/img/facebook.png" alt="" />
            </li>
            <li>
              <img src="/img/instagram.png" alt="" />
            </li>
            <li>
              <img src="/img/twitter.png" alt="" />
            </li>
          </Socials>
        </BottomContainer>
      </Container>
    </>
  );
}

export default HeroSection;

const Container = styled.div`
  /* width: 100%; */
  height: 100vh;
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-evenly;
`;
const Content = styled.div`
  width: 50%;
  height: 100%;
  margin-top: -200px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  overflow:visible;

  h2 {
    font-size: 4rem;
    /* line-height:2.5rem; */
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-weight: 1000;
    /* letter-spacing:5px; */
    text-transform: uppercase;
    color: #fff;

    span {
      font-size: 8rem;
    }
  }
  p {
    color: #fff;
    font-family: roboto;
    width: 80%;
    font-size: 1.1rem;
  }
  a {
    color: #111;
    width: 300px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 40px;
    font-weight: 600;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    background: #fff;
    margin-top: 20px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    padding: 10px 20px;
    margin-left: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #0062be;
      color: white;
      border: 1px solid white;
      letter-spacing: 2px;
      scale: 110%;
      height: 35px;
    }
  }
`;
const ImageSection = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: rotate(-15deg);
  margin-top: -200px;
  transition: all 0.5s;
  overflow: visible;

  &:hover {
    transform: rotate(-5deg);
  }
`;
const TopContainer = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    margin: 30px;
    height: 90px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-15px);
    }
  }
`;
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 85vh;
`;
const Socials = styled.div`
  position: absolute;
  right: 5%;
  top: 40%;

  li {
    cursor: pointer;
    list-style: none;
    padding: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
      filter: invert(1);
      /* display: inline-block; */
      background: transparent;
      transform: scale(0.6);
      transition: all 0.2s;

      &:hover {
        transform: scale(0.8);
      }
    }
  }
`;

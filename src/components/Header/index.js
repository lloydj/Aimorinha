import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

import logo from "../../images/logo.svg";

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? "50vh" : "20vh")};
  h1 {
    img {
      height: 90px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 40px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          border-bottom: 3px solid #524763;
        }
      }
    }
  }
`;

// You need to change this function to make sure only the transition on/off the home page have an animation

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === "/") {
        this.wrapper.animate([{ height: "20vh" }, { height: "50vh" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
      } else {
        this.wrapper.animate([{ height: "50vh" }, { height: "20vh" }], {
          duration: 1000,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
      }
    }
  };

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper
        isHome={location.pathname === "/"}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "black",
                textDecoration: "none"
              }}
            >
              <img src={logo} alt="Aimorinha" />
            </Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/VIP"> VIP </Link>
              </li>
              <li>
                <Link to="/Shop">Shop</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.5
          }}
          sizes={data.background.sizes}
        />
      </HeaderWrapper>
    );
  }
}

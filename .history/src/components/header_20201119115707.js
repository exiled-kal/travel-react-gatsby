import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">EXPLORIS</NavLink>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
background: transparent`
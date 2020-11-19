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
  background: red;
  height: 80px;
  display: flex;
  justify-con
`

const NavLink = styled(Link)``

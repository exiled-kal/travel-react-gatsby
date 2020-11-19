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
  justify-content: space-between;
  ${'' /* padding: 0.5rem calc((100vw - 1300px)/2) */}
`

const NavLink = styled(Link)``

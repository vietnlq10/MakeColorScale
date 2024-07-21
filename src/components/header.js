import React from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom'
import styled from 'styled-components'
import { createBrowserHistory } from "history";

const GalleryHeader = styled.header`
  display: inline-block;
  text-decoration: none;
  font-size: 34px;
  line-height: 34px;
  border-bottom: 1px solid #ddd;
  width: 100%;
  // padding: calc(50vh - 240px) 0 80px 0;
  color: #222;
  display: flex;
  margin-bottom:30px;
  color: #aaa;

  a {
    color: #aaa;
    text-decoration: none;
  }

  @media (max-width: 720px) {
    font-size: 18px;
    line-height: 28px;
  }


   .activeLink{
    color: #501ab0;
   }
`

const HeaderSection = styled.div`
  a {
    color: inherit;
    text-underline-position: under;
    text-decoration-color: var(--bodyDimmed);
  }

`

const history = createBrowserHistory().location.pathname.toLowerCase()
const Header = () => (
  <HeaderSection>
      <GalleryHeader>
        <NavLink  to="/" className={createBrowserHistory().location.pathname.toLowerCase().endsWith("/makecolorscale/") || createBrowserHistory().location.pathname.toLowerCase().endsWith("/makecolorscale") ? "tab activeLink" : "tab"}>Home</NavLink > 
        &nbsp; &nbsp;&nbsp; 
        <NavLink to="/gallery"  className={createBrowserHistory().location.pathname.toLowerCase().endsWith("/gallery") ? "tab activeLink" : "tab"}>Gallery</NavLink >
      </GalleryHeader>
  </HeaderSection>
)

export default Header
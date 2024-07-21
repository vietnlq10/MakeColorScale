import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterSection = styled.div`
  a {
    color: inherit;
    text-underline-position: under;
    text-decoration-color: var(--bodyDimmed);
    font-size: 11px;
  }

  h1 {
    font-size: 11px;
    line-height: inherit;
    font-weight: normal;
    display: inline-block;
  }
`

const Footer = () => (
  <FooterSection>
    {/* <div className='left'><a href='/gallery'><h1>Gallery</h1></a></div> */}
    <h1 className='right'>Developed by <a href='https://www.linkedin.com/in/vietnlq' target='_blank' rel='noopener noreferrer'>Nguyen Viet</a></h1>
	{/* &nbsp; · &nbsp;<a href='https://tgmresearch.com/' target='_blank' rel='noopener noreferrer'>TGM Research</a> */}
  </FooterSection>
)

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterSection = styled.div`
  a {
    color: inherit;
    text-underline-position: under;
    text-decoration-color: var(--bodyDimmed);
  }

  h1 {
    font-size: inherit;
    line-height: inherit;
    font-weight: normal;
    display: inline-block;
  }
`

const Footer = () => (
  <FooterSection>
    <a href='https://vietnlq10.github.io/MakeColorScale'><h1>Make Color Scale</h1></a>
	&nbsp; · &nbsp; rebuild by <a href='https://www.linkedin.com/in/vietnlq' target='_blank' rel='noopener noreferrer'>Nguyen Viet</a>
	&nbsp; · &nbsp;<a href='https://tgmresearch.com/' target='_blank' rel='noopener noreferrer'>TGM Research</a>
  </FooterSection>
)

export default Footer
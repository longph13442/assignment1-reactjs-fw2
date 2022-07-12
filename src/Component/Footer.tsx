import React from 'react'
import styled from 'styled-components'

type Props = {children : any}

const Footer = (props: Props) => {
  return (
    <Footers>Footer</Footers>
  )
}
const Footers = styled.div`
  background-color: black;
  border-radius: 1px;
  padding: 30px 0;
  text-align: center;
  color: white;
`

export default Footer
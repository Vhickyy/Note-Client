import React from 'react'
import styled from 'styled-components'

const ModalWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default ModalWrapper

const Wrapper = styled.div`
    position: fixed;
    inset: 0;
    background-color: var(--modal);
    display: grid;
    place-items: center;
    z-index: 100;
`
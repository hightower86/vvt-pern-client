import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addBlock } from '../state/blocksSlice'

const HeaderContainer = styled.div`
display:flex;
justify-content: center;
background-color: blue;
padding:20px;
/* position:fixed; */
top:0;
width:100%
`

const StyledButton = styled.button`
 padding: 10px 20px;
 &:hover {
   background-color:#e0e0e7;
   color: #a70909
 }
`


export const Header = () => {
  const dispatch = useDispatch()

  const addBlockHandler = () => {
    dispatch(addBlock({ id: '', text: '', fontSize: '', color: '', bgColor: '' }))
  }

  return (
    <HeaderContainer>
      <StyledButton onClick={addBlockHandler}>Add block</StyledButton>
    </HeaderContainer>
  )
}



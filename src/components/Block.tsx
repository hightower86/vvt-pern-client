import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { IBlock, setCurrentBlock, updateBlock } from '../state/blocksSlice'

const StyledBlock = styled.div`

    border:1px solid gray;
    padding: 5px;
    overflow: auto;
    margin: 5px 0px;
    &:focus{
      background-color: #bcc1e0
    }

`
interface Props {
  block: IBlock
  idx: number
}



const Block = ({ block, idx }: Props) => {

  const dispatch = useDispatch()

  const handleOnFocus = () => {
    console.log({ block })
    dispatch(setCurrentBlock(block))
  }

  const handleOnChange = (e: React.FormEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.innerText);
    console.dir(e)
  }
  const handleOnInput = (e: React.FormEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText
    console.log({ text });
    console.dir(e)
    const block = { id: '', text, fontSize: '10px', color: 'blue', bgColor: 'red' }
    dispatch(setCurrentBlock(block))
    dispatch(updateBlock({ idx, block }))
  }
  return (
    <StyledBlock contentEditable={true} onFocus={handleOnFocus} onInput={(e) => handleOnInput(e)}
      onChange={(e) => handleOnChange(e)} />
  )
}

export default Block

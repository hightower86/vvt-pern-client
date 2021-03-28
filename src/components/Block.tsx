import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { IBlock, setCurrentBlock, updateBlock } from '../state/blocksSlice'

type Custom = {
  bgColor?: string
  fontSize?: string
}
const StyledBlock = styled.div<Custom>`

    border:1px solid gray;
    padding: 5px;
    overflow: auto;
    margin: 5px 0px;
    &:focus{
      background-color: #bcc1e0
    };
    color:${props => props.color};
    background-color:${props => props.bgColor};
    font-size:${props => props.fontSize}px;
    `
/* background-color:${props => props.bgColor}; */
interface Props {
  block: IBlock
  idx: number
}



const Block = ({ block, idx }: Props) => {

  const dispatch = useDispatch()

  const handleOnFocus = () => {
    //console.log({ block })
    dispatch(setCurrentBlock({ block, index: idx }))
  }


  const handleOnInput = (e: React.FormEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText
    console.log({ text });
    console.dir(e)
    const block = { id: '', text, fontSize: '', color: '', bgColor: '' }
    dispatch(setCurrentBlock({ block, index: idx }))
    dispatch(updateBlock({ index: idx, block }))
  }


  return (
    <StyledBlock
      contentEditable={true}
      onFocus={handleOnFocus}
      onInput={(e) => handleOnInput(e)}
      color={block.color}
      bgColor={block.bgColor}
      fontSize={block.fontSize}
    >
      {block.text}
    </StyledBlock>
  )
}

export default Block

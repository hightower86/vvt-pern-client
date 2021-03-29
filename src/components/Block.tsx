import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteBlock, updateBlock } from '../state/actions'
import { IBlock, setCurrentBlock } from '../state/blocksSlice'
import { IRootState } from '../state/store'
import { defaultBlock } from './Header'

type Custom = {
  bgColor?: string
  fontSize?: number
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

const DeleteButton = styled.div`
      height:18px;
      width:18px;
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius:50%;
      border:none;
      padding-bottom:2px;
      background-color:#d44444;
      color:white;
      position: absolute;
      top:5px;
      right:-20px;
      &:hover{
        background-color:gray;
        cursor: pointer;
      }
    `
/* background-color:${props => props.bgColor}; */
interface Props {
  block: IBlock
  idx: number
}



const Block = ({ block, idx }: Props) => {

  const [showDelButton, setShowDelButton] = useState(false)
  const { currentBlock } = useSelector((state: IRootState) => state.blocks)

  const dispatch = useDispatch()

  const handleOnFocus = () => {
    //console.log({ block })
    dispatch(setCurrentBlock({ block, index: idx }))
    setShowDelButton(true)
  }


  const handleOnInput = (e: React.FormEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText
    console.log({ text });
    console.dir(e)
    const block = { ...currentBlock.block, text }
    dispatch(setCurrentBlock({ block, index: idx }))
    dispatch(updateBlock(block))
  }

  const handleDeleteBlock = () => {
    console.log('delete block');
    dispatch(deleteBlock(block.id!))
    setShowDelButton(false)
  }
  return (
    <div style={{ position: 'relative' }}>
      <StyledBlock
        contentEditable={true}
        suppressContentEditableWarning={true}
        onFocus={handleOnFocus}
        onInput={(e) => handleOnInput(e)}
        color={block.color}
        bgColor={block.bgColor}
        fontSize={block.fontSize}
      >
        {block.text}
      </StyledBlock>
      {showDelButton && <DeleteButton onClick={handleDeleteBlock}>x</DeleteButton>}

    </div>
  )
}

export default Block

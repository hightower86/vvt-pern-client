import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchBlocks } from '../state/actions'
import { IRootState } from '../state/store'
import Block from './Block'

const BlocksContainer = styled.div`
padding:10px 0
`
// const Block = styled.div`
// padding:5px;
// margin:5px;
// background-color:lightcoral;
// `

const BlockList = () => {

  const dispatch = useDispatch()
  const { blocks } = useSelector((state: IRootState) => state.blocks)
  console.log(blocks);

  // useEffect(() => {
  //   const request = async () => {
  //     await dispatch(fetchBlocks())
  //   }
  //   request()
  // }, [])

  return (
    <BlocksContainer>
      {blocks.map((block, index) => {
        return (
          <Block key={index} block={block} idx={index} />
        )
      })}
    </BlocksContainer>
  )
}

export default BlockList

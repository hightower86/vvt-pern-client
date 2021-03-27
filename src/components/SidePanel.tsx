import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { IRootState } from '../state/store'

const Panel = styled.div`
  width:200px;
  height:100vh;
  position: fixed;
  background-color:#5b5bfc;
  left:0;
  padding:40px 10px
`

const Input = styled.input`
  padding:10px;
  margin:10px 0
`

const TextArea = styled.textarea`
  height:50px
`
const Title = styled.h1`
  margin:20px 0px;
  color: #e9dada;
`

const SidePanel = () => {
  //const dispatch = useDispatch()
  const { currentBlock } = useSelector((state: IRootState) => state.blocks)
  return (
    <Panel>
      <Title>Settings</Title>
      <form action="">
        <TextArea name='fontSize' placeholder='text content' value={currentBlock?.text} />
        <Input name='fontSize' placeholder='font size' value={currentBlock?.fontSize} />
        <Input name='textColor' type='text' placeholder='text color' value={currentBlock?.color} />
        <Input name='bgColor' type='text' placeholder='background color' value={currentBlock?.bgColor} />
      </form>

    </Panel>
  )
}

export default SidePanel

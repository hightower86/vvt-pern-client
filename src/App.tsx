import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import BlockList from './components/BlockList';
import { Header } from './components/Header';
import SidePanel from './components/SidePanel';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const AppContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items: center;
border:border-box;
background-color:#e2e2e2;
min-height:100vh;
width:800px;
border-left:1px solid gray;
border-right:1px solid gray;
margin:0 auto;
position: relative;
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppContainer>
        <SidePanel />
        <Header />
        <BlockList />
      </AppContainer>
    </React.Fragment>
  );
}

export default App;

import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import './App.css'
import PageRouter from './router/PageRouter'
import defaultTheme from './themes/defaultTheme'

function App() {

  return (
    <ChakraProvider theme={defaultTheme}>
      <CSSReset/>
      <PageRouter/>
    </ChakraProvider>
  )
  
}

export default App

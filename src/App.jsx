import  React,{ useState } from 'react'

import './App.css'
import { Box, Container, Flex } from '@chakra-ui/react'
import Main from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Container bg={'#f8fad'} maxW={'Container.3xl'} height={'100vh'} p={0}>
        <Flex height={'full'}>
<Box height={'full'} flex={5} w={['20%','30%','%20','50%','60%']}>
  <Main/>
</Box>
        </Flex>
      </Container>
    </div>
  )
}

export default App

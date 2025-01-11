import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}> 
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/create' element={<CreatePage/>}></Route>
        </Routes>
     </Box>
    </>
  )
}

export default App

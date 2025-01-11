import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { MoonIcon, PlusSquareIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    
    return (
        <Container maxW={'1140px'}>  
            <Flex
                h={16}
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={{
                    base: 'column',
                    sm: 'row'
                }}
            >
                <Text

                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize={{ base: '22', sm: "28" }}
                    fontWeight='bold'
                    textTransform={'uppercase'}
                    textAlign={'center'}
                >
                    <Link to={'/'}>Producting...</Link>
                </Text>

                <HStack spacing={2} alignContent={'center'}>
                    <Link to={'/create'}>
                        <Button>
                            <PlusSquareIcon fontSize={20}></PlusSquareIcon>
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light'? <MoonIcon></MoonIcon>: <SunIcon></SunIcon>}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar
import { Container, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={'30'}
          fontWeight={"bold"}
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip={"text"}
          textAlign={'center'}
        >
          Curent Product
        </Text>

        <Text fontSize={'xl'} textColor={'gray.500'}>
          No Product found!! 
          <Link href='/create' textColor={'blue.500'}>
            Create Product
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage
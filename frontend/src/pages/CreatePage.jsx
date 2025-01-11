import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price:'',
    image:''
  });
  
  const handleAddProduct = () =>{
    console.log(newProduct)
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={'h1'} size={'2xl'} textAlign={'center'}>
          Create New Product
        </Heading>

        <Box w={'full'} bg={useColorModeValue("white", "gray.800")} p={6} rounded={'lg'} shadow={'md'}>
          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={e=>setNewProduct({...newProduct, name: e.target.value})}
            ></Input>
            <Input
              placeholder='price'
              name='price'
              value={newProduct.price}
              onChange={e=>setNewProduct({...newProduct, price: e.target.value})}
            ></Input>
            <Input
              placeholder='image'
              name='image'
              value={newProduct.image}
              onChange={e=>setNewProduct({...newProduct, image: e.target.value})}
            ></Input>
            <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
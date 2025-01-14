import { Box, Editable, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import React from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useProductStore } from '../store/product'

const ProductCard = ({ product }) => {

  const textColor = useColorModeValue("gray.600", 'gray.200')
  const bg= useColorModeValue("white", 'gray.800')

  const {deleteProduct} = useProductStore()
  const toast = useToast()

  const handleDeleteProduct = async(pid) => {
      const {success, message} = await deleteProduct(pid)
      if(!success){
        toast({
          title: 'error.',
          description: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }else{
        toast({
          title: 'product deleted.',
          description: "You've deleted the product",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      }
      
  }
  return (
    <Box
      shadow={'lg'}
      rounded={"lg"}
      overflow={"hidden"}
      transition={'all 0.3s'}
      _hover={{ transform: "translateV(-5px) ", shadow: "xl" }}
      bg={bg}
    >
      <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'}></Image>

      <Box p={4}>
        <Heading as={"h3"} size={'md'} mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon></EditIcon>} colorScheme='blue'></IconButton>
          <IconButton icon={<DeleteIcon></DeleteIcon>} colorScheme='red'
            onClick={() => handleDeleteProduct(product._id)}
          ></IconButton>
        </HStack>
      </Box>
    </Box>
  )
}

export default ProductCard
import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useProductStore } from '../store/product'

const ProductCard = ({ product }) => {

  const textColor = useColorModeValue("gray.600", 'gray.200')
  const bg = useColorModeValue("white", 'gray.800')

  const { deleteProduct, updateProduct } = useProductStore()
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [updatedProduct, setUpdatedProduct] = useState(product)

   const handleDeleteProduct = async (pid) => {

    const { success, message } = await deleteProduct(pid)
    if (!success) {
      toast({
        title: 'error.',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'product deleted.',
        description: "You've deleted the product",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }

  }

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct)

    if (!success) {
      toast({
        title: 'error.',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Product updated.',
        description: "You've updated the product",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }

    onClose()
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
          <IconButton icon={<EditIcon></EditIcon>} colorScheme='blue'
            onClick={onOpen}
          ></IconButton>
          <IconButton icon={<DeleteIcon></DeleteIcon>} colorScheme='red'
            onClick={() => handleDeleteProduct(product._id)}
          ></IconButton>
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder='Product Name'
                name='name'
                value={updatedProduct.name}
                onChange={(e)=> setUpdatedProduct({...updatedProduct, name: e.target.value})}
                ></Input>
              <Input
                placeholder='Price'
                name='price'
                value={updatedProduct.price}
                onChange={(e)=> setUpdatedProduct({...updatedProduct, price: e.target.value})}
                ></Input>
              <Input
                placeholder='Image Url'
                name='image'
                value={updatedProduct.image}
                onChange={(e)=> setUpdatedProduct({...updatedProduct, image: e.target.value})}
              ></Input>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button mr={5} colorScheme='blue'
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >Update</Button>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
  )
}

export default ProductCard
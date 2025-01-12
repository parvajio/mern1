import { Box } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({product}) => {
  return (
    <Box
        shadow={'lg'}
        rounded={"lg"}
        overflow={"hidden"}
        transition={'all 0.3s'}
        _hover={{transform: "translateV(-5px) ", shadow: "xl"}}
    >
        {product.name}
    </Box>
  )
}

export default ProductCard
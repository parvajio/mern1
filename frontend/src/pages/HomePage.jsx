import { Container, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard';

const HomePage = () => {

  const { fetchProduct, products } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct])

  console.log("products", products);

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

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={'full'}
        >
          {
            products.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
          }
        </SimpleGrid>

        {products.length === 0 &&
          <Text fontSize={'xl'} textColor={'gray.500'}>
            No Product found!!
            <Link href='/create' textColor={'blue.500'}>
              Create Product
            </Link>
          </Text>}

      </VStack>
    </Container>
  )
}

export default HomePage
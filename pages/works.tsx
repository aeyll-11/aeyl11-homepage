import Head from 'next/head';
import { Heading, Container, Box, Text, SimpleGrid} from '@chakra-ui/react';
import Layout from '../components/layouts/articles';
import { Image, Link } from '@chakra-ui/react'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid column={2} minChildWidth='200px' spacing='40px' >
          <Box w={300}>
            <Link href='https://macos-like.vercel.app/'>
              <Image 
                src='/macos.png' 
                alt='macoslike' 
                boxSize={150}
                width={350}
                borderRadius={15}
                objectFit='cover'
                backgroundPosition={'center'}
                >
              </Image>
            </Link>
            <Text 
              textAlign={'center'}
              marginTop={2}
              fontSize={18}
            >
              Macos Like
            </Text>
            <Text
              textAlign={'center'}
              fontWeight={'thin'}
            >
              Reproduce macos with modern js framework
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  )}

export default Works;
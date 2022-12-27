import Head from 'next/head';
import NextLink from 'next/link'
import {Container, Box, Heading, useColorModeValue, Image, Button}from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
   <Container mt={10}>
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}>
      Bonjour, Je suis Developpeur Full-Stack résident en France.
    </Box>

    <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Taguine Idriss
          </Heading>
          <p>Digital Craftsman ( Artiste/Full-Stack Developpeur)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image src='/pp.jpeg' alt='Aeyll'/>
            
          </Box>
        </Box>

      </Box>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Idriss is a full-stack developer based in Lyon with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera.
        </Paragraph>
        <Box textAlign="center" my={4}>
          <NextLink href="/work" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" onClick={() => router.push('/work')}>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
   </Container>
  )
}

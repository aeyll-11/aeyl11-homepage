import Head from 'next/head';
import NextLink from 'next/link'
import {Container, Box, Heading, useColorModeValue, Image, Button}from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';
import { BioSection, BioYear } from '../components/bio';

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
          <p>Digital Craftsman (Artiste/Full-Stack Developpeur)</p>
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
          Je suis un développeur full-stack basé à Lyon avec une
        passion pour la création numériques. Jaime la planification et la conception des
        moyens pour résoudre de real-life problems avec du code. Lorsque je ne suis pas en ligne, Jaime
        me balader et faire du sport.
        </Paragraph>
        <Box textAlign="center" my={4}>
          <NextLink href="/work" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" onClick={() => router.push('/work')}>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2022 to now</BioYear>
            Développeur Full Stack - Hello CSE
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Développeur Full Stack - DAF Assurance
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Diplome Développeur web et web mobile - It Akademy
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Langues étrangères appliquées Anglais & Coréen - Université Jean Moulin
        </BioSection>
      </Section>
   </Container>
  )
}

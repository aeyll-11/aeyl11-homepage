import Head from 'next/head';
import NextLink from 'next/link'
import {Box, Heading, Image, Button }from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/articles';


export default function Home() {
  const router = useRouter();

  return (
    <Layout title="Works">
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
          Je suis développeur Full-Stack basé à Lyon avec une
        passion pour la création. J&lsquo;aime la planification et la conception des
        moyens pour résoudre de real-life problemes avec du code. Lorsque je ne suis pas en ligne, J&lsquo; aime
        me balader et faire du sport.
        </Paragraph>
        <Box textAlign="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
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
      <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
          Stack 
        </Heading>
        <Paragraph>
          React, PReact, NextJs, React Native, Vue.js, NestJs, Tailwind, ChakraUi, Flutter, Laravel, Lumen, Jest, Pest.
        </Paragraph>
      </Section>
      <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
          I &hearts;
        </Heading>
        <Paragraph>
          Art, Tech, Jeux videos, Jiu-Jitsu, Musique.
        </Paragraph>
      </Section>
   </Layout>
  )
}

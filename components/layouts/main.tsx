import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import NavBar from './navbar';
import Fonts from '../font';
import Section from '../section';
import Footer from './footer';
const Main = ({children}: any,{router}: AppProps) => {
    return (
        <Box as="main">
            <Fonts/>
            <NavBar></NavBar>
            <Section delay={1}>
                <Container maxW="container.md" pt="14">
                    {children}
                </Container>
            </Section>
            <Footer />
        </Box>
    )
}

export default Main;
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import NavBar from './navbar';
import Fonts from '../font';
const Main = ({children}: any,{router}: AppProps) => {
    console.log(router?.asPath);
    return (
        <Box as="main">
            <Fonts/>
            <NavBar path=""></NavBar>
            <Container maxW="container.md" pt="14">
                {children}
            </Container>
        </Box>
    )
}

export default Main;
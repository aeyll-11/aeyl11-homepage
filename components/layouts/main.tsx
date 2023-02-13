import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import NavBar from './navbar';
import Fonts from '../font';
import Section from '../section';
import Footer from './footer';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import Loader from '../loader';
import { OrbitControls, Stage } from '@react-three/drei';
import Model from '../model';
const Main = ({children}: any,{router}: AppProps) => {
    const refContainer = useRef();;
    return (
        <Box as="main">
            <Fonts/>
            <NavBar></NavBar>
            <Section delay={1}>
                <Container maxW="container.md" pt="14">
                    <Box
                    mb={3} 
                    m-auto     
                    w="100%"
                    h={280}>
                    <Canvas shadows dpr={[1, 10]}>
                        <Suspense fallback={<Loader />}>
                        <Stage controls={refContainer} preset="portrait" shadows="accumulative" adjustCamera={false}></Stage>
                        <Model refContainer={refContainer}/>
                        <OrbitControls autoRotate autoRotateSpeed={0.5}/>
                        </Suspense>
                    </Canvas>
                    </Box>
                    {children}
                </Container>
            </Section>
            <Footer />
        </Box>
    )
}

export default Main;
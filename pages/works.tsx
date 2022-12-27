import Head from 'next/head';
import { Heading, Container, Center} from '@chakra-ui/react';
import Layout from '../components/layouts/articles';

const Works = () => {return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <Center>
          Soon ...
        </Center>
      </Container>
    </Layout>
  )}

export default Works;
import Head from 'next/head';
import { Heading, Container} from '@chakra-ui/react';
import Layout from '../components/layouts/articles';

const Work = () => {return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
      </Container>
    </Layout>
  )}

export default Work;
import Head from "next/head";
import { Center } from "@chakra-ui/layout";
const Footer = () => {
    return(
        <Center opacity={0.4} fontSize="sm" my={10}>
            &copy; {new Date().getFullYear()} Taguine Idriss. All Rights Reserved.
        </Center>
    )
}

export default Footer;
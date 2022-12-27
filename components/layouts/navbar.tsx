import Head from 'next/head';
import NextLink from 'next/link';
import { Box, useColorModeValue, Stack, Link, Heading, Flex, Container, Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5'
import ThemeToggleButton from '../theme-toggle-button';
import { useRouter } from 'next/router';

interface LinkItemProps {
    href: string;
    path: string;
    target?: any;
    children?: any;
}

const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
    return (
        <Link
            href={href}
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
            target={target}
            {...props}
            borderRadius="md"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            as={NextLink}
            passHref
        >
          {children}
        </Link>
    )
}

const NavBar = () => {
    const router = useRouter();
    const path = router.asPath;
    return(
        <Box
            as="nav"
            w="100%"
            position="fixed"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                justifyContent='space-between'
                alignContent="center"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Link href='/' as={NextLink} passHref>
                            Taguine Idriss
                        </Link>
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                >
                    <LinkItem href='/works' path={path}>
                        Works
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/aeyll-11/aeyl11-homepage"
                        path={path}
                    >
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>

                <Box display="flex" >
                    <ThemeToggleButton></ThemeToggleButton>
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }} m="auto">
                        <Menu isLazy id="navbar-menu">
                            <MenuButton ml={2}>
                                    <HamburgerIcon></HamburgerIcon>
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={NextLink} href="/" passHref>About</MenuItem>
                                <MenuItem as={NextLink} href="/works" passHref>Works</MenuItem>
                                <MenuItem
                                as={NextLink}
                                href="https://github.com/aeyll-11"
                                target=' _blank' 
                                >
                                    Source
                                    <Box ml={4}>
                                        <IoLogoGithub/>
                                    </Box>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar;

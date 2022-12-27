import Head from 'next/head';
import NextLink from 'next/link';
import { Box, useColorModeValue, Stack, Link, Heading, Flex, Container, Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5'
import ThemeToggleButton from '../theme-toggle-button';

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

const NavBar = (props: { path: any; }) => {
    const {path} = props;
    return(
        <Box
            as="nav"
            w="100%"
            position="fixed"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
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
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href='/works' path={path}>
                        Works
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/aeyll-11/aeyll-portfolio"
                        path={path}
                    >
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>

                <Box>
                    <ThemeToggleButton></ThemeToggleButton>
                        
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                                <NextLink href="https://uses.craftz.dog/" passHref>
                                <MenuItem as={Link}>Uses</MenuItem>
                                </NextLink>
                                <MenuItem
                                as={Link}
                                href="https://github.com/craftzdog/craftzdog-homepage"
                                >
                                View Source
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

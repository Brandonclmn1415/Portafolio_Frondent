import React from 'react';
import { Flex, Box, Heading, Button, Icon, useDisclosure } from '@chakra-ui/react';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import Collapse from './Collapse';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();

    const navItems = [
        { name: 'Sobre mí', id: 'about' },
        { name: 'Proyectos', id: 'projects' },
        { name: 'Habilidades', id: 'skills' },
        { name: 'CV', id: 'cv' },
        { name: 'Contacto', id: 'contact' }
    ];

return (
    <Box as="nav" bg="brand.800" color="white" py={4} position="sticky" top={0} zIndex={10} boxShadow="md">
        <Flex maxW="7xl" mx="auto" px={4} align="center" justify="space-between">
            <Flex align="center">
                <Icon as={FaCode} boxSize={6} color="accent.500" mr={2} />
            <Heading as="h1" size="lg" fontWeight="bold">
                <Box as="span" color="accent.500">.NET</Box> Dev
            </Heading>
        </Flex>
        

        <Flex display={{ base: 'none', md: 'flex' }} align="center">
            {navItems.map((item) => (
                <Button 
                key={item.id}
                as="a" 
                href={`#${item.id}`}
                variant="ghost" 
                color="white"
                _hover={{ bg: 'brand.700' }}
                mx={1}
                >
                {item.name}
                </Button>
            ))}
        </Flex>
        

        <Button 
            display={{ md: 'none' }}
            variant="ghost"
            color="white"
            onClick={onToggle}
            aria-label="Toggle Navigation"
            >
                    <Icon as={isOpen ? FaTimes : FaBars} boxSize={6} />
        </Button>
            </Flex>


    <Collapse in={isOpen}>
        <Box bg="brand.700" py={4} display={{ md: 'none' }}>
            <Flex direction="column" align="center">
                {navItems.map((item) => (
                <Button 
                    key={item.id}
                    as="a" 
                    href={`#${item.id}`}
                    variant="ghost" 
                    color="white"
                    w="100%"
                    py={6}
                    onClick={onToggle}
                >
                {item.name}
                </Button>
                ))}
            </Flex>
        </Box>
    </Collapse>
</Box>
);
};

export default Navbar;
import React from 'react';
import { Box, Flex, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const Footer = () => (
<Box bg="brand.900" color="white" py={10}>
    <Box maxW="7xl" mx="auto" px={4} textAlign="center">
        <Flex justify="center" mb={6}>
            <Icon as={FaCode} boxSize={6} color="accent.500" mr={2} />
            <Heading as="h2" size="lg">
                <Box as="span" color="accent.500">.NET</Box> Dev
            </Heading>
        </Flex>
        <Text mb={6}>Desarrollador Full Stack especializado en tecnologías .NET</Text>
        <Flex justify="center" mb={8}>
            <Button as="a" href="https://github.com/Brandonclmn1415?tab=repositories" target="_blank" variant="ghost" color="white" mx={1}>
                <FaGithub size={20} />
            </Button>
            <Button as="a" href="https://linkedin.com/in/brandon-steven-vega-salinas-243603269/" target="_blank" variant="ghost" color="white" mx={1}>
                <FaLinkedin size={20} />
            </Button>
            <Button as="a" href="mailto:brrandonlol1415@gmail.com" variant="ghost" color="white" mx={1}>
                <FaEnvelope size={20} />
            </Button>
        </Flex>
        <Text fontSize="sm" color="brand.300">
            © {new Date().getFullYear()} Portafolio de Brandon Steven Vega Salinas. Todos los derechos reservados.
        </Text>
    </Box>
</Box>
);

export default Footer;
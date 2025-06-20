import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Section = ({ id, title, children, bg = 'white' }) => (
<Box as="section" id={id} py={20} bg={bg}>
    <Box maxW="7xl" mx="auto" px={4}>
        <Heading as="h2" size="xl" mb={10} textAlign="center" position="relative" _after={{
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            bg: 'accent.500',
            borderRadius: 'full'
        }}>
            {title}
        </Heading>
            {children}
    </Box>
</Box>
);

export default Section;
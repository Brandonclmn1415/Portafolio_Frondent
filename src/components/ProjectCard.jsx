import React from 'react';
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { FaDotCircle } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies }) => (
<Box 
    bg="white" 
    borderRadius="lg" 
    overflow="hidden" 
    boxShadow="lg"
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
    height="100%"
>
    <Box p={6}>
        <Flex align="center" mb={4}>
            <Icon as={FaDotCircle} color="accent.500" mr={2} />
            <Heading as="h3" size="md">{title}</Heading>
        </Flex>
        <Text mb={4}>{description}</Text>
        <Flex wrap="wrap">
        {technologies.map((tech, index) => (
            <Box 
                key={index}
                bg="brand.50"
                color="brand.700"
                px={3}
                py={1}
                borderRadius="md"
                fontSize="sm"
                fontWeight="bold"
                mr={2}
                mb={2}
            >
                {tech}
            </Box>
        ))}
        </Flex>
    </Box>
</Box>
);

export default ProjectCard;


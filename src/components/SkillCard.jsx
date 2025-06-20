import React from 'react';
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';

const SkillCard = ({ icon, title, items }) => (
<Box bg="white" borderRadius="lg" p={6} boxShadow="md" textAlign="center" height="100%">
    <Icon as={icon} boxSize={8} color="accent.500" mb={4} />
    <Heading as="h3" size="md" mb={4}>{title}</Heading>
    <Box textAlign="left">
        {items.map((item, index) => (
        <Flex key={index} align="center" mb={2}>
            <Box w={2} h={2} bg="accent.500" borderRadius="full" mr={2} />
            <Text>{item}</Text>
        </Flex>
        ))}
    </Box>
</Box>
);

export default SkillCard;
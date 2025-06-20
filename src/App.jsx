import React, { useState } from 'react';
import { ChakraProvider, extendTheme, Box, Flex, Heading, Text, Grid, Button, Icon, Input, Textarea, useToast } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaCode, FaServer } from 'react-icons/fa';


import Navbar from './components/Navbar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import Footer from './components/Footer';


const theme = extendTheme({
  colors: {
    brand: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    accent: {
      500: '#8b5cf6',
    }
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Open Sans', sans-serif",
  },
});


function App() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Mensaje enviado",
          description: "Tu mensaje ha sido enviado correctamente.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      setFormData({name: '', email: '', message: ''});
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al enviar tu mensaje.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.50" minH="100vh">
        <Navbar />
        

        <Box 
          bgGradient="linear(to-r, brand.800, brand.900)" 
          color="white" 
          py={20}
          position="relative"
          overflow="hidden"
        >
          <Box maxW="7xl" mx="auto" px={4} position="relative" zIndex={1}>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} alignItems="center">
              <Box>
                <Text color="accent.500" fontWeight="bold" mb={2}>Hola, soy</Text>
                <Heading as="h1" size="2xl" mb={4} lineHeight="1.2">
                  Desarrollador Full Stack Junior <Box as="span" color="accent.500">.NET</Box>
                </Heading>
                <Text fontSize="lg" mb={6}>
                  Creo soluciones robustas y escalables con C#, ASP.NET Core y tecnologías modernas.
                </Text>
                <Button 
                  as="a" 
                  href="#contact" 
                  colorScheme="accent" 
                  size="lg" 
                  mr={4}
                >
                  Contactar
                </Button>
                <Button 
                  as="a" 
                  href="#projects" 
                  variant="outline" 
                  color="white"
                  _hover={{ bg: 'rgba(255,255,255,0.1)' }}
                  size="lg"
                >
                  Ver proyectos
                </Button>
              </Box>
              <Flex justify="center">
                <Box 
                  w="300px" 
                  h="300px" 
                  borderRadius="full" 
                  bg="brand.700" 
                  border="8px solid"
                  borderColor="accent.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden"
                >
                  <Text fontSize="4xl" fontWeight="bold" color="accent.500">
                    .NET
                  </Text>
                </Box>
              </Flex>
            </Grid>
          </Box>
          <Box 
            position="absolute" 
            top="0" 
            right="0" 
            w="40%" 
            h="100%" 
            bg="brand.700" 
            opacity="0.1" 
            clipPath="polygon(100% 0, 100% 100%, 0 0)"
          />
        </Box>
        

        <Section id="about" title="Sobre mí">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} alignItems="center">
            <Box>
              <Heading as="h3" size="lg" mb={4}>¡Hola! Soy Brandon Vega</Heading>
              <Text mb={4}>
                Desarrollador inicial en el ámbito de la programación, con un enfoque en el desarrollo de aplicaciones web utilizando
                tecnologías .NET. Me apasiona crear soluciones eficientes y escalables que resuelvan problemas reales.
              </Text>
              <Text mb={4}>
                Mi enfoque combina las mejores prácticas de desarrollo con las tecnologías más modernas para ofrecer 
                productos de alta calidad que satisfacen las necesidades del negocio.
              </Text>
              <Text mb={4}>
                Cuando no estoy programando, disfruto contribuir a proyectos open source, aprender nuevas tecnologías 
                y compartir conocimientos con la comunidad de desarrolladores.
              </Text>
              <Flex mt={8}>
                <Button 
                  as="a" 
                  href="https://github.com/Brandonclmn1415?tab=repositories" 
                  target="_blank" 
                  leftIcon={<FaGithub />} 
                  mr={3}
                  variant="outline"
                  color={"black"}
                >
                  GitHub
                </Button>
                <Button 
                  as="a" 
                  href="https://linkedin.com/in/brandon-steven-vega-salinas-243603269/" 
                  target="_blank" 
                  leftIcon={<FaLinkedin />} 
                  colorScheme="brand"
                >
                  LinkedIn
                </Button>
              </Flex>
            </Box>
            <Box 
              bg="brand.50" 
              borderRadius="lg" 
              p={8} 
              borderLeft="4px solid" 
              borderColor="accent.500"
            >
              <Heading as="h3" size="lg" mb={6} color="brand.800">Experiencia</Heading>
              <Box mb={6}>
                <Flex justify="space-between">
                  <Text fontWeight="bold">Desarrollo de proyecto</Text>
                  <Text color="brand.600">2025 - Presente</Text>
                </Flex>
                <Text color="brand.700">Sistema de inventario</Text>
                <Text mt={2}>Desarrolle un sistema de gestión de inventario utilizando Windows Forms y SQL Server.</Text>
              </Box>
              <Box>
                <Flex justify="space-between">
                  <Text fontWeight="bold">Desarrollo de APIS</Text>
                  <Text color="brand.600">2025 - presente</Text>
                </Flex>
                <Text color="brand.700">Desarrollo de sistema de notas</Text>
                <Text mt={2}>Desarrolle un sistema de notas utilizando ASP.NET Core y Angular. 
                  Utilizando Apis con Entity Framework.</Text>
              </Box>
              <Box>
                <Flex justify="space-between" mt={6}>
                  <Text fontWeight="bold">Desarrollo de aplicaciones web</Text>
                  <Text color="brand.600">2025 - presente</Text>
                </Flex>
                <Text color="brand.700">Desarrollo de pagina FrontEnd de ventas para tienda en línea</Text>
                <Text mt={2}>Desarrolle una página FrontEnd de ventas utilizando React y Chakra UI.</Text>
              </Box>
            </Box>
          </Grid>
        </Section>
        

        <Section id="projects" title="Proyectos" bg="brand.50">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap={8}>
            <ProjectCard 
              title="Sistema de almacenamiento"
              description="Aplicación de gestión de inventario con funcionalidades de seguimiento y reportes." 
              technologies={['C#', 'Guna UI', 'SQL Server', 'Windows Forms']}
            />
            <ProjectCard 
              title="API de almacenamiento de notas"
              description="API RESTful para gestión de notas con autenticación y autorización." 
              technologies={['C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'Swagger']}
            />
            <ProjectCard 
              title="Plataforma ventas en línea frontend" 
              description="Aplicación web para ventas en línea con carrito de compras y gestión de productos."
              technologies={['C#', 'React', 'Chakra UI', 'Axios']}
            />
          </Grid>
          <Flex justify="center" mt={10}>
            <Button 
              as="a" 
              href="https://github.com/Brandonclmn1415?tab=repositories" 
              target="_blank" 
              colorScheme="accent" 
              leftIcon={<FaGithub />}
              size="lg"
            >
              Ver más proyectos en GitHub
            </Button>
          </Flex>
        </Section>
        

        <Section id="skills" title="Habilidades">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap={8}>
            <SkillCard 
              icon={FaCode}
              title="Frontend"
              items={[
                'JavaScript/TypeScript',
                'React',
                'HTML5/CSS3',
                'Chakra UI',
                'Bootstrap',
                'Responsive Design'
              ]}
            />
            <SkillCard 
              icon={FaServer}
              title="Backend"
              items={[
                'C# / .NET Core',
                'ASP.NET MVC & Web API',
                'Entity Framework Core',
                'SQL Server / MySQL',
                'Node.js',
                'API RESTful'
              ]}
            />
            <SkillCard 
              icon={FaCode}
              title="Otras Tecnologías"
              items={[
                'Azure Cloud Services',
                'Git & GitHub',
                'CI/CD Pipelines',
                'Pruebas Unitarias (xUnit)',
                'Diseño de APIs REST',
                'Patrones de Diseño'
              ]}
            />
          </Grid>
        </Section>
        

        <Section id="cv" title="Mi CV" bg="brand.50">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} alignItems="center">
            <Box>
              <Heading as="h3" size="lg" mb={4}>Descarga mi currículum</Heading>
              <Text mb={6}>
                Si estás interesado en conocer más sobre mis trabajos y desarrollo profesional,
                puedes descargar mi currículum en formato PDF. Aquí encontrarás detalles sobre mi.
              </Text>
              <Button 
                as="a" 
                href="./Archivos/CV_Brandon_Steven_Vega_Salinas.pdf"
                target="_blank"
                download 
                colorScheme="accent" 
                size="lg" 
                leftIcon={<FaFilePdf />}
              >
                Descargar CV
              </Button>
            </Box>
            <Box 
              bg="brand.800" 
              color="white" 
              borderRadius="lg" 
              p={8}
              textAlign="center"
              boxShadow="xl"
            >
              <Text fontSize="4xl" fontWeight="bold" mb={2}>-1</Text>
              <Text fontSize="xl" mb={6}>Año en el desarrollo</Text>
            
              <Text fontSize="4xl" fontWeight="bold" mb={2}>4</Text>
              <Text fontSize="xl" mb={6}>Proyectos completados</Text>
              
              <Text fontSize="4xl" fontWeight="bold" mb={2}>10+</Text>
              <Text fontSize="xl">Tecnologías dominadas</Text>
            </Box>
          </Grid>
        </Section>
        

        <Section id="contact" title="Contacto">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} alignItems="center">
            <Box>
              <Heading as="h3" size="lg" mb={4}>¡Hablemos!</Heading>
              <Text mb={6}>
                Si tienes un proyecto en mente, una oportunidad laboral o simplemente quieres contactarme, 
                no dudes en enviarme un mensaje.
              </Text>
              <Box mb={6}>
                <Flex align="center" mb={3}>
                  <Icon as={FaEnvelope} color="accent.500" mr={3} />
                  <Text fontSize="lg">brrandonlol1415@gmail.com</Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FaLinkedin} color="accent.500" mr={3} />
                  <Text fontSize="lg">linkedin.com/in/brandon-steven-vega-salinas-243603269/</Text>
                </Flex>
              </Box>
              <Flex>
                <Button 
                  as="a" 
                  href="https://github.com/Brandonclmn1415?tab=repositories" 
                  target="_blank" 
                  mr={3}
                  variant="outline"
                  leftIcon={<FaGithub />}
                >
                  GitHub
                </Button>
                <Button 
                  as="a" 
                  href="https://linkedin.com/in/brandon-steven-vega-salinas-243603269/" 
                  target="_blank" 
                  colorScheme="accent"
                  leftIcon={<FaLinkedin />}
                >
                  LinkedIn
                </Button>
              </Flex>
            </Box>
            <Box 
              bg="brand.50" 
              borderRadius="lg" 
              p={8} 
              boxShadow="md"
            >
              <form onSubmit={handleSubmit}>
                <Grid templateColumns="1fr" gap={4}>
                  <Box>
                    <Text mb={2} fontWeight="medium">Correo</Text>
                    <Box as="input" type="email" name="email" value={formData.email} onChange={handleInputChange} w="100%" p={3} borderRadius="md" border="1px solid" borderColor="gray.300" />
                  </Box>
                  <Box>
                    <Text mb={2} fontWeight="medium">Asunto</Text>
                    <Box as="input" type="text" name="subject" value={formData.subject} onChange={handleInputChange} w="100%" p={3} borderRadius="md" border="1px solid" borderColor="gray.300" />
                  </Box>
                  <Box>
                    <Text mb={2} fontWeight="medium">Mensaje</Text>
                    <Box as="textarea" name="message" value={formData.message} onChange={handleInputChange} w="100%" p={3} borderRadius="md" border="1px solid" borderColor="gray.300" rows={4} />
                  </Box>
                  <Button type="submit" colorScheme="accent" mt={4} size="lg" isLoading={isSubmitting}>Enviar mensaje</Button>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Section>
        
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
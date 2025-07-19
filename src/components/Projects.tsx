"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Button,
  Icon,
  Link,
  Image,
} from "@chakra-ui/react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const projects = [
  {
    title: "E-Commerce Full Stack",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos , panel de administración, uso y proovedor de API's externas.",
    technologies: ["React","TypeScript","Node.js", "Next", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/ValenSecundaria/Tienda-River",
    liveUrl: "https://proyecto-2-gemetro-didier-14py.vercel.app/",
    image: "river-logo.png",
  },
  {
    title: "Sistema de pedidos basica",
    description:
      "Aplicación web para toma de pedidos en una tienda de comida y tareas con funcionalidades de dichos pedidos.",
    technologies: ["Node.js", "TypeScript", "Express"],
    githubUrl: "https://github.com/ValenSecundaria/BurgerXplosion",
    liveUrl: "https://burgerxplosion-1.onrender.com",
    image: "/icon.ico",
  },
  {
    title: "Sistema de manejo de ventas, control de stock y pedidos",
    description:
      "Sitio web construido de forma particular para un cliente y hecho con Next.js y Chakra UI.",
    technologies: ["Next.js", "Chakra UI", "TypeScript", "React"],
    githubUrl: "https://sistemaejecventas.vercel.app/",
  }
]

export default function Projects() {
  return (
    <Box id="projects" py={20} bg="gray.50">
      <Container maxW="1200px">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={16}
        >
          <Heading size="xl" color="gray.800" mb={4}>
            Proyectos Personales
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
            Una selección de proyectos que demuestran mis habilidades técnicas y creatividad en el desarrollo de
            software.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Box
                bg="white"
                borderRadius="xl"
                overflow="hidden"
                shadow="md"
                _hover={{ shadow: "xl" }}
                transition="all 0.3s"
                h="100%"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />

                <VStack p={6} align="start" spacing={4} h="calc(100% - 200px)">
                  <Heading size="md" color="gray.800">
                    {project.title}
                  </Heading>

                  <Text color="gray.600" fontSize="sm" flex="1">
                    {project.description}
                  </Text>

                  <HStack wrap="wrap" spacing={2}>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} colorScheme="brand" variant="subtle" fontSize="xs">
                        {tech}
                      </Badge>
                    ))}
                  </HStack>

                  <HStack spacing={3} w="100%">
                    <Link href={project.githubUrl} isExternal flex="1">
                      <Button size="sm" variant="outline" leftIcon={<Icon as={FaGithub} />} w="100%">
                        Código
                      </Button>
                    </Link>
                    {project.liveUrl && (
                      <Link href={project.liveUrl} isExternal flex="1">
                        <Button size="sm" colorScheme="brand" leftIcon={<Icon as={FaExternalLinkAlt} />} w="100%">
                          Demo
                        </Button>
                      </Link>
                    )}
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

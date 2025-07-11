"use client"

import { Box, Container, Flex, Heading, Text, Avatar, VStack, HStack, Button, Icon, Link } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa"
import { motion } from "framer-motion"

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

export default function Header() {
  const handleDownloadCV = () => {
    // Aquí puedes agregar la lógica para descargar el CV
    alert("Funcionalidad de descarga de CV - Agregar archivo PDF")
  }

  return (
    <Box
      id="header"
      minH="100vh"
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      color="white"
      pt="80px"
      position="relative"
      overflow="hidden"
    >
      {/* Elementos decorativos de fondo */}
      <Box
        position="absolute"
        top="10%"
        right="10%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        filter="blur(40px)"
      />
      <Box
        position="absolute"
        bottom="20%"
        left="5%"
        width="200px"
        height="200px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.05)"
        filter="blur(30px)"
      />

      <Container maxW="1200px" h="calc(100vh - 80px)">
        <MotionFlex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="center"
          h="100%"
          gap={12}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Foto de perfil */}
          <MotionBox initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Avatar
              size="2xl"
              src="/placeholder.svg?height=200&width=200"
              border="4px solid rgba(255, 255, 255, 0.3)"
              shadow="2xl"
              width={{ base: "150px", md: "200px" }}
              height={{ base: "150px", md: "200px" }}
            />
          </MotionBox>

          {/* Contenido principal */}
          <VStack spacing={6} align={{ base: "center", lg: "start" }} flex="1">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Heading size="2xl" textAlign={{ base: "center", lg: "left" }} mb={2}>
                ¡Hola! Soy [Tu Nombre]
              </Heading>
              <Text fontSize="xl" color="whiteAlpha.900" textAlign={{ base: "center", lg: "left" }}>
                Desarrollador Full Stack & Ingeniero de Software
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Text
                fontSize="lg"
                maxW="600px"
                lineHeight="1.8"
                textAlign={{ base: "center", lg: "left" }}
                color="whiteAlpha.800"
              >
                Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras. Me especializo en
                desarrollo web full-stack con React, Node.js y bases de datos modernas. Busco oportunidades para aplicar
                mis conocimientos en proyectos desafiantes y seguir creciendo profesionalmente.
              </Text>
            </MotionBox>

            {/* Botones de acción */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "start" }}>
                <Button
                  size="lg"
                  bg="white"
                  color="brand.600"
                  _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
                  leftIcon={<Icon as={FaDownload} />}
                  onClick={handleDownloadCV}
                >
                  Descargar CV
                </Button>
                <Link href="https://github.com/tu-usuario" isExternal>
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="white"
                    color="white"
                    _hover={{ bg: "whiteAlpha.200", transform: "translateY(-2px)" }}
                    leftIcon={<Icon as={FaGithub} />}
                  >
                    GitHub
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/tu-perfil" isExternal>
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="white"
                    color="white"
                    _hover={{ bg: "whiteAlpha.200", transform: "translateY(-2px)" }}
                    leftIcon={<Icon as={FaLinkedin} />}
                  >
                    LinkedIn
                  </Button>
                </Link>
              </HStack>
            </MotionBox>
          </VStack>
        </MotionFlex>
      </Container>
    </Box>
  )
}

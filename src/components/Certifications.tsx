"use client"

import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Badge, Icon, Link } from "@chakra-ui/react"
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const certifications = [
  {
    title: "Computación Cuántica Fundamentals",
    issuer: "IBM Quantum Network",
    date: "2025",
    description:
      "Certificación en fundamentos de computación cuántica, algoritmos cuánticos y mas.",
    credentialUrl: "/certificadoValenGemetro.pdf",
    skills: ["Qbits", "Algoritmos Cuánticos"],
  } 
]

export default function Certifications() {
  return (
    <Box id="certifications" py={20} bg="white">
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
            Certificaciones
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
            Certificaciones profesionales que validan mis conocimientos y habilidades en diferentes tecnologías y
            metodologías.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {certifications.map((cert, index) => (
            <MotionBox
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Box
                bg="gray.50"
                borderRadius="xl"
                p={6}
                border="1px solid"
                borderColor="gray.200"
                _hover={{
                  shadow: "lg",
                  borderColor: "brand.300",
                  bg: "brand.50",
                }}
                transition="all 0.3s"
                h="100%"
              >
                <VStack align="start" spacing={4} h="100%">
                  <HStack spacing={3} w="100%">
                    <Icon as={FaCertificate} color="brand.500" boxSize={6} />
                    <VStack align="start" spacing={1} flex="1">
                      <Heading size="sm" color="gray.800" lineHeight="1.2">
                        {cert.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600" fontWeight="medium">
                        {cert.issuer}
                      </Text>
                    </VStack>
                  </HStack>

                  <HStack spacing={2}>
                    <Icon as={FaCalendarAlt} color="gray.500" boxSize={4} />
                    <Text fontSize="sm" color="gray.600">
                      {cert.date}
                    </Text>
                  </HStack>

                  <Text fontSize="sm" color="gray.700" flex="1">
                    {cert.description}
                  </Text>

                  <HStack wrap="wrap" spacing={2}>
                    {cert.skills.map((skill) => (
                      <Badge key={skill} colorScheme="brand" variant="subtle" fontSize="xs">
                        {skill}
                      </Badge>
                    ))}
                  </HStack>

                  <Link href={cert.credentialUrl} isExternal w="100%">
                    <HStack
                      spacing={2}
                      color="brand.600"
                      _hover={{ color: "brand.700" }}
                      fontSize="sm"
                      fontWeight="medium"
                    >
                      <Text>Ver Credencial</Text>
                      <Icon as={FaExternalLinkAlt} boxSize={3} />
                    </HStack>
                  </Link>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

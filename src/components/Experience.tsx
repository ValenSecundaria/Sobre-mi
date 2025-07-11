"use client"

import { Box, Container, Heading, Text, VStack, HStack, Badge, Icon, Divider } from "@chakra-ui/react"
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import type { IconType } from "react-icons"

const MotionBox = motion(Box)


interface WorkExperience {
  title: string
  company: string
  location: string
  period: string
  type: string
  description: string
  technologies: string[]
}

interface Education {
  degree: string
  institution: string
  location: string
  period: string
  type: string
  description: string
  achievements: string[]
}

const workExperience: WorkExperience[] = [
  //{
  //  title: "Desarrollador Junior",
  //  company: "StartUp Innovadora",
  //  location: "Ciudad, País",
  //  period: "2021 - 2022",
  //  type: "Tiempo Completo",
  //    "Desarrollo de funcionalidades para plataforma web. Participación en code reviews y implementación de mejores prácticas de desarrollo.",
  //  technologies: ["JavaScript", "HTML5", "CSS3", "Git"],
  //},
]

const education: Education[] = [
  {
    degree: "Estudiante en Sistemas Computacionales",
    institution: "Universidad Tecnológica",
    location: "Bahia Blanca, Argentina",
    period: "2022 - 2025",
    type: "Ingenieria",
    description:
      "Especialización en Ingenieria de software, sistemas, bases de datos y arquitectura de sistemas.",
    achievements: ["Actualmente 4to año de Ingenieria, con carrera al día!"],
  },
  {
    degree: "Bachiller de Secundaria",
    institution: "Escuela De Educación Secundaria N°2 “Fermin González Ancalao”, Punta Alta. ",
    location: "Punta Alta, Argentina",
    period: "2016 - 2021",
    type: "Estudiante",
    description:
      "Estudiante de secundaria basica, con especialización en la rama de ciencias naturales",
    achievements: ["Ninguno"],
  },
  {
    degree: "Escuela de educacion Primaria",
    institution: "Escuela De Educación Primaria N°23 “Dr. Ricardo Gutiérrez”, Punta Alta.",
    location: "Punta Alta, Argentina",
    period: "2010 - 2015",
    type: "Estudiante",
    description:
      "Estudiante de primaria basica",
    achievements: ["Ninguno"],
  },
]

interface ExperienceItemProps {
  item: WorkExperience | Education
  icon: IconType
  index: number
  isWork: boolean
}

function ExperienceItem({ item, icon, index, isWork }: ExperienceItemProps) {
  const workItem = item as WorkExperience
  const eduItem = item as Education

  return (
    <MotionBox
      initial={{
        opacity: 0,
        x: -100,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      whileHover={{
        scale: 1.02,
        x: 10,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      viewport={{ once: true }}
    >
      <HStack align="start" spacing={6}>
        <MotionBox
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{
            scale: 1,
            rotate: 0,
          }}
          whileHover={{
            scale: 1.2,
            rotate: 360,
          }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 200,
          }}
          viewport={{ once: true }}
        >
          <Box
            p={3}
            bg="brand.500"
            borderRadius="full"
            color="white"
            flexShrink={0}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "-2px",
              left: "-2px",
              right: "-2px",
              bottom: "-2px",
              borderRadius: "full",
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              zIndex: -1,
            }}
          >
            <Icon as={icon} boxSize={5} />
          </Box>
        </MotionBox>

        <MotionBox
          flex="1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <VStack align="start" spacing={3}>
            <MotionBox whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <VStack align="start" spacing={1}>
                <Heading size="md" color="gray.800">
                  {isWork ? workItem.title : eduItem.degree}
                </Heading>
                <MotionBox
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <Text fontWeight="semibold" color="brand.600">
                    {isWork ? workItem.company : eduItem.institution}
                  </Text>
                </MotionBox>
                <HStack spacing={4} fontSize="sm" color="gray.600">
                  <MotionBox whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                    <HStack spacing={1}>
                      <Icon as={FaCalendarAlt} boxSize={3} />
                      <Text>{item.period}</Text>
                    </HStack>
                  </MotionBox>
                  <MotionBox whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                    <HStack spacing={1}>
                      <Icon as={FaMapMarkerAlt} boxSize={3} />
                      <Text>{item.location}</Text>
                    </HStack>
                  </MotionBox>
                  <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Badge colorScheme="gray" variant="subtle">
                      {item.type}
                    </Badge>
                  </MotionBox>
                </HStack>
              </VStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Text color="gray.700" lineHeight="1.6">
                {item.description}
              </Text>
            </MotionBox>

            {isWork && workItem.technologies && (
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.9, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <HStack wrap="wrap" spacing={2}>
                  {workItem.technologies.map((tech: string, techIndex: number) => (
                    <MotionBox
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 1.1 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      viewport={{ once: true }}
                    >
                      <Badge colorScheme="brand" variant="subtle">
                        {tech}
                      </Badge>
                    </MotionBox>
                  ))}
                </HStack>
              </MotionBox>
            )}

            {!isWork && eduItem.achievements && (
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.9, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <VStack align="start" spacing={1}>
                  <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                    Logros destacados:
                  </Text>
                  {eduItem.achievements.map((achievement: string, achIndex: number) => (
                    <MotionBox
                      key={achIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 1.1 + achIndex * 0.1 }}
                      whileHover={{ x: 5 }}
                      viewport={{ once: true }}
                    >
                      <Text fontSize="sm" color="gray.600">
                        • {achievement}
                      </Text>
                    </MotionBox>
                  ))}
                </VStack>
              </MotionBox>
            )}
          </VStack>
        </MotionBox>
      </HStack>
    </MotionBox>
  )
}

export default function Experience() {
  return (
    <Box id="experience" py={20} bg="gray.50" position="relative" overflow="hidden">
      {/* Elementos decorativos animados */}
      <MotionBox
        position="absolute"
        top="15%"
        right="8%"
        width="100px"
        height="100px"
        borderRadius="full"
        bg="linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(156, 39, 176, 0.1))"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <Container maxW="1200px">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={16}
        >
          <MotionBox
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heading size="xl" color="gray.800" mb={4}>
              Experiencia y Educación
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
              Mi trayectoria profesional y académica que ha moldeado mis habilidades y conocimientos en el desarrollo de
              software.
            </Text>
          </MotionBox>
        </MotionBox>

        <VStack spacing={16}>
          {/* Experiencia Laboral */}
          <Box w="100%">
            <MotionBox
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              mb={8}
            >
              <HStack spacing={3} mb={8}>
                <MotionBox whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                  <Icon as={FaBriefcase} color="brand.500" boxSize={6} />
                </MotionBox>
                <Heading size="lg" color="gray.800">
                  Experiencia Laboral
                </Heading>
              </HStack>
            </MotionBox>

            <VStack spacing={8} align="stretch">
              {workExperience.map((job, index) => (
                <Box key={job.title}>
                  <ExperienceItem item={job} icon={FaBriefcase} index={index} isWork={true} />
                  {index < workExperience.length - 1 && (
                    <MotionBox
                      ml={6}
                      mt={6}
                      initial={{ scaleY: 0 }}
                      whileInView={{
                        scaleY: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: true }}
                      style={{ originY: 0 }}
                    >
                      <Divider orientation="vertical" h="20px" borderColor="brand.300" borderWidth="2px" />
                    </MotionBox>
                  )}
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Educación */}
          <Box w="100%">
            <MotionBox
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              mb={8}
            >
              <HStack spacing={3} mb={8}>
                <MotionBox whileHover={{ rotate: -360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                  <Icon as={FaGraduationCap} color="brand.500" boxSize={6} />
                </MotionBox>
                <Heading size="lg" color="gray.800">
                  Educación
                </Heading>
              </HStack>
            </MotionBox>

            <VStack spacing={8} align="stretch">
              {education.map((edu, index) => (
                <Box key={edu.degree}>
                  <ExperienceItem item={edu} icon={FaGraduationCap} index={index} isWork={false} />
                  {index < education.length - 1 && (
                    <MotionBox
                      ml={6}
                      mt={6}
                      initial={{ scaleY: 0 }}
                      whileInView={{
                        scaleY: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: true }}
                      style={{ originY: 0 }}
                    >
                      <Divider orientation="vertical" h="20px" borderColor="brand.300" borderWidth="2px" />
                    </MotionBox>
                  )}
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

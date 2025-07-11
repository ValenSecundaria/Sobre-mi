"use client"

import { Box, Container, Heading, Text, VStack, Icon, HStack, Badge } from "@chakra-ui/react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJava,
  FaDatabase,
  FaCode,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiAngular,
  SiCplusplus,
} from "react-icons/si"
import { motion } from "framer-motion"
import type { IconType } from "react-icons"

const MotionBox = motion(Box)
const MotionDiv = motion.div

interface TechItem {
  name: string
  icon: IconType | null
  color: string
  gradient?: string
  level?: string
}

interface TechCategory {
  category: string
  items: TechItem[]
  icon: IconType
  gradient: string
  description: string
}

const technologies: TechCategory[] = [
  {
    category: "Lenguajes de Programación",
    icon: FaCode,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "Lenguajes que domino para crear soluciones robustas",
    items: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
        gradient: "linear-gradient(135deg, #E34F26 0%, #F16529 100%)",
        level: "Avanzado",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
        gradient: "linear-gradient(135deg, #1572B6 0%, #33A9DC 100%)",
        level: "Avanzado",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
        gradient: "linear-gradient(135deg, #F7DF1E 0%, #FFEB3B 100%)",
        level: "Avanzado",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        gradient: "linear-gradient(135deg, #3178C6 0%, #4A90E2 100%)",
        level: "Avanzado",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#007396",
        gradient: "linear-gradient(135deg, #007396 0%, #00A4CC 100%)",
        level: "Intermedio",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
        gradient: "linear-gradient(135deg, #3776AB 0%, #4B8BBE 100%)",
        level: "Intermedio",
      },
      {
        name: "C",
        icon: SiCplusplus,
        color: "#A8B9CC",
        gradient: "linear-gradient(135deg, #A8B9CC 0%, #C0C0C0 100%)",
        level: "Básico",
      },
      {
        name: "Pascal",
        icon: null,
        color: "#6B73DB",
        gradient: "linear-gradient(135deg, #6B73DB 0%, #8A2BE2 100%)",
        level: "Intermedio",
      },
      {
        name: "Prolog",
        icon: null,
        color: "#74283C",
        gradient: "linear-gradient(135deg, #74283C 0%, #A0522D 100%)",
        level: "Intermedio",
      },
    ],
  },
  {
    category: "Frameworks & Librerías",
    icon: FaTools,
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    description: "Herramientas modernas para desarrollo eficiente",
    items: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        gradient: "linear-gradient(135deg, #61DAFB 0%, #21D4FD 100%)",
        level: "Avanzado",
      },
      {
        name: "Angular",
        icon: SiAngular,
        color: "#DD0031",
        gradient: "linear-gradient(135deg, #DD0031 0%, #C3002F 100%)",
        level: "Intermedio",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
        gradient: "linear-gradient(135deg, #000000 0%, #434343 100%)",
        level: "Avanzado",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
        gradient: "linear-gradient(135deg, #339933 0%, #68BB59 100%)",
        level: "Avanzado",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "#000000",
        gradient: "linear-gradient(135deg, #000000 0%, #404040 100%)",
        level: "Intermedio",
      },
    ],
  },
  {
    category: "Bases de Datos & ORM",
    icon: FaDatabase,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    description: "Gestión y modelado de datos eficiente",
    items: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        gradient: "linear-gradient(135deg, #4479A1 0%, #00758F 100%)",
        level: "Avanzado",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
        gradient: "linear-gradient(135deg, #336791 0%, #4A90E2 100%)",
        level: "Avanzado",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "#2D3748",
        gradient: "linear-gradient(135deg, #2D3748 0%, #4A5568 100%)",
        level: "Intermedio",
      },
    ],
  },
  {
    category: "Control de Versiones & DevOps",
    icon: FaGitAlt,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    description: "Herramientas para colaboración y despliegue",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
        gradient: "linear-gradient(135deg, #F05032 0%, #FF6B35 100%)",
        level: "Avanzado",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
        gradient: "linear-gradient(135deg, #181717 0%, #333333 100%)",
        level: "Avanzado",
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
        gradient: "linear-gradient(135deg, #2496ED 0%, #0DB7ED 100%)",
        level: "Básico",
      },
    ],
  },
  {
    category: "Modelado & Diagramas",
    icon: FaProjectDiagram,
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    description: "Diseño y arquitectura de sistemas",
    items: [
      {
        name: "Diagramas ER",
        icon: null,
        color: "#4A90E2",
        gradient: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
        level: "Avanzado",
      },
      {
        name: "Diagramas de Clases",
        icon: null,
        color: "#7B68EE",
        gradient: "linear-gradient(135deg, #7B68EE 0%, #9370DB 100%)",
        level: "Avanzado",
      },
      {
        name: "Diagramas de Secuencia",
        icon: null,
        color: "#20B2AA",
        gradient: "linear-gradient(135deg, #20B2AA 0%, #48CAE4 100%)",
        level: "Intermedio",
      },
      {
        name: "Casos de Uso",
        icon: null,
        color: "#FF6347",
        gradient: "linear-gradient(135deg, #FF6347 0%, #FF7F50 100%)",
        level: "Intermedio",
      },
      {
        name: "Redes de Petri",
        icon: null,
        color: "#32CD32",
        gradient: "linear-gradient(135deg, #32CD32 0%, #7CB342 100%)",
        level: "Básico",
      },
    ],
  },
]

// Función para obtener el color del badge según el nivel
const getLevelColor = (level: string) => {
  switch (level) {
    case "Avanzado":
      return "green"
    case "Intermedio":
      return "blue"
    case "Básico":
      return "orange"
    default:
      return "gray"
  }
}

export default function Technologies() {
  return (
    <Box id="technologies" py={20} bg="gray.50" position="relative" overflow="hidden">
      {/* Elementos decorativos de fondo mejorados */}
      <MotionBox
        position="absolute"
        top="5%"
        right="10%"
        width="300px"
        height="300px"
        borderRadius="full"
        background="linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))"
        filter="blur(40px)"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <MotionBox
        position="absolute"
        bottom="10%"
        left="5%"
        width="250px"
        height="250px"
        borderRadius="full"
        background="linear-gradient(135deg, rgba(17, 153, 142, 0.1), rgba(56, 239, 125, 0.1))"
        filter="blur(30px)"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <Container maxW="1400px">
        {/* Header mejorado */}
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={20}
        >
          <MotionBox
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heading size="2xl" color="gray.800" mb={6} fontWeight="bold">
              Stack Tecnológico
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Text fontSize="xl" color="gray.600" maxW="800px" mx="auto" lineHeight="1.8">
              Herramientas y tecnologías que utilizo para crear experiencias digitales excepcionales y soluciones
              robustas.
            </Text>
          </MotionBox>
        </MotionBox>

        {/* Categorías de tecnologías */}
        <VStack spacing={16}>
          {technologies.map((category, categoryIndex) => (
            <MotionBox
              key={category.category}
              w="100%"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              {/* Header de categoría */}
              <MotionBox
                mb={8}
                p={6}
                borderRadius="2xl"
                background={category.gradient}
                color="white"
                position="relative"
                overflow="hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Efecto de brillo en el header */}
                <MotionBox
                  position="absolute"
                  top="0"
                  left="-100%"
                  width="100%"
                  height="100%"
                  background="linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)"
                  animate={{ left: ["100%", "-100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <HStack spacing={4} position="relative" zIndex={1}>
                  <MotionBox
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    p={3}
                    bg="rgba(255,255,255,0.2)"
                    borderRadius="xl"
                    backdropFilter="blur(10px)"
                  >
                    <Icon as={category.icon} boxSize={8} />
                  </MotionBox>
                  <VStack align="start" spacing={1}>
                    <Heading size="lg" fontWeight="bold">
                      {category.category}
                    </Heading>
                    <Text fontSize="md" opacity={0.9}>
                      {category.description}
                    </Text>
                  </VStack>
                </HStack>
              </MotionBox>

              {/* Grid de tecnologías */}
              <MotionDiv
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.5rem",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {category.items.map((tech, index) => (
                  <MotionBox
                    key={tech.name}
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    viewport={{ once: true }}
                  >
                    <Box
                      p={6}
                      bg="rgba(255, 255, 255, 0.9)"
                      backdropFilter="blur(20px)"
                      borderRadius="2xl"
                      border="1px solid rgba(255, 255, 255, 0.2)"
                      boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
                      position="relative"
                      overflow="hidden"
                      _hover={{
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      }}
                      transition="all 0.3s ease"
                      minH="140px"
                    >
                      {/* Gradiente de fondo sutil */}
                      <MotionBox
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        background={tech.gradient || `linear-gradient(135deg, ${tech.color}15, ${tech.color}05)`}
                        opacity={0}
                        _groupHover={{ opacity: 1 }}
                      />

                      {/* Efecto de brillo en hover */}
                      <MotionBox
                        position="absolute"
                        top="-50%"
                        left="-50%"
                        width="200%"
                        height="200%"
                        background="linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      <VStack spacing={4} position="relative" zIndex={1} align="start">
                        <HStack spacing={4} w="100%">
                          {/* Icono con efecto mejorado */}
                          <MotionBox
                            whileHover={{
                              scale: 1.2,
                              rotate: [0, -5, 5, 0],
                            }}
                            transition={{
                              duration: 0.5,
                              type: "spring",
                              stiffness: 300,
                            }}
                          >
                            {tech.icon ? (
                              <Box
                                p={3}
                                borderRadius="xl"
                                background={tech.gradient || `linear-gradient(135deg, ${tech.color}, ${tech.color}CC)`}
                                color="white"
                                boxShadow={`0 4px 20px ${tech.color}40`}
                              >
                                <Icon as={tech.icon} boxSize={8} />
                              </Box>
                            ) : (
                              <MotionBox
                                w={14}
                                h={14}
                                borderRadius="xl"
                                background={tech.gradient || `linear-gradient(135deg, ${tech.color}, ${tech.color}CC)`}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                color="white"
                                fontWeight="bold"
                                fontSize="lg"
                                boxShadow={`0 4px 20px ${tech.color}40`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                {tech.name.charAt(0)}
                              </MotionBox>
                            )}
                          </MotionBox>

                          <VStack align="start" spacing={1} flex="1">
                            <Text fontSize="lg" fontWeight="bold" color="gray.800">
                              {tech.name}
                            </Text>
                            {tech.level && (
                              <Badge
                                colorScheme={getLevelColor(tech.level)}
                                variant="subtle"
                                fontSize="xs"
                                px={2}
                                py={1}
                                borderRadius="md"
                              >
                                {tech.level}
                              </Badge>
                            )}
                          </VStack>
                        </HStack>

                        {/* Barra de progreso visual */}
                        <Box w="100%" h="3px" bg="gray.200" borderRadius="full" overflow="hidden">
                          <MotionBox
                            h="100%"
                            background={tech.gradient || `linear-gradient(90deg, ${tech.color}, ${tech.color}CC)`}
                            borderRadius="full"
                            initial={{ width: "0%" }}
                            whileInView={{
                              width: tech.level === "Avanzado" ? "90%" : tech.level === "Intermedio" ? "70%" : "50%",
                            }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                          />
                        </Box>
                      </VStack>
                    </Box>
                  </MotionBox>
                ))}
              </MotionDiv>
            </MotionBox>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

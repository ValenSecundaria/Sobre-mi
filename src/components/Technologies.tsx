"use client"

import { Box, Container, Heading, Text, VStack, Icon } from "@chakra-ui/react"
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
} from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiExpress, SiMysql, SiPostgresql, SiPrisma } from "react-icons/si"
import { motion } from "framer-motion"
import type { IconType } from "react-icons"

const MotionBox = motion(Box)
const MotionDiv = motion.div

interface TechItem {
  name: string
  icon: IconType | null
  color: string
}

interface TechCategory {
  category: string
  items: TechItem[]
}

const technologies: TechCategory[] = [
  {
    category: "Lenguajes",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "C", icon: null, color: "#A8B9CC" },
      { name: "Pascal", icon: null, color: "#6B73DB" },
      { name: "Prolog", icon: null, color: "#74283C" },
    ],
  },
  {
    category: "Frameworks & Herramientas",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
    ],
  },
  {
    category: "Bases de Datos & ORM",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    category: "Control de Versiones & Despliegue",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
    ],
  },
  {
    category: "Diagramas & Modelado",
    items: [
      { name: "Diagramas ER", icon: null, color: "#4A90E2" },
      { name: "Diagramas de Clases", icon: null, color: "#7B68EE" },
      { name: "Diagramas de Secuencia", icon: null, color: "#20B2AA" },
      { name: "Casos de Uso", icon: null, color: "#FF6347" },
      { name: "Redes de Petri", icon: null, color: "#32CD32" },
    ],
  },
]

export default function Technologies() {
  return (
    <Box id="technologies" py={20} bg="white" position="relative" overflow="hidden">
      {/* Elementos decorativos de fondo animados */}
      <MotionBox
        position="absolute"
        top="10%"
        right="5%"
        width="200px"
        height="200px"
        borderRadius="full"
        bg="linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(156, 39, 176, 0.1))"
        animate={{
          scale: [1, 1.2, 1],
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
        bottom="20%"
        left="3%"
        width="150px"
        height="150px"
        borderRadius="full"
        bg="linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(255, 193, 7, 0.1))"
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
              Tecnologías y Herramientas
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
              Estas son las tecnologías y herramientas con las que trabajo para crear soluciones innovadoras y
              eficientes.
            </Text>
          </MotionBox>
        </MotionBox>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2, delayChildren: 0.3 }}
          viewport={{ once: true }}
        >
          <VStack spacing={12}>
            {technologies.map((category, categoryIndex) => (
              <MotionBox
                key={category.category}
                w="100%"
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: categoryIndex * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
              >
                <MotionBox whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Heading size="md" color="gray.700" mb={6} textAlign="center">
                    {category.category}
                  </Heading>
                </MotionBox>

                <MotionDiv
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
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
                        y: 50,
                        scale: 0.8,
                        rotateY: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateY: 0,
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -8,
                        rotateY: 5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                      }}
                      viewport={{ once: true }}
                      style={{ perspective: "1000px" }}
                    >
                      <VStack
                        p={6}
                        bg="gray.50"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.200"
                        _hover={{
                          borderColor: "brand.300",
                          bg: "brand.50",
                        }}
                        transition="all 0.3s"
                        spacing={3}
                        minH="120px"
                        justify="center"
                        position="relative"
                        overflow="hidden"
                      >
                        {/* Efecto de brillo en hover */}
                        <MotionBox
                          position="absolute"
                          top="-50%"
                          left="-50%"
                          width="200%"
                          height="200%"
                          bg="linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />

                        <MotionBox
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, -10, 10, 0],
                          }}
                          transition={{
                            duration: 0.5,
                            type: "spring",
                          }}
                        >
                          {tech.icon ? (
                            <Icon as={tech.icon} boxSize={8} color={tech.color} />
                          ) : (
                            <MotionBox
                              w={8}
                              h={8}
                              borderRadius="md"
                              bg={tech.color}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Text color="white" fontSize="xs" fontWeight="bold">
                                {tech.name.charAt(0)}
                              </Text>
                            </MotionBox>
                          )}
                        </MotionBox>

                        <MotionBox initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
                          <Text fontSize="sm" fontWeight="medium" color="gray.700" textAlign="center">
                            {tech.name}
                          </Text>
                        </MotionBox>
                      </VStack>
                    </MotionBox>
                  ))}
                </MotionDiv>
              </MotionBox>
            ))}
          </VStack>
        </MotionDiv>
      </Container>
    </Box>
  )
}

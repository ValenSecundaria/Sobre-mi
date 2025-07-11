"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  Link,
  useToast,
} from "@chakra-ui/react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState, type ChangeEvent, type FormEvent } from "react"
import type { IconType } from "react-icons"
import type { Variants } from "framer-motion"

const MotionBox = motion(Box)
const MotionSimpleGrid = motion(SimpleGrid)

interface FormData {
  name: string
  email: string
  message: string
}

interface ContactInfo {
  icon: IconType
  label: string
  value: string
  link: string | null
}

interface SocialLink {
  icon: IconType
  label: string
  url: string
  color: string
}

const formVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const fieldBaseVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  focus: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
}


const contactInfoVariants: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

const contactItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: (i as number) * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    },
  }),
  hover: {
    x: 10,
    scale: 1.05,
    transition: { duration: 0.3 },
  },
}

const socialVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: (i as number) * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.5 },
  },
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }))
      }

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsSubmitting(true)

      try {
            const subject = encodeURIComponent(`Contacto desde portafolio - ${formData.name}`)
            const body = encodeURIComponent(`
            Nombre: ${formData.name}
            Email: ${formData.email}

            Mensaje:
            ${formData.message}
            `)

        const mailtoLink = `mailto:gemetrovalentin@hotmail.com?subject=${subject}&body=${body}`
        window.location.href = mailtoLink

        toast({
          title: "Mensaje enviado",
          description: "Se abrirá tu cliente de correo para enviar el mensaje.",
          status: "success",
          duration: 5000,
          isClosable: true,
        })

        setFormData({ name: "", email: "", message: "" })
      } catch (error) {
        toast({
          title: "Error",
          description: "Hubo un problema al procesar tu mensaje.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
        console.error(error)
      } finally {
        setIsSubmitting(false)
      }
    }

    const contactInfo: ContactInfo[] = [
      {
        icon: FaEnvelope,
        label: "Email",
        value: "gemetrovalentin@hotmail.com",
        link: "mailto:gemetrovalentin@hotmail.com",
      },
      {
        icon: FaPhone,
        label: "Teléfono",
        value: "+54 2932 404925",
        link: "tel:+5492932404925", // formato sin espacios ni paréntesis para tel:
      },
      {
        icon: FaMapMarkerAlt,
        label: "Ubicación",
        value: "Argentina, Bahía Blanca, Provincia de Buenos Aires",
        link: null,
      },
    ] 

  const socialLinks: SocialLink[] = [
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/ValenSecundaria?tab=repositories",
      color: "#181717",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/valentin-gemetro-59808a332/",
      color: "#0A66C2",
    },
  
  ]

  return (
    <Box id="contact" py={20} bg="white" position="relative" overflow="hidden">
      {/* Elementos decorativos animados */}
      <MotionBox
        position="absolute"
        top="10%"
        right="5%"
        width="150px"
        height="150px"
        borderRadius="full"
        bg="linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(156, 39, 176, 0.1))"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <MotionBox
        position="absolute"
        bottom="15%"
        left="3%"
        width="120px"
        height="120px"
        borderRadius="full"
        bg="linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(255, 193, 7, 0.1))"
        animate={{
          y: [0, -30, 0],
          rotate: [360, 0],
          scale: [1.2, 0.8, 1.2],
        }}
        transition={{
          duration: 10,
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
              Contacto
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
              ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría escuchar de ti. ¡Hablemos!
            </Text>
          </MotionBox>
        </MotionBox>

        <MotionSimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
          {/* Información de contacto */}
          <MotionBox variants={contactInfoVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <VStack spacing={8} align="start">
              <Box>
                <MotionBox
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Heading size="lg" color="gray.800" mb={4}>
                    Información de Contacto
                  </Heading>
                </MotionBox>
                <MotionBox
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Text color="gray.600" mb={6}>
                    No dudes en contactarme a través de cualquiera de estos medios. Respondo rápidamente a todos los
                    mensajes.
                  </Text>
                </MotionBox>
              </Box>

              <VStack spacing={4} align="start" w="100%">
                {contactInfo.map((info, index) => (
                  <MotionBox
                    key={info.label}
                    custom={index}
                    variants={contactItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                  >
                    <HStack spacing={4}>
                      <MotionBox whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                        <Box p={3} bg="brand.50" borderRadius="lg" color="brand.600">
                          <Icon as={info.icon} boxSize={5} />
                        </Box>
                      </MotionBox>
                      <VStack align="start" spacing={0}>
                        <Text fontSize="sm" color="gray.500" fontWeight="medium">
                          {info.label}
                        </Text>
                        {info.link ? (
                          <Link href={info.link} color="gray.700" fontWeight="semibold" _hover={{ color: "brand.600" }}>
                            {info.value}
                          </Link>
                        ) : (
                          <Text color="gray.700" fontWeight="semibold">
                            {info.value}
                          </Text>
                        )}
                      </VStack>
                    </HStack>
                  </MotionBox>
                ))}
              </VStack>

              {/* Redes sociales */}
              <Box>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Text fontSize="lg" fontWeight="semibold" color="gray.800" mb={4}>
                    Sígueme en redes sociales
                  </Text>
                </MotionBox>
                <HStack spacing={4}>
                  {socialLinks.map((social, index) => (
                    <MotionBox
                      key={social.label}
                      custom={index}
                      variants={socialVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true }}
                    >
                      <Link href={social.url} isExternal>
                        <Box
                          p={3}
                          bg="gray.100"
                          borderRadius="lg"
                          _hover={{
                            bg: social.color,
                            color: "white",
                            transform: "translateY(-2px)",
                          }}
                          transition="all 0.3s"
                          cursor="pointer"
                        >
                          <Icon as={social.icon} boxSize={6} />
                        </Box>
                      </Link>
                    </MotionBox>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </MotionBox>

          {/* Formulario de contacto */}
          <MotionBox variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <MotionBox
              bg="gray.50"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              position="relative"
              overflow="hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Efecto de brillo en el formulario */}
              <MotionBox
                position="absolute"
                top="-50%"
                left="-50%"
                width="200%"
                height="200%"
                bg="linear-gradient(45deg, transparent, rgba(33, 150, 243, 0.1), transparent)"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              />

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Heading size="lg" color="gray.800" mb={6}>
                  Envíame un mensaje
                </Heading>
              </MotionBox>

              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <MotionBox
                    custom={0}
                    variants={fieldBaseVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileFocus="focus"
                    viewport={{ once: true }}
                    w="100%"
                  >
                    <FormControl isRequired>
                      <FormLabel color="gray.700">Nombre completo</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        bg="white"
                        borderColor="gray.300"
                        _hover={{ borderColor: "brand.400" }}
                        _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #2196f3" }}
                      />
                    </FormControl>
                  </MotionBox>

                  <MotionBox
                    custom={1}
                    variants={fieldBaseVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileFocus="focus"
                    viewport={{ once: true }}
                    w="100%"
                  >
                    <FormControl isRequired>
                      <FormLabel color="gray.700">Correo electrónico</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        bg="white"
                        borderColor="gray.300"
                        _hover={{ borderColor: "brand.400" }}
                        _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #2196f3" }}
                      />
                    </FormControl>
                  </MotionBox>

                  <MotionBox
                    custom={2}
                    variants={fieldBaseVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileFocus="focus"
                    viewport={{ once: true }}
                    w="100%"
                  >
                    <FormControl isRequired>
                      <FormLabel color="gray.700">Mensaje</FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Cuéntame sobre tu proyecto o idea..."
                        rows={6}
                        bg="white"
                        borderColor="gray.300"
                        _hover={{ borderColor: "brand.400" }}
                        _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #2196f3" }}
                        resize="vertical"
                      />
                    </FormControl>
                  </MotionBox>

                  <MotionBox
                    custom={3}
                    variants={fieldBaseVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    w="100%"
                  >
                    <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                      <Button
                        type="submit"
                        size="lg"
                        colorScheme="brand"
                        w="100%"
                        isLoading={isSubmitting}
                        loadingText="Enviando..."
                        leftIcon={<Icon as={FaPaperPlane} />}
                        _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
                        transition="all 0.2s"
                      >
                        Enviar Mensaje
                      </Button>
                    </MotionBox>
                  </MotionBox>
                </VStack>
              </form>
            </MotionBox>
          </MotionBox>
        </MotionSimpleGrid>

        {/* Footer */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          textAlign="center"
          mt={16}
          pt={8}
          borderTop="1px solid"
          borderColor="gray.200"
        >
          <MotionBox whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Text color="gray.600">© 2024 Valentin Gemetro. Todos los derechos reservados.</Text>
            <Text color="gray.500" fontSize="sm" mt={2}>
              Hecho con ❤️ usando React y Chakra UI
            </Text>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  )
}

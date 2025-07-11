"use client"

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const navItems = [
  { name: "Inicio", href: "#header" },
  { name: "Tecnologías", href: "#technologies" },
  { name: "Proyectos", href: "#projects" },
  { name: "Certificaciones", href: "#certifications" },
  { name: "Experiencia", href: "#experience" },
  { name: "Contacto", href: "#contact" },
]

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onClose()
  }

  return (
    <MotionBox
      position="fixed"
      top="0"
      width="100%"
      bg="rgba(255, 255, 255, 0.95)"
      backdropFilter="blur(10px)"
      zIndex="1000"
      borderBottom="1px solid"
      borderColor="gray.200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex maxW="1200px" mx="auto" px={4} py={4} justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold" color="brand.600">
          Mi Portafolio
        </Text>

        {/* Desktop Navigation */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              cursor="pointer"
              fontWeight="medium"
              color="gray.600"
              _hover={{ color: "brand.600", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              {item.name}
            </Link>
          ))}
        </HStack>

        {/* Mobile Navigation */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="Open menu"
          icon={<HamburgerIcon />}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navegación</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="start">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    cursor="pointer"
                    fontWeight="medium"
                    fontSize="lg"
                    color="gray.600"
                    _hover={{ color: "brand.600" }}
                  >
                    {item.name}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </MotionBox>
  )
}

"use client"

import { Box, Spinner, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

export default function LoadingScreen() {
  return (
    <MotionBox
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="9999"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={6}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Spinner size="xl" color="white" thickness="4px" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Text color="white" fontSize="xl" fontWeight="bold">
            Cargando Portafolio...
          </Text>
        </motion.div>
      </VStack>
    </MotionBox>
  )
}

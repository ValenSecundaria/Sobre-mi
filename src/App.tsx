"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import theme from "./theme"
import LoadingScreen from "./components/LoadingScreen"
import Header from "./components/Header"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Navigation />
            <Header />
            <Technologies />
            <Projects />
            <Certifications />
            <Experience />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </ChakraProvider>
  )
}

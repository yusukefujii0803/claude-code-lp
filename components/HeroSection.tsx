'use client'

import AdvancedHeroBackground from './hero/AdvancedHeroBackground'
import AdvancedHeroContent from './hero/AdvancedHeroContent'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AdvancedHeroBackground />
      <AdvancedHeroContent />
      
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 0.5 },
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
      >
        <motion.div
          className="p-4 rounded-full backdrop-blur-md bg-white/20 border border-white/30 cursor-pointer hover:bg-white/30 transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            window.scrollTo({ 
              top: window.innerHeight, 
              behavior: 'smooth' 
            })
          }}
        >
          <ChevronDown className="w-6 h-6 text-gray-700" />
        </motion.div>
      </motion.div>
    </section>
  )
}
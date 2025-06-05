'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Sparkles, Code, Zap, Brain, Rocket } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const typingTexts = [
  "AIプログラミングの新時代",
  "開発効率を10倍に向上",
  "未来のコーディング体験",
  "次世代エンジニアへの扉"
]

export default function AdvancedHeroContent() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  // Typing animation effect
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex]
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setIsTyping(true)
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentTextIndex])

  const stats = [
    { icon: Code, value: "1,000+", label: "受講生", delay: 0.2 },
    { icon: Zap, value: "4.9/5", label: "満足度", delay: 0.4 },
    { icon: Brain, value: "98%", label: "完走率", delay: 0.6 },
    { icon: Rocket, value: "10x", label: "効率UP", delay: 0.8 }
  ]

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative z-20 text-center px-4 max-w-7xl mx-auto"
    >
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <Badge 
          variant="secondary" 
          className="text-lg px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-5 h-5 mr-2" />
          </motion.div>
          {displayText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        </Badge>
      </motion.div>

      {/* Main title with advanced animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-8"
      >
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Claude Code
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-800"
          >
            マスター講座
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* Subtitle with parallax */}
      <motion.p
        className="text-xl md:text-3xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        AIとの対話でコードを生成し、開発効率を
        <motion.span
          className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          革命的に
        </motion.span>
        向上させる。
        <br />
        プログラミングの未来を、今ここで体験しよう。
      </motion.p>

      {/* CTA Buttons with advanced interactions */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="xl" 
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-0 shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
              initial={{ x: '100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center">
              今すぐ受講を始める
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            size="xl"
            className="backdrop-blur-md bg-white/10 border-white/30 text-gray-800 hover:bg-white/20"
          >
            無料で体験する
          </Button>
        </motion.div>
      </motion.div>

      {/* Advanced statistics with parallax and animations */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 md:gap-12"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.3 }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: stat.delay }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="inline-flex p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 mb-3 group-hover:shadow-2xl transition-all duration-300"
                whileHover={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderColor: 'rgba(255, 255, 255, 0.5)'
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: stat.delay 
                  }}
                >
                  <Icon className="w-8 h-8 text-blue-600" />
                </motion.div>
              </motion.div>
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: stat.delay }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
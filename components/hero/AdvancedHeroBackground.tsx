'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AdvancedHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -400])
  const y3 = useTransform(scrollY, [0, 1000], [0, -600])
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      mouseX.set((clientX - innerWidth / 2) / innerWidth)
      mouseY.set((clientY - innerHeight / 2) / innerHeight)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(600px circle at ${50 + springX.get() * 20}% ${50 + springY.get() * 20}%, 
              rgba(59, 130, 246, 0.15), transparent 40%),
            radial-gradient(800px circle at ${30 + springX.get() * -15}% ${70 + springY.get() * -15}%, 
              rgba(147, 51, 234, 0.15), transparent 40%),
            radial-gradient(1000px circle at ${80 + springX.get() * 25}% ${20 + springY.get() * 25}%, 
              rgba(236, 72, 153, 0.1), transparent 40%)
          `,
        }}
        animate={{
          background: inView ? [
            `radial-gradient(600px circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 40%),
             radial-gradient(800px circle at 30% 70%, rgba(147, 51, 234, 0.15), transparent 40%),
             radial-gradient(1000px circle at 80% 20%, rgba(236, 72, 153, 0.1), transparent 40%)`,
            `radial-gradient(600px circle at 70% 30%, rgba(59, 130, 246, 0.15), transparent 40%),
             radial-gradient(800px circle at 20% 80%, rgba(147, 51, 234, 0.15), transparent 40%),
             radial-gradient(1000px circle at 90% 10%, rgba(236, 72, 153, 0.1), transparent 40%)`,
            `radial-gradient(600px circle at 30% 70%, rgba(59, 130, 246, 0.15), transparent 40%),
             radial-gradient(800px circle at 70% 30%, rgba(147, 51, 234, 0.15), transparent 40%),
             radial-gradient(1000px circle at 20% 80%, rgba(236, 72, 153, 0.1), transparent 40%)`
          ] : undefined
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-20 w-64 h-64"
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-48 h-48"
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-3xl blur-2xl"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 left-1/3 w-72 h-72"
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glowing orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-blue-400 rounded-full shadow-lg"
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
          }}
          animate={{
            x: [
              Math.random() * 1200,
              Math.random() * 1200,
              Math.random() * 1200,
            ],
            y: [
              Math.random() * 800,
              Math.random() * 800,
              Math.random() * 800,
            ],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* CSS-only aurora effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)
            `,
            animation: 'aurora 8s ease-in-out infinite',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes aurora {
          0%, 100% {
            transform: translateX(-100px) translateY(-100px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateX(100px) translateY(100px) rotate(180deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}
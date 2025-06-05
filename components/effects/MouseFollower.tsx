'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MouseFollower() {
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { stiffness: 500, damping: 28 })
  const springY = useSpring(y, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX - 16)
      y.set(e.clientY - 16)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const handleInteractiveEnter = () => setCursorVariant('interactive')
    const handleInteractiveLeave = () => setCursorVariant('default')

    window.addEventListener('mousemove', moveCursor)

    // Interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-cursor="interactive"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleInteractiveEnter)
      el.addEventListener('mouseleave', handleInteractiveLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleInteractiveEnter)
        el.removeEventListener('mouseleave', handleInteractiveLeave)
      })
    }
  }, [x, y])

  const variants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      border: '2px solid rgba(59, 130, 246, 0.8)',
    },
    interactive: {
      scale: 1.5,
      backgroundColor: 'rgba(147, 51, 234, 0.3)',
      border: '2px solid rgba(147, 51, 234, 0.8)',
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: x,
          y: y,
        }}
        animate={{
          x: x.get() + 15,
          y: y.get() + 15,
        }}
      />
    </>
  )
}
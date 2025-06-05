'use client'

import { useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  const createParticle = useCallback((x: number, y: number): Particle => {
    const colors = [
      'rgba(59, 130, 246, 0.8)',    // blue-500
      'rgba(147, 51, 234, 0.8)',    // purple-500
      'rgba(236, 72, 153, 0.8)',    // pink-500
      'rgba(34, 197, 94, 0.8)',     // green-500
    ]
    
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 0,
      maxLife: Math.random() * 100 + 50,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    }
  }, [])

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.life++
      particle.x += particle.vx
      particle.y += particle.vy
      
      // Gravity towards mouse
      const dx = mouseRef.current.x - particle.x
      const dy = mouseRef.current.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 150) {
        particle.vx += dx * 0.0001
        particle.vy += dy * 0.0001
      }
      
      // Add some turbulence
      particle.vx += (Math.random() - 0.5) * 0.1
      particle.vy += (Math.random() - 0.5) * 0.1
      
      // Apply friction
      particle.vx *= 0.99
      particle.vy *= 0.99
      
      const alpha = 1 - (particle.life / particle.maxLife)
      
      // Draw particle
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = particle.color
      ctx.shadowBlur = 20
      ctx.shadowColor = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
      
      // Draw connections to nearby particles
      particlesRef.current.forEach(other => {
        if (other === particle) return
        
        const dx = other.x - particle.x
        const dy = other.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          ctx.save()
          ctx.globalAlpha = alpha * (1 - distance / 100) * 0.3
          ctx.strokeStyle = particle.color
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
          ctx.restore()
        }
      })
      
      return particle.life < particle.maxLife
    })

    animationRef.current = requestAnimationFrame(updateParticles)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      
      // Create particles at mouse position occasionally
      if (Math.random() < 0.1) {
        particlesRef.current.push(createParticle(e.clientX, e.clientY))
      }
    }

    const handleClick = (e: MouseEvent) => {
      // Create burst of particles on click
      for (let i = 0; i < 10; i++) {
        const angle = (Math.PI * 2 * i) / 10
        const distance = Math.random() * 50
        particlesRef.current.push(createParticle(
          e.clientX + Math.cos(angle) * distance,
          e.clientY + Math.sin(angle) * distance
        ))
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)

    // Start with some initial particles
    for (let i = 0; i < 20; i++) {
      particlesRef.current.push(createParticle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      ))
    }

    updateParticles()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [createParticle, updateParticles])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}
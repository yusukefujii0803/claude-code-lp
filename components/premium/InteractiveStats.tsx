'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { 
  Users, 
  Star, 
  Code, 
  TrendingUp, 
  Award, 
  Clock,
  Globe,
  Zap
} from 'lucide-react'
import { useRef } from 'react'

const stats = [
  {
    id: 1,
    icon: Users,
    value: 1247,
    suffix: '+',
    label: '受講生',
    description: '世界中から集まった学習者',
    color: 'from-blue-500 to-cyan-500',
    delay: 0.2
  },
  {
    id: 2,
    icon: Star,
    value: 4.9,
    suffix: '/5',
    label: '満足度',
    description: '受講生からの高評価',
    color: 'from-yellow-500 to-orange-500',
    delay: 0.4
  },
  {
    id: 3,
    icon: Code,
    value: 98,
    suffix: '%',
    label: '完走率',
    description: '最後まで学習を継続',
    color: 'from-green-500 to-emerald-500',
    delay: 0.6
  },
  {
    id: 4,
    icon: TrendingUp,
    value: 850,
    suffix: '%',
    label: '効率向上',
    description: '開発速度の平均向上率',
    color: 'from-purple-500 to-pink-500',
    delay: 0.8
  },
  {
    id: 5,
    icon: Award,
    value: 156,
    suffix: '+',
    label: '転職成功',
    description: '希望企業への転職達成',
    color: 'from-red-500 to-rose-500',
    delay: 1.0
  },
  {
    id: 6,
    icon: Clock,
    value: 24,
    suffix: 'h',
    label: 'サポート',
    description: '24時間体制のサポート',
    color: 'from-indigo-500 to-blue-500',
    delay: 1.2
  },
  {
    id: 7,
    icon: Globe,
    value: 45,
    suffix: '+',
    label: '対応国',
    description: 'グローバルな学習コミュニティ',
    color: 'from-teal-500 to-green-500',
    delay: 1.4
  },
  {
    id: 8,
    icon: Zap,
    value: 10,
    suffix: 'x',
    label: '生産性',
    description: 'AI活用による生産性向上',
    color: 'from-amber-500 to-yellow-500',
    delay: 1.6
  }
]

function AnimatedNumber({ value, suffix = '', duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount(prev => {
          const increment = value / (duration * 60) // 60fps
          const next = prev + increment
          if (next >= value) {
            clearInterval(timer)
            return value
          }
          return next
        })
      }, 16) // ~60fps

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <motion.span
      ref={ref}
      className="text-4xl md:text-5xl font-bold"
      animate={controls}
    >
      {typeof value === 'number' && value % 1 !== 0 
        ? count.toFixed(1) 
        : Math.floor(count)}{suffix}
    </motion.span>
  )
}

export default function InteractiveStats() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(600px circle at 0% 0%, rgba(59, 130, 246, 0.3), transparent 50%)',
              'radial-gradient(600px circle at 100% 100%, rgba(147, 51, 234, 0.3), transparent 50%)',
              'radial-gradient(600px circle at 0% 100%, rgba(236, 72, 153, 0.3), transparent 50%)',
              'radial-gradient(600px circle at 100% 0%, rgba(59, 130, 246, 0.3), transparent 50%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
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
            数字で見る成果
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Claude Code マスター講座の実績とコミュニティの成長を、
            リアルタイムデータで確認してください
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredStat(stat.id)}
                onHoverEnd={() => setHoveredStat(null)}
                className="group cursor-pointer"
              >
                <Card className="relative h-full p-6 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    animate={hoveredStat === stat.id ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    } : {}}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />

                  <div className="relative z-10">
                    {/* Icon with animation */}
                    <motion.div
                      className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}
                      animate={hoveredStat === stat.id ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Animated number */}
                    <motion.div className="mb-2">
                      <AnimatedNumber 
                        value={stat.value} 
                        suffix={stat.suffix}
                        duration={2}
                      />
                    </motion.div>

                    {/* Label */}
                    <motion.h3 
                      className="text-lg font-semibold text-white mb-2"
                      animate={hoveredStat === stat.id ? { scale: 1.05 } : { scale: 1 }}
                    >
                      {stat.label}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-sm text-gray-300"
                      initial={{ opacity: 0.7 }}
                      animate={hoveredStat === stat.id ? { opacity: 1 } : { opacity: 0.7 }}
                    >
                      {stat.description}
                    </motion.p>

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-xl"
                      animate={hoveredStat === stat.id ? {
                        borderColor: `rgba(255, 255, 255, 0.3)`,
                        boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                      } : {}}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Particle effects on hover */}
                  <AnimatePresence>
                    {hoveredStat === stat.id && (
                      <>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            initial={{ 
                              opacity: 0,
                              x: '50%',
                              y: '50%',
                              scale: 0
                            }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              x: `${50 + (Math.random() - 0.5) * 200}%`,
                              y: `${50 + (Math.random() - 0.5) * 200}%`,
                              scale: [0, 1, 0]
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: i * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.p
            className="text-xl text-gray-300 mb-6"
            animate={{ 
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            あなたも成功事例の一部になりませんか？
          </motion.p>
        </motion.div>
      </div>
    </Section>
  )
}
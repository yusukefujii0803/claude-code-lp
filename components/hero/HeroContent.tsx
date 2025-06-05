'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroContent() {
  return (
    <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="secondary" className="mb-6">
          <Sparkles className="w-4 h-4 mr-2" />
          AIプログラミングの新時代
        </Badge>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="gradient-text">Claude Code</span>
        <br />
        <span className="text-gray-800">マスター講座</span>
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        AIとの対話でコードを生成し、開発効率を10倍に。
        プログラミングの概念を変える実践的な講座です。
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Button size="lg" className="group">
          今すぐ受講を始める
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button variant="outline" size="lg">
          無料で体験する
        </Button>
      </motion.div>

      <motion.div
        className="mt-12 flex items-center justify-center gap-8 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">1,000+</div>
          <div className="text-sm">受講生</div>
        </div>
        <div className="w-px h-12 bg-gray-300" />
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">4.9/5</div>
          <div className="text-sm">満足度</div>
        </div>
        <div className="w-px h-12 bg-gray-300" />
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">98%</div>
          <div className="text-sm">完走率</div>
        </div>
      </motion.div>
    </div>
  )
}
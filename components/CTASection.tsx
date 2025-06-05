'use client'

import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import { 
  PartyPopper, 
  Gift, 
  Shield, 
  Clock, 
  ArrowRight, 
  Mail 
} from 'lucide-react'

export default function CTASection() {
  const benefits = [
    {
      icon: PartyPopper,
      text: "今なら全プラン50%OFF"
    },
    {
      icon: Gift,
      text: "先着100名様限定で追加教材プレゼント"
    },
    {
      icon: Shield,
      text: "30日間の返金保証付き"
    }
  ]

  return (
    <Section 
      variant="dark" 
      className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            今すぐClaude Code<br />マスターになろう
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            AIプログラミングの世界があなたを待っています
          </p>
        </motion.div>

        <motion.div
          className="glass-morphism rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge variant="warning" className="text-lg px-6 py-3 mb-6">
            🎉 期間限定特典
          </Badge>
          
          <div className="space-y-4 text-left max-w-2xl mx-auto mb-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <Icon className="w-5 h-5 mr-3 flex-shrink-0 text-accent-400" />
                  <span className="text-lg">{benefit.text}</span>
                </motion.div>
              )
            })}
          </div>
          
          <motion.div
            className="flex items-center justify-center gap-2 text-2xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Clock className="w-6 h-6 text-accent-400" />
            残り募集枠: <span className="text-accent-300">23名</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            size="xl" 
            className="bg-white text-gray-800 hover:bg-gray-100 group"
          >
            今すぐ申し込む
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            className="border-white text-white hover:bg-white hover:text-gray-800"
          >
            <Mail className="mr-2 w-5 h-5" />
            お問い合わせ
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
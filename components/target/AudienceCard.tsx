'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { LucideIcon } from 'lucide-react'

interface AudienceCardProps {
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export default function AudienceCard({ title, description, icon: Icon, index }: AudienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        hoverable 
        variant="gradient" 
        className="h-full group relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full -translate-y-16 translate-x-16" />
        
        <CardContent className="relative z-10">
          <motion.div
            className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-600 mb-6"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
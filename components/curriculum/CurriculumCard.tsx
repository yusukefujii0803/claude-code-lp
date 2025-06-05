'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { CheckCircle } from 'lucide-react'

interface CurriculumCardProps {
  week: string
  title: string
  topics: string[]
  index: number
}

export default function CurriculumCard({ week, title, topics, index }: CurriculumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card hoverable className="h-full">
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center mb-6">
            <Badge variant="secondary" className="mb-2 md:mb-0 md:mr-4 w-fit">
              {week}
            </Badge>
            <h3 className="text-2xl font-bold text-gray-800">
              {title}
            </h3>
          </div>
          <ul className="space-y-3">
            {topics.map((topic, topicIndex) => (
              <motion.li 
                key={topicIndex} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index * 0.1) + (topicIndex * 0.05) }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{topic}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
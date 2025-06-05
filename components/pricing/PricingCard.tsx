'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Check, Star } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  originalPrice: string
  features: string[]
  recommended: boolean
  index: number
}

export default function PricingCard({ 
  name, 
  price, 
  originalPrice, 
  features, 
  recommended, 
  index 
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <Card 
        hoverable 
        className={`h-full relative overflow-hidden ${
          recommended ? 'ring-2 ring-primary-500 shadow-2xl scale-105' : ''
        }`}
      >
        {recommended && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
            <Badge variant="secondary" className="flex items-center gap-1 px-4 py-2">
              <Star className="w-4 h-4" />
              おすすめ
            </Badge>
          </div>
        )}

        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full -translate-y-16 translate-x-16" />

        <CardContent className="relative z-10 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {name}
          </h3>
          
          <div className="text-center mb-8">
            <p className="text-gray-400 line-through text-lg mb-2">
              ¥{originalPrice}
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-bold text-gray-800">
                ¥{price}
              </span>
              <span className="text-gray-600">一括払い</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {features.map((feature, featureIndex) => (
              <motion.li 
                key={featureIndex} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
              >
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <Button 
            variant={recommended ? 'primary' : 'outline'}
            className="w-full"
            size="lg"
          >
            このプランを選択
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
'use client'

import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import AudienceCard from './target/AudienceCard'
import { motion } from 'framer-motion'
import { 
  Sprout, 
  Code, 
  Briefcase, 
  GraduationCap,
  Laptop,
  Wifi,
  Heart
} from 'lucide-react'

export default function TargetAudienceSection() {
  const audiences = [
    {
      title: "プログラミング初心者",
      description: "コーディングの基礎から、AIを活用した効率的な学習方法まで丁寧にサポート",
      icon: Sprout
    },
    {
      title: "現役エンジニア",
      description: "開発効率を劇的に向上させ、より創造的な仕事に集中できるようになります",
      icon: Code
    },
    {
      title: "フリーランス・副業希望者",
      description: "AIを活用して短時間で高品質な成果物を作成し、収入アップを実現",
      icon: Briefcase
    },
    {
      title: "学生・研究者",
      description: "最新のAI技術を学び、研究やプロジェクトに活用できるスキルを習得",
      icon: GraduationCap
    }
  ]

  const requirements = [
    {
      icon: Laptop,
      title: "パソコン",
      description: "Windows/Mac/Linux"
    },
    {
      icon: Wifi,
      title: "インターネット環境",
      description: "安定した接続"
    },
    {
      icon: Heart,
      title: "学習への情熱",
      description: "成長したい気持ち"
    }
  ]

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>こんな方におすすめ</SectionTitle>
        <SectionDescription>
          どのレベルの方でも、それぞれに最適な学習体験を提供します
        </SectionDescription>
      </SectionHeader>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {audiences.map((audience, index) => (
          <AudienceCard
            key={index}
            title={audience.title}
            description={audience.description}
            icon={audience.icon}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card variant="gradient" className="p-8 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">
            必要なもの
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => {
              const Icon = req.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-600 mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{req.title}</h4>
                  <p className="text-gray-600">{req.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}
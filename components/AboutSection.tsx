'use client'

import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { Code, Zap, Brain, Rocket } from 'lucide-react'

export default function AboutSection() {
  const comparisonData = [
    {
      title: "従来のプログラミング",
      icon: Code,
      items: [
        "すべてを手動でコーディング",
        "エラーの解決に時間がかかる", 
        "ドキュメント検索に時間を費やす",
        "反復的な作業が多い"
      ],
      color: "from-gray-500 to-gray-600"
    },
    {
      title: "Claude Codeを使った開発",
      icon: Zap,
      items: [
        "AIと対話しながら効率的に開発",
        "エラーの即座の解決提案",
        "必要な情報を瞬時に取得", 
        "創造的な作業に集中できる"
      ],
      color: "from-primary-500 to-secondary-600"
    }
  ]

  return (
    <Section id="about" variant="alternate">
      <SectionHeader>
        <SectionTitle className="gradient-text">
          Claude Codeとは？
        </SectionTitle>
      </SectionHeader>

      <motion.div
        className="max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-8">
          <CardContent>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Claude Codeは、Anthropic社が開発した最先端のAIプログラミングアシスタントです。
              自然言語でプログラミングの指示を出すだけで、高品質なコードを生成し、
              バグの修正やリファクタリング、テストの作成まで幅広くサポートします。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {comparisonData.map((section, index) => {
                const Icon = section.icon
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card variant="gradient" className="h-full">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${section.color} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-gray-700">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white p-8 text-center">
          <Brain className="w-12 h-12 mx-auto mb-4" />
          <p className="text-xl font-semibold mb-2">
            この講座では、Claude Codeの基本から応用まで、
          </p>
          <p className="text-lg opacity-90">
            実践的なプロジェクトを通して体系的に学ぶことができます。
          </p>
        </Card>
      </motion.div>
    </Section>
  )
}
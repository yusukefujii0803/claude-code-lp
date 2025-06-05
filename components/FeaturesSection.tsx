'use client'

import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/ui/Section'
import FeatureCard from './features/FeatureCard'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  MessageCircle, 
  Video, 
  Code2, 
  RefreshCw, 
  Award 
} from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      title: "実践的なカリキュラム",
      description: "実際のプロジェクトを通してClaude Codeの使い方を習得。理論だけでなく、すぐに使えるスキルが身につきます。",
      icon: BookOpen
    },
    {
      title: "24時間サポート",
      description: "専用のSlackチャンネルで質問し放題。つまずいても安心して学習を進められます。",
      icon: MessageCircle
    },
    {
      title: "録画視聴可能",
      description: "すべての講義は録画され、いつでも見返すことができます。自分のペースで学習できます。",
      icon: Video
    },
    {
      title: "実践的な演習",
      description: "豊富な演習問題と実践課題で、確実にスキルを定着させます。",
      icon: Code2
    },
    {
      title: "最新情報の更新",
      description: "Claude Codeの最新機能や活用法を随時アップデート。常に最新の知識を学べます。",
      icon: RefreshCw
    },
    {
      title: "修了証明書",
      description: "講座修了時には証明書を発行。あなたのスキルを証明します。",
      icon: Award
    }
  ]

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>この講座の特徴</SectionTitle>
        <SectionDescription>
          すべての特徴が組み合わさって、最高の学習体験を提供します
        </SectionDescription>
      </SectionHeader>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
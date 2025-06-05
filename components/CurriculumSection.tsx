'use client'

import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import CurriculumCard from './curriculum/CurriculumCard'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function CurriculumSection() {
  const modules = [
    {
      week: "Week 1-2",
      title: "Claude Code基礎",
      topics: [
        "Claude Codeのセットアップと環境構築",
        "基本的なプロンプトの書き方",
        "コード生成の基本テクニック",
        "エラー処理とデバッグ方法"
      ]
    },
    {
      week: "Week 3-4",
      title: "実践的なプロジェクト開発",
      topics: [
        "Webアプリケーションの構築",
        "APIの設計と実装",
        "データベース操作",
        "テストコードの自動生成"
      ]
    },
    {
      week: "Week 5-6",
      title: "高度な活用法",
      topics: [
        "リファクタリングとコード最適化",
        "複雑なアルゴリズムの実装",
        "マルチファイル編集",
        "CI/CDパイプラインの構築"
      ]
    },
    {
      week: "Week 7-8",
      title: "プロジェクト実践",
      topics: [
        "実際のプロジェクトでの活用",
        "チーム開発での Claude Code",
        "ベストプラクティスとアンチパターン",
        "最終プロジェクトの完成"
      ]
    }
  ]

  return (
    <Section variant="alternate">
      <SectionHeader>
        <SectionTitle>カリキュラム</SectionTitle>
        <SectionDescription>
          8週間で段階的にスキルを習得し、プロフェッショナルレベルまで到達
        </SectionDescription>
      </SectionHeader>

      <div className="space-y-8 mb-12">
        {modules.map((module, index) => (
          <CurriculumCard
            key={index}
            week={module.week}
            title={module.title}
            topics={module.topics}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white p-8 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-4" />
          <p className="text-2xl font-semibold">
            8週間で、Claude Codeを使いこなすプロフェッショナルに
          </p>
        </Card>
      </motion.div>
    </Section>
  )
}
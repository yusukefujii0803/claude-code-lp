'use client'

import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import PricingCard from './pricing/PricingCard'
import { motion } from 'framer-motion'
import { PartyPopper, Shield, CreditCard } from 'lucide-react'

export default function PricingSection() {
  const plans = [
    {
      name: "ベーシック",
      price: "49,800",
      originalPrice: "98,000",
      features: [
        "全講義動画の視聴権限",
        "基本的な質問サポート",
        "演習問題へのアクセス",
        "修了証明書の発行",
        "1ヶ月間の復習期間"
      ],
      recommended: false
    },
    {
      name: "プロフェッショナル",
      price: "79,800",
      originalPrice: "158,000",
      features: [
        "ベーシックプランの全特典",
        "24時間優先サポート",
        "1対1のメンタリング（月2回）",
        "実践プロジェクトのレビュー",
        "3ヶ月間の復習期間",
        "限定コミュニティへの参加"
      ],
      recommended: true
    },
    {
      name: "エンタープライズ",
      price: "149,800",
      originalPrice: "298,000",
      features: [
        "プロフェッショナルプランの全特典",
        "週1回の個別コーチング",
        "カスタムプロジェクト支援",
        "チーム開発の実践演習",
        "永久視聴権限",
        "優先的な新機能アクセス"
      ],
      recommended: false
    }
  ]

  return (
    <Section id="pricing" variant="alternate">
      <SectionHeader>
        <SectionTitle>料金プラン</SectionTitle>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="warning" className="text-lg px-6 py-3 mb-4">
            <PartyPopper className="w-5 h-5 mr-2" />
            期間限定キャンペーン実施中！
          </Badge>
          <SectionDescription>
            今なら全プラン50%OFF - あなたに最適なプランを選択してください
          </SectionDescription>
        </motion.div>
      </SectionHeader>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            price={plan.price}
            originalPrice={plan.originalPrice}
            features={plan.features}
            recommended={plan.recommended}
            index={index}
          />
        ))}
      </div>

      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span>30日間の返金保証付き</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-blue-500" />
            <span>分割払い（3回・6回・12回）対応</span>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
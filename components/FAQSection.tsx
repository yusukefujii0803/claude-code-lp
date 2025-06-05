'use client'

import { useState } from 'react'
import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/ui/Section'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Mail } from 'lucide-react'

export default function FAQSection() {
  const faqs = [
    {
      question: "プログラミング初心者でも受講できますか？",
      answer: "はい、もちろん受講可能です。基礎的なパソコン操作ができれば問題ありません。講座では基本的なプログラミング概念から丁寧に説明し、Claude Codeを使った効率的な学習方法をお教えします。"
    },
    {
      question: "Claude Codeの利用料金は別途必要ですか？",
      answer: "講座期間中はClaude Codeの基本的な使用方法を無料版で学べるように設計されています。より高度な機能を使いたい場合は有料プランの契約が必要になりますが、講座の内容は無料版でも十分に実践可能です。"
    },
    {
      question: "受講期間はどのくらいですか？",
      answer: "メインの講座期間は8週間です。その後、プランに応じて1〜3ヶ月（エンタープライズプランは永久）の復習期間があり、動画の再視聴や質問が可能です。"
    },
    {
      question: "どのようなサポートが受けられますか？",
      answer: "専用のSlackチャンネルでの質問対応、定期的なオンライン勉強会、プランに応じて個別メンタリングなどのサポートを提供しています。講師陣は現役のエンジニアで構成されています。"
    },
    {
      question: "修了後のキャリアサポートはありますか？",
      answer: "修了証明書の発行に加え、ポートフォリオ作成のアドバイスや、希望者には提携企業への推薦なども行っています。また、卒業生コミュニティで継続的な情報交換も可能です。"
    },
    {
      question: "返金保証について教えてください",
      answer: "受講開始から30日以内であれば、理由を問わず全額返金いたします。まずは安心してお試しください。返金手続きは簡単で、メール一本で対応可能です。"
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>よくある質問</SectionTitle>
        <SectionDescription>
          受講前の疑問にお答えします
        </SectionDescription>
      </SectionHeader>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800 pr-8 group-hover:text-primary-600 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-primary-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-4">
            その他のご質問がございましたら、お気軽にお問い合わせください
          </p>
          <a
            href="mailto:support@claude-code-course.com"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            <Mail className="w-5 h-5" />
            support@claude-code-course.com
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
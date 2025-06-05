'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    id: 1,
    name: "田中 健太",
    role: "シニアフロントエンドエンジニア",
    company: "株式会社TechVision",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Claude Codeを学んでから、開発速度が劇的に向上しました。特にコンポーネントの自動生成機能は革命的で、これまで数時間かかっていた作業が数分で完了するようになりました。",
    rating: 5,
    tags: ["フロントエンド", "React", "効率化"],
    beforeAfter: { before: "3時間/機能", after: "20分/機能" }
  },
  {
    id: 2,
    name: "佐藤 美咲",
    role: "フルスタックエンジニア",
    company: "StartupLab Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b23c?w=150&h=150&fit=crop&crop=face",
    content: "プログラミング未経験でしたが、Claude Codeのおかげで6ヶ月でプロダクションレベルのアプリケーションを作れるようになりました。AIとのペアプログラミングは最高の学習体験です。",
    rating: 5,
    tags: ["初心者", "フルスタック", "学習"],
    beforeAfter: { before: "未経験", after: "フルスタック開発者" }
  },
  {
    id: 3,
    name: "山田 拓也",
    role: "テックリード",
    company: "Innovation Corp",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "チーム全体でClaude Codeを導入した結果、プロジェクトの納期を30%短縮できました。コードレビューの時間も大幅に削減され、より創造的な作業に時間を使えるようになりました。",
    rating: 5,
    tags: ["チーム開発", "効率化", "マネジメント"],
    beforeAfter: { before: "6ヶ月", after: "4ヶ月" }
  },
  {
    id: 4,
    name: "鈴木 智子",
    role: "バックエンドエンジニア",
    company: "DataFlow Systems",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "複雑なAPIの設計と実装が驚くほど簡単になりました。Claude Codeが提案するアーキテクチャパターンは実践的で、保守性の高いコードを書けるようになりました。",
    rating: 5,
    tags: ["バックエンド", "API", "アーキテクチャ"],
    beforeAfter: { before: "2週間", after: "3日" }
  }
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <Section variant="gradient" className="relative overflow-hidden">
      <div ref={ref} className="absolute inset-0">
        {/* Animated background patterns */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              受講生の声
            </Badge>
          </motion.div>
          <SectionTitle>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="gradient-text"
            >
              成功事例
            </motion.span>
          </SectionTitle>
        </SectionHeader>

        <div className="max-w-6xl mx-auto">
          {/* Main testimonial showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 md:p-12 backdrop-blur-md bg-white/80 border border-white/50 shadow-2xl">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Quote and content */}
                    <div className="lg:col-span-2">
                      <motion.div
                        className="flex items-center mb-6"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Quote className="w-12 h-12 text-blue-500 mr-4" />
                        <div className="flex">
                          {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                            >
                              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.p
                        className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {currentTestimonial.content}
                      </motion.p>

                      <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        {currentTestimonial.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-sm">
                            {tag}
                          </Badge>
                        ))}
                      </motion.div>

                      {/* Before/After stats */}
                      <motion.div
                        className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-1">Before</div>
                          <div className="font-semibold text-gray-700">{currentTestimonial.beforeAfter.before}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-1">After</div>
                          <div className="font-semibold text-green-600">{currentTestimonial.beforeAfter.after}</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Profile */}
                    <motion.div
                      className="text-center lg:text-left"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <motion.div
                        className="w-32 h-32 mx-auto lg:mx-0 mb-4 rounded-full overflow-hidden shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-blue-600 font-semibold mb-1">
                        {currentTestimonial.role}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {currentTestimonial.company}
                      </p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-white/50 hover:bg-white transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      setCurrentIndex(i)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      i === currentIndex 
                        ? 'bg-blue-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-white/50 hover:bg-white transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="w-6 h-6 text-gray-700" />
              </motion.button>
            </div>
          </motion.div>

          {/* Mini testimonials grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                className="p-6 backdrop-blur-md bg-white/60 rounded-xl border border-white/40 cursor-pointer hover:bg-white/80 transition-all duration-200"
                onClick={() => {
                  setCurrentIndex(i)
                  setIsAutoPlaying(false)
                }}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {testimonial.content.slice(0, 100)}...
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
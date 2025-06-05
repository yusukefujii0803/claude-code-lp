'use client'

import { motion } from 'framer-motion'
import { Mail, Clock, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const linkSections = [
    {
      title: "リンク",
      links: [
        { name: "Claude Codeとは", href: "#about" },
        { name: "カリキュラム", href: "#curriculum" },
        { name: "料金プラン", href: "#pricing" },
        { name: "よくある質問", href: "#faq" }
      ]
    },
    {
      title: "サポート",
      links: [
        { name: "利用規約", href: "/terms" },
        { name: "プライバシーポリシー", href: "/privacy" },
        { name: "特定商取引法に基づく表記", href: "/commercial" }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-bold text-xl mb-4 gradient-text">
              Claude Code マスター講座
            </h3>
            <p className="text-sm leading-relaxed">
              AIプログラミングの新時代を切り開く、実践的な学習プログラム
            </p>
          </motion.div>

          {linkSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-white font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <a 
                  href="mailto:support@claude-code-course.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  support@claude-code-course.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-400" />
                <span>営業時間: 平日 10:00-18:00</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Claude Code マスター講座. All rights reserved.</p>
            <p>Made with ❤️ for the future of programming</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
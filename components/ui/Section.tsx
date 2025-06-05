'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alternate' | 'gradient' | 'dark'
  container?: boolean
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', container = true, children, ...props }, ref) => {
    const variants = {
      default: 'bg-white',
      alternate: 'bg-gray-50',
      gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50',
      dark: 'bg-gray-900 text-white',
    }

    return (
      <motion.section
        ref={ref}
        className={cn(
          'py-20 px-4',
          variants[variant],
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {container ? (
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        ) : (
          children
        )}
      </motion.section>
    )
  }
)

Section.displayName = 'Section'

const SectionHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn('text-center mb-12', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {children}
    </motion.div>
  )
)

SectionHeader.displayName = 'SectionHeader'

const SectionTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-4xl md:text-5xl font-bold mb-4', className)}
      {...props}
    />
  )
)

SectionTitle.displayName = 'SectionTitle'

const SectionDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-lg md:text-xl text-gray-600 max-w-3xl mx-auto', className)}
      {...props}
    />
  )
)

SectionDescription.displayName = 'SectionDescription'

export { Section, SectionHeader, SectionTitle, SectionDescription }
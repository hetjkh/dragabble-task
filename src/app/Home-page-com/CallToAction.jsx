'use client';

import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Smart Task Management',
  'Interactive Calendar',
  'Real-time Sync Across Devices',
  'Detailed Analytics',
];

function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%271%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:24px_24px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Productivity
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Join thousands who’ve discovered a better way to manage tasks and achieve goals.
            </p>
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-blue-50">
              {features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-200" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
                asChild
              >
                <Link href="/calendar">
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="#">View Demo</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-md lg:max-w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="mx-auto max-w-sm">
                <div className="mb-4">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Start Free, Upgrade Later
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                      All core features are free. Premium plans unlock advanced features.
                    </p>
                    <div className="space-y-2">
                      {['Free Plan', 'Pro Plan', 'Team Plan'].map((plan, i) => (
                        <div key={plan} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                i === 0 ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                              } mr-2`}
                            />
                            <span
                              className={`text-sm ${
                                i === 0
                                  ? 'font-medium text-blue-600 dark:text-blue-400'
                                  : 'text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              {plan}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {i === 0 ? '$0' : i === 1 ? '$8/mo' : '$16/mo'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-700/30 backdrop-blur-sm rounded-xl mb-4 border-t border-white/20 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Users this month</span>
                    <span className="text-blue-100">10,849</span>
                  </div>
                  <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-200 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
                <div className="text-center text-white text-sm">Join our growing community!</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(CallToAction);
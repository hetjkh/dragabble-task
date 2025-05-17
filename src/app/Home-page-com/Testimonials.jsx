'use client';

import { memo, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: 'TaskMaster transformed how I manage my projects. The calendar is a game-changer!',
    author: 'Sarah Johnson',
    role: 'Project Manager',
    rating: 5,
  },
  {
    quote: 'The task list’s filters and export features save me hours every week.',
    author: 'Michael Taylor',
    role: 'Freelance Designer',
    rating: 5,
  },
  {
    quote: 'Beautiful design and super easy to use. I love the dark mode!',
    author: 'Emily Rodriguez',
    role: 'Marketing Specialist',
    rating: 5,
  },
  {
    quote: 'As a student, TaskMaster perfectly organizes my assignments and exams.',
    author: 'David Chen',
    role: 'CS Student',
    rating: 5,
  },
];

const ITEMS_PER_PAGE = 4;

function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Thousands
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the people who use TaskMaster every day
          </p>
        </div>

        <motion.div
          ref={ref}
          className="relative"
          role="region"
          aria-label="Testimonials carousel"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-[-2rem] top-1/2 -translate-y-1/2 z-10 hidden md:flex rounded-full shadow-sm h-12 w-12 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
            onClick={handlePrev}
            aria-label="Previous testimonial page"
          >
            <ArrowLeft size={24} className="text-gray-700 dark:text-gray-300" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-[-2rem] top-1/2 -translate-y-1/2 z-10 hidden md:flex rounded-full shadow-sm h-12 w-12 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
            onClick={handleNext}
            aria-label="Next testimonial page"
          >
            <ArrowRight size={24} className="text-gray-700 dark:text-gray-300" />
          </Button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {visibleTestimonials.map((testimonial) => (
                <Card key={testimonial.author} className="border-0 shadow-lg min-h-[300px] flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center mt-auto">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center font-semibold">
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full ${i === currentPage ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to testimonial page ${i + 1}`}
                aria-current={i === currentPage}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Testimonials);
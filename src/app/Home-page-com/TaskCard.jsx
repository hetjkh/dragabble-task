'use client';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function TaskCard({ task, delay = 0 }) {
  const priorityColors = {
    High: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    Medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    Low: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  };

  if (!task) return null;

  return (
    <motion.div
      className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + delay, duration: 0.3 }}
      role="listitem"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium">{task.title}</h4>
        <span
          className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority] || priorityColors.Low}`}
        >
          {task.priority}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${Math.min(task.progress, 100)}%` }}
        />
      </div>
    </motion.div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    priority: PropTypes.oneOf(['High', 'Medium', 'Low']).isRequired,
    progress: PropTypes.number.isRequired,
  }),
  delay: PropTypes.number,
};

export default TaskCard;
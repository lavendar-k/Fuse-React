import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectWidgets } from './store/widgetsSlice';
import WidgetNow from './widgets/WidgetNow';
import WidgetWeather from './widgets/WidgetWeather';

function ProjectDashboardAppSidebar() {
  const widgets = useSelector(selectWidgets);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="w-full" variants={container} initial="hidden" animate="show">
      <motion.div variants={item} className="widget flex w-full p-12">
        <WidgetNow />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full p-12">
        <WidgetWeather widget={widgets.weatherWidget} />
      </motion.div>
    </motion.div>
  );
}

export default ProjectDashboardAppSidebar;

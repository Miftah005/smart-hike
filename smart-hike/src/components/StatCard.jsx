import { motion } from "framer-motion";

function StatCard({ icon, title, value, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`rounded-2xl p-5 shadow-lg text-white ${color}`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-sm opacity-90">{title}</p>
      <h2 className="text-3xl font-extrabold">{value}</h2>
    </motion.div>
  );
}

export default StatCard;

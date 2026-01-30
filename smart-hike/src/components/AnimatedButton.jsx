import { motion } from "framer-motion";

function AnimatedButton({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{
        scale: 1.04,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;

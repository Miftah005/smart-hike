import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function WasteLog() {
  const navigate = useNavigate();
  const nama = localStorage.getItem("namaPendaki") || "Pendaki Smart Hike";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center p-6">

      {/* PAGE CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-8"
      >

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="text-5xl mb-2">🗑️</div>
          <h1 className="text-3xl font-extrabold text-blue-700">
            Waste Log Pendakian
          </h1>
          <p className="text-gray-500 mt-1">
            Catatan Barang Dibawa Naik & Turun
          </p>
        </motion.div>

        {/* IDENTITAS */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-5 mb-6"
        >
          <p className="text-sm text-gray-600">Nama Pendaki</p>
          <p className="text-xl font-bold text-gray-800">{nama}</p>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg mb-6 text-sm text-gray-700"
        >
          Halaman ini mencatat barang yang dibawa naik dan memastikan seluruh
          barang dibawa kembali saat turun sebagai bentuk kepedulian terhadap
          alam 🌱
        </motion.div>

        {/* LOG LIST */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="font-bold text-gray-800 mb-3">📋 Contoh Waste Log</h2>

          <div className="space-y-3 text-sm">
            {["Botol Plastik", "Bungkus Makanan", "Tisu"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
              >
                <span>{item}</span>
                <span className="font-semibold text-green-600">
                  ✔ Dibawa Turun
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/rapor")}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-emerald-700"
          >
            ✅ Simpan & Lihat Rapor Etika
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/dashboard")}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700"
          >
            ⬅️ Kembali ke Dashboard
          </motion.button>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default WasteLog;

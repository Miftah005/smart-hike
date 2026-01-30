import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Rapor() {
  const navigate = useNavigate();

  const hasilWaste = localStorage.getItem("hasilWaste");
  const namaPendaki =
    localStorage.getItem("namaPendaki") || "Pendaki Smart Hike";

  const nilai =
    hasilWaste && hasilWaste.includes("LULUS") ? 100 : 40;

  // BADGE & PREDIKAT
  let badge = "";
  let predikat = "";
  let warna = "";

  if (nilai === 100) {
    badge = "🏅";
    predikat = "Pendaki Teladan";
    warna = "green";
  } else if (nilai >= 60) {
    badge = "🌱";
    predikat = "Pendaki Bijak";
    warna = "yellow";
  } else {
    badge = "⚠️";
    predikat = "Perlu Pembinaan";
    warna = "red";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center p-6">

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
      >

        {/* HEADER */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center p-6">
          <h1 className="text-3xl font-extrabold">
            📘 Rapor Etika Pendakian
          </h1>
          <p className="text-indigo-100 mt-1">
            Sistem Evaluasi Smart Hike
          </p>
        </div>

        {/* BODY */}
        <div className="p-6">

          {/* IDENTITAS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <p className="text-sm text-gray-500">Nama Pendaki</p>
            <p className="text-xl font-bold text-gray-800">
              {namaPendaki}
            </p>
          </motion.div>

          {/* STATUS */}
          {hasilWaste ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className={`p-4 rounded-xl text-center font-bold mb-6 ${
                warna === "green"
                  ? "bg-green-100 text-green-700"
                  : warna === "yellow"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {hasilWaste}
            </motion.div>
          ) : (
            <p className="text-center text-gray-500 mb-6">
              Belum ada data Waste Log
            </p>
          )}

          {/* NILAI */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <p className="font-semibold text-gray-700">
                Skor Etika Pendaki
              </p>
              <p className="font-bold text-gray-800">{nilai}%</p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${nilai}%` }}
                transition={{ duration: 1 }}
                className={`h-4 rounded-full ${
                  warna === "green"
                    ? "bg-green-500"
                    : warna === "yellow"
                    ? "bg-yellow-400"
                    : "bg-red-500"
                }`}
              />
            </div>
          </div>

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center"
          >
            <div className="text-5xl mb-2">{badge}</div>
            <p className="text-2xl font-bold">{predikat}</p>
            <p className="text-sm text-gray-600 mt-1">
              Berdasarkan prinsip <em>“Bawa Turun Sampahmu”</em>
            </p>
          </motion.div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4">
            {nilai === 100 && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/sertifikat")}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-green-700"
              >
                🎓 Lihat Sertifikat Etika
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/dashboard")}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700"
            >
              ⬅️ Kembali ke Dashboard
            </motion.button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default Rapor;

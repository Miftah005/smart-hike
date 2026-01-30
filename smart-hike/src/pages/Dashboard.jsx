import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import StatCard from "../components/StatCard";

function Dashboard() {
  const navigate = useNavigate();
  const [pertanyaanAI, setPertanyaanAI] = useState("");

  const nama =
    localStorage.getItem("namaPendaki") || "Pendaki Smart Hike";

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    const yakin = window.confirm("Yakin ingin logout?");
    if (!yakin) return;

    localStorage.removeItem("namaPendaki");
    localStorage.removeItem("darkMode");

    navigate("/login");
  };

  const kirimKeAI = () => {
    navigate("/rekomendasi", {
      state: { query: pertanyaanAI }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-100 p-6">

      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-800">
            👋 Halo, {nama}
          </h1>
          <p className="text-gray-600 text-sm">
            Dashboard AI Smart Hike
          </p>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-600 transition"
        >
          🚪 Logout
        </button>
      </motion.div>

      {/* ================= STATISTIK ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon="🏔️" title="Gunung" value="12" color="bg-blue-600" />
        <StatCard icon="👣" title="Pendakian" value="128" color="bg-emerald-600" />
        <StatCard icon="♻️" title="Waste" value="98%" color="bg-green-600" />
        <StatCard icon="🎓" title="Sertifikat" value="86" color="bg-indigo-600" />
      </div>

      {/* ================= AI INPUT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl shadow-xl p-5 mb-8"
      >
        <h2 className="text-lg font-extrabold mb-2">
          🤖 Tanya AI Smart Hike
        </h2>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Contoh: gunung aman untuk pemula"
            value={pertanyaanAI}
            onChange={(e) => setPertanyaanAI(e.target.value)}
            className="p-3 rounded-xl text-gray-800 text-sm"
          />

          <button
            onClick={kirimKeAI}
            className="bg-white text-indigo-700 py-3 rounded-xl font-bold"
          >
            🔍 Tanya AI
          </button>
        </div>
      </motion.div>

      {/* ================= QUICK ACTION ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-5"
      >
        <h2 className="text-lg font-bold mb-4">
          🚀 Akses Cepat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate("/wastelog")}
            className="bg-emerald-600 text-white py-4 rounded-xl font-semibold"
          >
            🗑️ Waste Log
          </button>

          <button
            onClick={() => navigate("/rapor")}
            className="bg-blue-600 text-white py-4 rounded-xl font-semibold"
          >
            📘 Rapor Etika
          </button>

          <button
            onClick={() => navigate("/sertifikat")}
            className="bg-indigo-600 text-white py-4 rounded-xl font-semibold"
          >
            🎓 Sertifikat
          </button>
        </div>
      </motion.div>

    </div>
  );
}

export default Dashboard;

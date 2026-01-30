import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import gunungData from "../data/gunungData";

function Rekomendasi() {
  const location = useLocation();
  const chatEndRef = useRef(null);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [dark, setDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [chat, setChat] = useState([
    {
      from: "ai",
      text: "Halo 👋 Aku AI Smart Hike. Aku akan membantu dengan aman & bertanggung jawab 🌱"
    }
  ]);

  /* ================= DARK MODE ================= */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  /* ================= AUTO QUESTION ================= */
  useEffect(() => {
    if (location.state?.query) {
      kirimPertanyaan(location.state.query);
    }
    // eslint-disable-next-line
  }, []);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, typing]);

  /* ================= AI LOGIC ================= */
  const cariGunung = (pertanyaan) => {
    const q = pertanyaan.toLowerCase();

    return gunungData.filter((g) => {
      if (q.includes("pemula")) return g.level === "Mudah" && !g.berbahaya;
      if (q.includes("aman")) return g.rekomendasi && !g.berbahaya;
      if (q.includes("berbahaya")) return g.berbahaya;
      if (q.includes("sulit")) return g.level === "Sulit";
      if (q.includes("tinggi")) return g.tinggi > 3000;
      return g.nama.toLowerCase().includes(q);
    });
  };

  /* ================= SEND QUESTION ================= */
  const kirimPertanyaan = (pertanyaan) => {
    if (!pertanyaan.trim()) return;

    setChat((prev) => [...prev, { from: "user", text: pertanyaan }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const hasil = cariGunung(pertanyaan);

      setTyping(false);

      if (hasil.length === 0) {
        setChat((prev) => [
          ...prev,
          {
            from: "ai",
            text:
              "⚠️ Demi keselamatan dan etika pendakian, aku belum bisa merekomendasikan gunung dari pertanyaan tersebut."
          }
        ]);
      } else {
        setChat((prev) => [
          ...prev,
          {
            from: "ai",
            text:
              "🌿 Berikut analisis AI Smart Hike berdasarkan keselamatan, etika, dan tingkat risiko:",
            data: hasil
          }
        ]);
      }
    }, 1200); // efek AI berpikir
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-emerald-100 dark:from-slate-900 dark:to-slate-800">

      {/* ================= HEADER ================= */}
      <div className="h-14 flex items-center justify-between px-4 bg-indigo-600 dark:bg-slate-900 text-white text-sm font-bold">
        🤖 AI Smart Hike
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      {/* ================= CHAT ================= */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3">

        {chat.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-[92%] p-3 rounded-2xl shadow text-sm ${
              c.from === "user"
                ? "ml-auto bg-indigo-600 text-white"
                : "bg-white dark:bg-slate-700 dark:text-white"
            }`}
          >
            <p>{c.text}</p>

            {/* ================= HASIL AI ================= */}
            {c.data && (
              <div className="mt-3 space-y-3">
                {c.data.map((g) => (
                  <div
                    key={g.id}
                    className={`border rounded-xl p-3 text-xs ${
                      g.berbahaya
                        ? "bg-red-50 dark:bg-red-900/30 border-red-400"
                        : "bg-emerald-50 dark:bg-slate-800 border-emerald-300"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <b>{g.nama}</b>
                      <span
                        className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                          g.berbahaya
                            ? "bg-red-600 text-white"
                            : "bg-emerald-600 text-white"
                        }`}
                      >
                        {g.berbahaya ? "BAHAYA" : "AMAN"}
                      </span>
                    </div>

                    <p>🏔 {g.tinggi} mdpl</p>
                    <p>📊 Level: {g.level}</p>
                    <p className="mt-1 text-emerald-700 dark:text-emerald-400">
                      AI: {g.alasan}
                    </p>

                    {g.berbahaya && (
                      <p className="mt-1 text-red-600 dark:text-red-400 font-semibold">
                        ⚠️ Peringatan: {g.alasanBahaya}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {/* ================= AI TYPING ================= */}
        {typing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-[60%] bg-white dark:bg-slate-700 text-gray-700 dark:text-white p-3 rounded-2xl shadow text-sm"
          >
            AI sedang menganalisis keselamatan
            <span className="animate-bounce inline-block ml-1">.</span>
            <span className="animate-bounce inline-block ml-1 delay-150">.</span>
            <span className="animate-bounce inline-block ml-1 delay-300">.</span>
          </motion.div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* ================= INPUT ================= */}
      <div className="p-2 bg-white dark:bg-slate-900 border-t dark:border-slate-700 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tanya AI Smart Hike..."
          className="flex-1 px-4 py-3 rounded-full border dark:bg-slate-800 dark:text-white text-sm outline-none"
        />
        <button
          onClick={() => kirimPertanyaan(input)}
          className="bg-indigo-600 text-white px-4 rounded-full font-bold text-sm"
        >
          Kirim
        </button>
      </div>

    </div>
  );
}

export default Rekomendasi;

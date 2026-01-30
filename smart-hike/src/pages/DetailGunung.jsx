import { useState } from "react";
import { useParams } from "react-router-dom";

function DetailGunung() {
  const { id } = useParams();

  const [usia, setUsia] = useState("");
  const [berat, setBerat] = useState("");
  const [aktivitas, setAktivitas] = useState("");
  const [hasil, setHasil] = useState(null);

  const handleAnalisis = () => {
    let rekomendasi = {};

    if (aktivitas === "rendah") {
      rekomendasi = {
        status: "Tidak Disarankan",
        saran: "Tingkatkan kebugaran sebelum mendaki",
        etika: "Jangan memaksakan diri demi keselamatan",
      };
    } else if (aktivitas === "sedang") {
      rekomendasi = {
        status: "Disarankan dengan Catatan",
        saran: "Pilih gunung level sedang dan istirahat cukup",
        etika: "Jaga stamina dan patuhi aturan jalur",
      };
    } else {
      rekomendasi = {
        status: "Disarankan",
        saran: "Siap mendaki gunung level sedang hingga sulit",
        etika: "Jaga alam, bawa turun semua sampah",
      };
    }

    setHasil(rekomendasi);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">
        Analisis AI Pendaki (Gunung ID: {id})
      </h1>

      <div className="bg-white p-6 rounded shadow mb-6">
        <input
          type="number"
          placeholder="Usia"
          value={usia}
          onChange={(e) => setUsia(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded"
        />

        <input
          type="number"
          placeholder="Berat Badan (kg)"
          value={berat}
          onChange={(e) => setBerat(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded"
        />

        <select
          value={aktivitas}
          onChange={(e) => setAktivitas(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
        >
          <option value="">Pilih Aktivitas Fisik</option>
          <option value="rendah">Rendah</option>
          <option value="sedang">Sedang</option>
          <option value="tinggi">Tinggi</option>
        </select>

        <button
          onClick={handleAnalisis}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Analisis AI
        </button>
      </div>

      {hasil && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">
            Hasil Rekomendasi AI
          </h2>
          <p><strong>Status:</strong> {hasil.status}</p>
          <p><strong>Saran:</strong> {hasil.saran}</p>
          <p><strong>Etika:</strong> {hasil.etika}</p>
        </div>
      )}
    </div>
  );
}

export default DetailGunung;

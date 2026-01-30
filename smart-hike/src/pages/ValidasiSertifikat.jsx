import { useParams } from "react-router-dom";

function ValidasiSertifikat() {
  const { no } = useParams();

  const nama = localStorage.getItem("namaPendaki");
  const noSertifikat = localStorage.getItem("noSertifikatFix");

  const valid = no === noSertifikat;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-100 p-6">
      <div className="bg-white max-w-md w-full rounded-xl shadow-xl p-6 text-center">
        <h1 className="text-2xl font-extrabold text-blue-700 mb-4">
          🔍 Validasi Sertifikat
        </h1>

        {valid ? (
          <>
            <p className="text-green-600 font-bold text-lg mb-3">
              ✅ SERTIFIKAT VALID
            </p>

            <div className="text-left text-sm text-gray-700 space-y-2">
              <p><strong>Nama:</strong> {nama}</p>
              <p><strong>No Sertifikat:</strong> {noSertifikat}</p>
              <p><strong>Status:</strong> Terdaftar</p>
            </div>
          </>
        ) : (
          <p className="text-red-600 font-bold">
            ❌ Sertifikat tidak ditemukan
          </p>
        )}
      </div>
    </div>
  );
}

export default ValidasiSertifikat;

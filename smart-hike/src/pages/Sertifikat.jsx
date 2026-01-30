import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react"; // ✅ FIX DI SINI

import bgGunung from "../assets/images/OIP.jpg";
import watermark from "../assets/images/OIP (1).jpg";

function Sertifikat() {
  const navigate = useNavigate();
  const sertifikatRef = useRef();

  const nama =
    localStorage.getItem("namaPendaki") || "Pendaki Smart Hike";

  const tanggal = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // ===============================
  // NOMOR SERTIFIKAT OTOMATIS (FIX)
  // ===============================
  const getNoSertifikat = () => {
    let nomorFix = localStorage.getItem("noSertifikatFix");
    if (nomorFix) return nomorFix;

    const tahun = new Date().getFullYear();
    let last = localStorage.getItem("noSertifikatCounter");
    last = last ? parseInt(last) + 1 : 1;

    localStorage.setItem("noSertifikatCounter", last);

    const nomor = `SH-${tahun}-${String(last).padStart(6, "0")}`;
    localStorage.setItem("noSertifikatFix", nomor);

    return nomor;
  };

  const noSertifikat = getNoSertifikat();

  // URL VALIDASI QR
  const validasiURL = `${window.location.origin}/validasi/${noSertifikat}`;

  // ===============================
  // EXPORT PDF (ANTI GEPENG)
  // ===============================
  const downloadPDF = async () => {
    const element = sertifikatRef.current;

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const ratio = Math.min(
      pdfWidth / canvas.width,
      pdfHeight / canvas.height
    );

    const finalWidth = canvas.width * ratio;
    const finalHeight = canvas.height * ratio;

    const x = (pdfWidth - finalWidth) / 2;
    const y = (pdfHeight - finalHeight) / 2;

    pdf.addImage(imgData, "JPEG", x, y, finalWidth, finalHeight);
    pdf.save(`Sertifikat-${noSertifikat}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-6 gap-4">

      {/* ================= SERTIFIKAT ================= */}
      <motion.div
        ref={sertifikatRef}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-6xl rounded-xl shadow-2xl overflow-hidden"
        style={{
          aspectRatio: "297 / 210",
          backgroundImage: `url(${bgGunung})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full h-full bg-white/90 backdrop-blur-sm p-12">

          {/* WATERMARK */}
          <img
            src={watermark}
            alt="Watermark"
            className="absolute bottom-8 left-8 w-80 opacity-10 pointer-events-none"
          />

          {/* NOMOR SERTIFIKAT */}
          <p className="absolute right-10 top-8 text-sm text-gray-700">
            No Sertifikat: <strong>{noSertifikat}</strong>
          </p>

          {/* HEADER */}
          <div className="border-b-4 border-blue-700 pb-4 mb-8 text-center">
            <h1 className="text-5xl font-extrabold text-blue-800 tracking-wide">
              SERTIFIKAT APRESIASI
            </h1>
            <p className="text-gray-600 mt-2">
              Etika & Kepedulian Pendakian Gunung
            </p>
          </div>

          {/* ISI */}
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-bold text-lg mb-3">
                Prinsip Pendaki Bertanggung Jawab
              </h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Tidak meninggalkan sampah</li>
                <li>Tidak merusak flora dan fauna</li>
                <li>Menghormati jalur pendakian</li>
                <li>Bertanggung jawab hingga turun</li>
              </ul>

              <p className="italic text-sm text-gray-500 mt-6">
                “Gunung bukan tempat sampah. Pendaki sejati selalu menjaga.”
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-2">
                Sertifikat ini diberikan kepada:
              </p>

              <h2 className="text-4xl font-extrabold underline mb-4">
                {nama}
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Atas kepedulian dan tanggung jawab dalam menjaga
                kebersihan serta kelestarian lingkungan gunung
                dengan menerapkan prinsip
                <strong> “Bawa Turun Sampahmu”.</strong>
              </p>
            </div>
          </div>

          {/* FOOTER + QR */}
          <div className="grid grid-cols-4 mt-14 text-sm text-center items-end">

            <div>
              <p>Ketua Smart Hike</p>
              <div className="border-t mt-10 mx-8"></div>
            </div>

            <div>
              <p>Ditetapkan pada</p>
              <p className="font-semibold">{tanggal}</p>
            </div>

            <div>
              <p>Koordinator Lapangan</p>
              <div className="border-t mt-10 mx-8"></div>
            </div>

            {/* QR CODE */}
            <div className="flex flex-col items-center gap-1">
              <QRCodeCanvas
                value={validasiURL}
                size={90}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
                includeMargin
              />
              <p className="text-[10px] text-gray-600">
                Scan untuk validasi
              </p>
            </div>

          </div>
        </div>
      </motion.div>

      {/* ================= BUTTON ================= */}
      <div className="flex gap-4">
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700"
        >
          📄 Download PDF
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          ⬅️ Dashboard
        </button>
      </div>
    </div>
  );
}

export default Sertifikat;

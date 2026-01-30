import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/* ================= PAGES ================= */
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Gunung from "./pages/Gunung";
import DetailGunung from "./pages/DetailGunung";
import WasteLog from "./pages/WasteLog";
import Rapor from "./pages/Rapor";
import Sertifikat from "./pages/Sertifikat";
import ValidasiSertifikat from "./pages/ValidasiSertifikat";
import Rekomendasi from "./pages/Rekomendasi"; // 🤖 AI REKOMENDASI

/* ================= COMPONENTS ================= */
import ProtectedRoute from "./components/ProtectedRoute";
import PageTransition from "./components/PageTransition";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* ================= LOGIN ================= */}
        <Route
          path="/"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />

        {/* ================= DASHBOARD ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <PageTransition>
                <Dashboard />
              </PageTransition>
            </ProtectedRoute>
          }
        />

        {/* ================= DATA GUNUNG ================= */}
        <Route
          path="/gunung"
          element={
            <ProtectedRoute>
              <PageTransition>
                <Gunung />
              </PageTransition>
            </ProtectedRoute>
          }
        />

        <Route
          path="/gunung/:id"
          element={
            <ProtectedRoute>
              <PageTransition>
                <DetailGunung />
              </PageTransition>
            </ProtectedRoute>
          }
        />

        {/* ================= AI REKOMENDASI ================= */}
        <Route
          path="/rekomendasi"
          element={
            <ProtectedRoute>
              <PageTransition>
                <Rekomendasi />
              </PageTransition>
            </ProtectedRoute>
          }
        />

        {/* ================= WASTE LOG ================= */}
        <Route
          path="/wastelog"
          element={
            <ProtectedRoute>
              <PageTransition>
                <WasteLog />
              </PageTransition>
            </ProtectedRoute>
          }
        />

        {/* ================= RAPOR ================= */}
        <Route
          path="/rapor"
          element={
            <ProtectedRoute>
              <PageTransition>
                <Rapor />
              </PageTransition>
            </ProtectedRoute>
          }
        />

        {/* ================= SERTIFIKAT ================= */}
        <Route
          path="/sertifikat"
          element={
            <ProtectedRoute>
              <PageTransition>
                <Sertifikat />
              </PageTransition>
            </ProtectedRoute>
          }
        />

        {/* ================= VALIDASI QR ================= */}
        <Route
          path="/validasi/:no"
          element={
            <PageTransition>
              <ValidasiSertifikat />
            </PageTransition>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </AnimatePresence>
  );
}

export default App;

import { useNavigate } from "react-router-dom";

function Gunung() {
  const navigate = useNavigate();

  const dataGunung = [
    {
      id: 1,
      nama: "Gunung Semeru",
      tinggi: "3.676 mdpl",
      level: "Sulit",
    },
    {
      id: 2,
      nama: "Gunung Rinjani",
      tinggi: "3.726 mdpl",
      level: "Sulit",
    },
    {
      id: 3,
      nama: "Gunung Merbabu",
      tinggi: "3.145 mdpl",
      level: "Sedang",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Data Gunung Pendakian
      </h1>

      <div className="grid gap-4 md:grid-cols-3">
        {dataGunung.map((gunung) => (
          <div
            key={gunung.id}
            className="bg-white p-4 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold">{gunung.nama}</h2>
            <p>Tinggi: {gunung.tinggi}</p>
            <p>Level: {gunung.level}</p>

            <button
              onClick={() => navigate(`/gunung/${gunung.id}`)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
            >
              Detail & Rekomendasi
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gunung;

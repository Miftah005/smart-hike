import gunungData from "../data/gunungData";

export function aiJawab(pertanyaan) {
  const q = pertanyaan.toLowerCase();
  let hasil = [];

  if (q.includes("pemula")) {
    hasil = gunungData.filter(g => g.level === "Mudah");
  } 
  else if (q.includes("aman")) {
    hasil = gunungData.filter(g => g.rekomendasi === true);
  } 
  else if (q.includes("tidak disarankan")) {
    hasil = gunungData.filter(g => g.rekomendasi === false);
  } 
  else if (q.includes("tertinggi")) {
    hasil = [
      [...gunungData].sort((a, b) => b.tinggi - a.tinggi)[0]
    ];
  } 
  else {
    return {
      text: "Maaf 🤖 aku belum memahami pertanyaan tersebut. Coba tanya tentang gunung pemula, aman, atau tertinggi.",
      data: []
    };
  }

  return {
    text: "Sebagai AI Smart Hike yang mengutamakan keselamatan dan etika 🌱, ini rekomendasiku:",
    data: hasil
  };
}

const gunungData = [
  {
    id: 1,
    nama: "Gunung Merapi",
    tinggi: 2930,
    level: "Sulit",
    sampah: "Tinggi",

    // AI FIELD
    rekomendasi: false,
    berbahaya: true,
    tingkatRisiko: "Tinggi",

    alasan: "Aktivitas vulkanik aktif dan tingkat risiko tinggi",
    alasanBahaya:
      "Gunung Merapi masih aktif secara vulkanik, sering terjadi erupsi dan awan panas. Tidak disarankan untuk pendaki umum."
  },

  {
    id: 2,
    nama: "Gunung Prau",
    tinggi: 2565,
    level: "Mudah",
    sampah: "Rendah",

    // AI FIELD
    rekomendasi: true,
    berbahaya: false,
    tingkatRisiko: "Rendah",

    alasan: "Jalur ramah pemula dan etika pendakian relatif baik",
    alasanBahaya: ""
  },

  {
    id: 3,
    nama: "Gunung Semeru",
    tinggi: 3676,
    level: "Sulit",
    sampah: "Sedang",

    // AI FIELD
    rekomendasi: false,
    berbahaya: true,
    tingkatRisiko: "Tinggi",

    alasan: "Pendakian panjang dan medan berat",
    alasanBahaya:
      "Medan ekstrem, cuaca cepat berubah, dan jalur panjang. Hanya disarankan untuk pendaki berpengalaman."
  }
];

export default gunungData;

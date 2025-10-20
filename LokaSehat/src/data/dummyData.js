export const diseaseData = [
  // --- Jakarta Pusat (8 kecamatan) ---
  {id: 1, lat: -6.1765, lng: 106.8224, name: "Gambir", diseases: ["Influenza"], level: "medium", safety: "Aman", precautions: ["Gunakan masker", "Cuci tangan"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Gambir", phone: "(021) 3456789"},
      {id: 2, name: "RSUD Gambir", phone: "(021) 4567890"},
      {id: 3, name: "Klinik Gambir Sehat", phone: "(021) 5678901"}
    ],
    warning: {
      temperature: 35.8,
      message: "Waspada heat stroke, minum air yang cukup dan hindari paparan sinar matahari langsung."
    }
  },
  {id: 2, lat: -6.1952, lng: 106.8380, name: "Menteng", diseases: ["DBD"], level: "high", safety: "Waspada", precautions: ["Bersihkan lingkungan", "Gunakan lotion anti nyamuk"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Menteng", phone: "(021) 2345678"},
      {id: 2, name: "RS Menteng Sejahtera", phone: "(021) 3456789"},
      {id: 3, name: "Klinik Menteng", phone: "(021) 4567890"}
    ],
    warning: {
      temperature: 34.2,
      message: "Tingkat nyamuk Aedes tinggi, lakukan fogging dan bersihkan tempat penampungan air."
    }
  },
  {id: 3, lat: -6.1869, lng: 106.8113, name: "Tanah Abang", diseases: ["COVID-19"], level: "high", safety: "Waspada", precautions: ["Hindari keramaian", "Tes rutin"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Tanah Abang", phone: "(021) 1234567"},
      {id: 2, name: "RSUD Tanah Abang", phone: "(021) 2345678"},
      {id: 3, name: "Klinik Abang Sehat", phone: "(021) 3456789"}
    ],
    warning: {
      temperature: 36.1,
      message: "Tingkat keramaian tinggi, gunakan masker dan jaga jarak untuk mencegah penularan COVID-19."
    }
  },
  {id: 4, lat: -6.1812, lng: 106.8684, name: "Cempaka Putih", diseases: ["Influenza"], level: "low", safety: "Sangat Aman", precautions: ["Jaga daya tahan tubuh"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Cempaka Putih", phone: "(021) 9876543"},
      {id: 2, name: "RS Cempaka Sehat", phone: "(021) 8765432"},
      {id: 3, name: "Klinik Putih Bersih", phone: "(021) 7654321"}
    ],
    warning: null
  },
  {id: 5, lat: -6.1912, lng: 106.8547, name: "Johar Baru", diseases: ["DBD"], level: "medium", safety: "Aman", precautions: ["Bersihkan lingkungan", "Gunakan obat nyamuk"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Johar Baru", phone: "(021) 6543210"},
      {id: 2, name: "RS Johar Baru", phone: "(021) 5432109"},
      {id: 3, name: "Klinik Baru Sehat", phone: "(021) 4321098"}
    ],
    warning: {
      temperature: 35.5,
      message: "Waspada DBD, lakukan 3M Plus (menguras, menutup, mendaur ulang)."
    }
  },
  {id: 6, lat: -6.1862, lng: 106.8447, name: "Senen", diseases: ["Influenza"], level: "low", safety: "Sangat Aman", precautions: ["Istirahat cukup"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Senen", phone: "(021) 3210987"},
      {id: 2, name: "RS Senen Sehat", phone: "(021) 2109876"},
      {id: 3, name: "Klinik Senen", phone: "(021) 1098765"}
    ],
    warning: null
  },
  {id: 7, lat: -6.1595, lng: 106.8458, name: "Kemayoran", diseases: ["COVID-19"], level: "medium", safety: "Aman", precautions: ["Vaksinasi", "Gunakan masker"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Kemayoran", phone: "(021) 8901234"},
      {id: 2, name: "RS Kemayoran", phone: "(021) 9012345"},
      {id: 3, name: "Klinik Kemayoran Sehat", phone: "(021) 0123456"}
    ],
    warning: {
      temperature: 36.3,
      message: "Kasus COVID-19 meningkat, disarankan untuk vaksinasi booster."
    }
  },
  {id: 8, lat: -6.1568, lng: 106.8318, name: "Sawah Besar", diseases: ["Influenza", "DBD"], level: "medium", safety: "Aman", precautions: ["Cuci tangan", "Bersihkan rumah"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Sawah Besar", phone: "(021) 7654321"},
      {id: 2, name: "RS Sawah Besar", phone: "(021) 6543210"},
      {id: 3, name: "Klinik Besar Sehat", phone: "(021) 5432109"}
    ],
    warning: {
      temperature: 35.9,
      message: "Waspada influenza musiman dan DBD, jaga kebersihan lingkungan."
    }
  },

  // --- Jakarta Utara (6 kecamatan) ---
  {id: 9, lat: -6.1163, lng: 106.8775, name: "Tanjung Priok", diseases: ["COVID-19"], level: "high", safety: "Waspada", precautions: ["Tes rutin", "Gunakan masker"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Tanjung Priok", phone: "(021) 2345678"},
      {id: 2, name: "RS Priok Sehat", phone: "(021) 3456789"},
      {id: 3, name: "Klinik Tanjung", phone: "(021) 4567890"}
    ],
    warning: {
      temperature: 36.5,
      message: "Area pelabuhan, waspada impor kasus COVID-19 varian baru."
    }
  },
  {id: 10, lat: -6.1254, lng: 106.9043, name: "Koja", diseases: ["DBD"], level: "medium", safety: "Aman", precautions: ["Bersihkan got", "Gunakan lotion anti nyamuk"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Koja", phone: "(021) 5678901"},
      {id: 2, name: "RS Koja", phone: "(021) 6789012"},
      {id: 3, name: "Klinik Koja Sehat", phone: "(021) 7890123"}
    ],
    warning: {
      temperature: 35.2,
      message: "Banyak genangan air, waspada perkembangan nyamuk Aedes."
    }
  },
  {id: 11, lat: -6.1597, lng: 106.9082, name: "Kelapa Gading", diseases: ["Influenza", "DBD"], level: "medium", safety: "Aman", precautions: ["Jaga kebersihan", "Gunakan masker"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Kelapa Gading", phone: "(021) 8901234"},
      {id: 2, name: "RS Gading Medika", phone: "(021) 9012345"},
      {id: 3, name: "Klinik Gading Sehat", phone: "(021) 0123456"}
    ],
    warning: {
      temperature: 35.7,
      message: "Waspada penyakit musiman, jaga daya tahan tubuh."
    }
  },
  {id: 12, lat: -6.1248, lng: 106.9442, name: "Cilincing", diseases: ["DBD"], level: "high", safety: "Waspada", precautions: ["Bersihkan lingkungan", "Fogging"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Cilincing", phone: "(021) 1234567"},
      {id: 2, name: "RS Cilincing Sehat", phone: "(021) 2345678"},
      {id: 3, name: "Klinik Cilincing", phone: "(021) 3456789"}
    ],
    warning: {
      temperature: 34.8,
      message: "Tingkat DBD tinggi, lakukan pemberantasan sarang nyamuk."
    }
  },
  {id: 13, lat: -6.1352, lng: 106.8379, name: "Pademangan", diseases: ["COVID-19"], level: "medium", safety: "Aman", precautions: ["Vaksinasi", "Hindari kerumunan"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Pademangan", phone: "(021) 4567890"},
      {id: 2, name: "RS Pademangan", phone: "(021) 5678901"},
      {id: 3, name: "Klinik Pademangan Sehat", phone: "(021) 6789012"}
    ],
    warning: {
      temperature: 36.2,
      message: "Kasus COVID-19 meningkat, patuhi protokol kesehatan."
    }
  },
  {id: 14, lat: -6.1229, lng: 106.7884, name: "Penjaringan", diseases: ["DBD", "Diare"], level: "high", safety: "Waspada", precautions: ["Jaga kebersihan", "Air bersih"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Penjaringan", phone: "(021) 7890123"},
      {id: 2, name: "RS Penjaringan", phone: "(021) 8901234"},
      {id: 3, name: "Klinik Penjaringan", phone: "(021) 9012345"}
    ],
    warning: {
      temperature: 35.4,
      message: "Waspada penyakit menular, pastikan kebersihan makanan dan minuman."
    }
  },

  // --- Jakarta Barat (8 kecamatan) ---
  {id: 15, lat: -6.1479, lng: 106.7459, name: "Cengkareng", diseases: ["DBD"], level: "high", safety: "Waspada", precautions: ["Bersihkan lingkungan", "Gunakan kelambu"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Cengkareng", phone: "(021) 2345678"},
      {id: 2, name: "RS Cengkareng", phone: "(021) 3456789"},
      {id: 3, name: "Klinik Cengkareng Sehat", phone: "(021) 4567890"}
    ],
    warning: {
      temperature: 34.7,
      message: "Tingkat DBD tinggi, lakukan 3M Plus secara rutin."
    }
  },
  {id: 16, lat: -6.1592, lng: 106.7898, name: "Grogol Petamburan", diseases: ["COVID-19", "Influenza"], level: "medium", safety: "Aman", precautions: ["Gunakan masker", "Cuci tangan"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Grogol", phone: "(021) 5678901"},
      {id: 2, name: "RS Grogol", phone: "(021) 6789012"},
      {id: 3, name: "Klinik Grogol Sehat", phone: "(021) 7890123"}
    ],
    warning: {
      temperature: 36.0,
      message: "Waspada penularan penyakit pernapasan di tempat umum."
    }
  },
  {id: 17, lat: -6.1432, lng: 106.8156, name: "Taman Sari", diseases: ["DBD"], level: "medium", safety: "Aman", precautions: ["Bersihkan bak mandi", "Gunakan lotion"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Taman Sari", phone: "(021) 8901234"},
      {id: 2, name: "RS Taman Sari", phone: "(021) 9012345"},
      {id: 3, name: "Klinik Taman Sari", phone: "(021) 0123456"}
    ],
    warning: {
      temperature: 35.1,
      message: "Waspada DBD, perhatikan genangan air di sekitar rumah."
    }
  },
  {id: 18, lat: -6.1542, lng: 106.8001, name: "Tambora", diseases: ["Diare", "DBD"], level: "high", safety: "Waspada", precautions: ["Jaga kebersihan", "Air matang"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Tambora", phone: "(021) 1234567"},
      {id: 2, name: "RS Tambora", phone: "(021) 2345678"},
      {id: 3, name: "Klinik Tambora", phone: "(021) 3456789"}
    ],
    warning: {
      temperature: 35.3,
      message: "Waspada penyakit menular melalui air dan makanan."
    }
  },
  {id: 19, lat: -6.1923, lng: 106.7689, name: "Kebon Jeruk", diseases: ["Influenza"], level: "low", safety: "Sangat Aman", precautions: ["Istirahat cukup", "Vitamin"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Kebon Jeruk", phone: "(021) 4567890"},
      {id: 2, name: "RS Kebon Jeruk", phone: "(021) 5678901"},
      {id: 3, name: "Klinik Kebon Jeruk", phone: "(021) 6789012"}
    ],
    warning: null
  },
  {id: 20, lat: -6.1379, lng: 106.7054, name: "Kalideres", diseases: ["DBD"], level: "medium", safety: "Aman", precautions: ["Bersihkan lingkungan", "Abate"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Kalideres", phone: "(021) 7890123"},
      {id: 2, name: "RS Kalideres", phone: "(021) 8901234"},
      {id: 3, name: "Klinik Kalideres", phone: "(021) 9012345"}
    ],
    warning: {
      temperature: 34.9,
      message: "Waspada DBD, lakukan pemberantasan sarang nyamuk."
    }
  },
  {id: 21, lat: -6.2012, lng: 106.7892, name: "Palmerah", diseases: ["COVID-19"], level: "medium", safety: "Aman", precautions: ["Vaksinasi", "Jaga jarak"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Palmerah", phone: "(021) 0123456"},
      {id: 2, name: "RS Palmerah", phone: "(021) 1234567"},
      {id: 3, name: "Klinik Palmerah", phone: "(021) 2345678"}
    ],
    warning: {
      temperature: 36.1,
      message: "Kasus COVID-19 meningkat, hindari kerumunan."
    }
  },
  {id: 22, lat: -6.1887, lng: 106.7489, name: "Kembangan", diseases: ["Influenza"], level: "low", safety: "Sangat Aman", precautions: ["Jaga daya tahan tubuh"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Kembangan", phone: "(021) 3456789"},
      {id: 2, name: "RS Kembangan", phone: "(021) 4567890"},
      {id: 3, name: "Klinik Kembangan", phone: "(021) 5678901"}
    ],
    warning: null
  },

  // --- Jakarta Selatan (10 kecamatan) ---
  {id: 23, lat: -6.2456, lng: 106.8542, name: "Tebet", diseases: ["DBD"], level: "medium", safety: "Aman", precautions: ["Bersihkan lingkungan", "Gunakan lotion"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Tebet", phone: "(021) 6789012"},
      {id: 2, name: "RS Tebet", phone: "(021) 7890123"},
      {id: 3, name: "Klinik Tebet", phone: "(021) 8901234"}
    ],
    warning: {
      temperature: 35.2,
      message: "Waspada DBD, perhatikan genangan air di sekitar rumah."
    }
  },
  {id: 24, lat: -6.2234, lng: 106.8257, name: "Setiabudi", diseases: ["COVID-19"], level: "medium", safety: "Aman", precautions: ["Masker", "Cuci tangan"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Setiabudi", phone: "(021) 9012345"},
      {id: 2, name: "RS Setiabudi", phone: "(021) 0123456"},
      {id: 3, name: "Klinik Setiabudi", phone: "(021) 1234567"}
    ],
    warning: {
      temperature: 36.0,
      message: "Kasus COVID-19 meningkat, patuhi protokol kesehatan."
    }
  },
  {id: 25, lat: -6.2512, lng: 106.8227, name: "Mampang Prapatan", diseases: ["Influenza"], level: "low", safety: "Sangat Aman", precautions: ["Istirahat cukup"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Mampang", phone: "(021) 2345678"},
      {id: 2, name: "RS Mampang", phone: "(021) 3456789"},
      {id: 3, name: "Klinik Mampang", phone: "(021) 4567890"}
    ],
    warning: null
  },
  {id: 26, lat: -6.2912, lng: 106.8423, name: "Pasar Minggu", diseases: ["DBD", "Diare"], level: "medium", safety: "Aman", precautions: ["Kebersihan", "Air bersih"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Pasar Minggu", phone: "(021) 5678901"},
      {id: 2, name: "RS Pasar Minggu", phone: "(021) 6789012"},
      {id: 3, name: "Klinik Pasar Minggu", phone: "(021) 7890123"}
    ],
    warning: {
      temperature: 35.5,
      message: "Waspada penyakit menular, jaga kebersihan lingkungan."
    }
  },
  {id: 27, lat: -6.3312, lng: 106.8234, name: "Jagakarsa", diseases: ["Influenza"], level: "low", safety: "Sangat Aman", precautions: ["Vitamin", "Istirahat"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Jagakarsa", phone: "(021) 8901234"},
      {id: 2, name: "RS Jagakarsa", phone: "(021) 9012345"},
      {id: 3, name: "Klinik Jagakarsa", phone: "(021) 0123456"}
    ],
    warning: null
  },
  {id: 28, lat: -6.2567, lng: 106.8456, name: "Pancoran", diseases: ["COVID-19"], level: "medium", safety: "Aman", precautions: ["Vaksinasi", "Masker"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Pancoran", phone: "(021) 1234567"},
      {id: 2, name: "RS Pancoran", phone: "(021) 2345678"},
      {id: 3, name: "Klinik Pancoran", phone: "(021) 3456789"}
    ],
    warning: {
      temperature: 36.2,
      message: "Kasus COVID-19 meningkat, hindari kerumunan."
    }
  },
  {id: 29, lat: -6.2891, lng: 106.7989, name: "Cilandak", diseases: ["DBD"], level: "medium", safety: "Aman", precautions: ["Bersihkan lingkungan", "Fogging"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Cilandak", phone: "(021) 4567890"},
      {id: 2, name: "RS Cilandak", phone: "(021) 5678901"},
      {id: 3, name: "Klinik Cilandak", phone: "(021) 6789012"}
    ],
    warning: {
      temperature: 34.8,
      message: "Waspada DBD, lakukan pemberantasan sarang nyamuk."
    }
  },
  {id: 30, lat: -6.2432, lng: 106.7998, name: "Kebayoran Baru", diseases: ["Influenza"], level: "low", safety: "Sangat Aman", precautions: ["Jaga daya tahan tubuh"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Kebayoran Baru", phone: "(021) 7890123"},
      {id: 2, name: "RS Kebayoran Baru", phone: "(021) 8901234"},
      {id: 3, name: "Klinik Kebayoran Baru", phone: "(021) 9012345"}
    ],
    warning: null
  },
  {id: 31, lat: -6.2345, lng: 106.7765, name: "Kebayoran Lama", diseases: ["DBD"], level: "medium", safety: "Aman", precautions: ["Bersihkan lingkungan", "Abate"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Kebayoran Lama", phone: "(021) 0123456"},
      {id: 2, name: "RS Kebayoran Lama", phone: "(021) 1234567"},
      {id: 3, name: "Klinik Kebayoran Lama", phone: "(021) 2345678"}
    ],
    warning: {
      temperature: 35.0,
      message: "Waspada DBD, perhatikan genangan air di sekitar rumah."
    }
  },
  {id: 32, lat: -6.2654, lng: 106.7456, name: "Pesanggrahan", diseases: ["COVID-19"], level: "low", safety: "Sangat Aman", precautions: ["Masker", "Cuci tangan"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Pesanggrahan", phone: "(021) 3456789"},
      {id: 2, name: "RS Pesanggrahan", phone: "(021) 4567890"},
      {id: 3, name: "Klinik Pesanggrahan", phone: "(021) 5678901"}
    ],
    warning: null
  },

  // --- Jakarta Timur (10 kecamatan) ---
  {id: 33, lat: -6.2109, lng: 106.8654, name: "Matraman", diseases: ["DBD"], level: "high", safety: "Waspada", precautions: ["Bersihkan lingkungan", "Gunakan kelambu"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Matraman", phone: "(021) 6789012"},
      {id: 2, name: "RS Matraman", phone: "(021) 7890123"},
      {id: 3, name: "Klinik Matraman", phone: "(021) 8901234"}
    ],
    warning: {
      temperature: 34.6,
      message: "Tingkat DBD tinggi, lakukan 3M Plus secara rutin."
    }
  },
  {id: 34, lat: -6.1876, lng: 106.9078, name: "Pulo Gadung", diseases: ["COVID-19", "Influenza"], level: "medium", safety: "Aman", precautions: ["Masker", "Cuci tangan"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Pulo Gadung", phone: "(021) 9012345"},
      {id: 2, name: "RS Pulo Gadung", phone: "(021) 0123456"},
      {id: 3, name: "Klinik Pulo Gadung", phone: "(021) 1234567"}
    ],
    warning: {
      temperature: 36.1,
      message: "Waspada penularan penyakit pernapasan di tempat umum."
    }
  },
  {id: 35, lat: -6.2245, lng: 106.8723, name: "Jatinegara", diseases: ["DBD"], level: "high", safety: "Waspada", precautions: ["Bersihkan bak mandi", "Gunakan lotion"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Jatinegara", phone: "(021) 2345678"},
      {id: 2, name: "RS Jatinegara", phone: "(021) 3456789"},
      {id: 3, name: "Klinik Jatinegara", phone: "(021) 4567890"}
    ],
    warning: {
      temperature: 34.7,
      message: "Tingkat DBD tinggi, lakukan pemberantasan sarang nyamuk."
    }
  },
  {id: 36, lat: -6.2345, lng: 106.9087, name: "Duren Sawit", diseases: ["Diare", "DBD"], level: "medium", safety: "Aman", precautions: ["Jaga kebersihan", "Air matang"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Duren Sawit", phone: "(021) 5678901"},
      {id: 2, name: "RS Duren Sawit", phone: "(021) 6789012"},
      {id: 3, name: "Klinik Duren Sawit", phone: "(021) 7890123"}
    ],
    warning: {
      temperature: 35.4,
      message: "Waspada penyakit menular melalui air dan makanan."
    }
  },
  {id: 37, lat: -6.1856, lng: 106.9456, name: "Cakung", diseases: ["Influenza"], level: "low", safety: "Sangat Aman", precautions: ["Istirahat cukup", "Vitamin"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Cakung", phone: "(021) 8901234"},
      {id: 2, name: "RS Cakung", phone: "(021) 9012345"},
      {id: 3, name: "Klinik Cakung", phone: "(021) 0123456"}
    ],
    warning: null
  },
  {id: 38, lat: -6.2765, lng: 106.8678, name: "Kramat Jati", diseases: ["DBD"], level: "medium", safety: "Aman", precautions: ["Bersihkan lingkungan", "Abate"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Kramat Jati", phone: "(021) 1234567"},
      {id: 2, name: "RS Kramat Jati", phone: "(021) 2345678"},
      {id: 3, name: "Klinik Kramat Jati", phone: "(021) 3456789"}
    ],
    warning: {
      temperature: 35.1,
      message: "Waspada DBD, lakukan pemberantasan sarang nyamuk."
    }
  },
  {id: 39, lat: -6.2654, lng: 106.8987, name: "Makasar", diseases: ["COVID-19"], level: "medium", safety: "Aman", precautions: ["Vaksinasi", "Jaga jarak"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Makasar", phone: "(021) 4567890"},
      {id: 2, name: "RS Makasar", phone: "(021) 5678901"},
      {id: 3, name: "Klinik Makasar", phone: "(021) 6789012"}
    ],
    warning: {
      temperature: 36.3,
      message: "Kasus COVID-19 meningkat, hindari kerumunan."
    }
  },
  {id: 40, lat: -6.3245, lng: 106.8765, name: "Ciracas", diseases: ["Influenza"], level: "low", safety: "Sangat Aman", precautions: ["Jaga daya tahan tubuh"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Ciracas", phone: "(021) 7890123"},
      {id: 2, name: "RS Ciracas", phone: "(021) 8901234"},
      {id: 3, name: "Klinik Ciracas", phone: "(021) 9012345"}
    ],
    warning: null
  },
  {id: 41, lat: -6.3345, lng: 106.9087, name: "Cipayung", diseases: ["DBD"], level: "medium", safety: "Aman", precautions: ["Bersihkan lingkungan", "Gunakan lotion"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Cipayung", phone: "(021) 0123456"},
      {id: 2, name: "RS Cipayung", phone: "(021) 1234567"},
      {id: 3, name: "Klinik Cipayung", phone: "(021) 2345678"}
    ],
    warning: {
      temperature: 35.2,
      message: "Waspada DBD, perhatikan genangan air di sekitar rumah."
    }
  },
  {id: 42, lat: -6.3243, lng: 106.8565, name: "Pasar Rebo", diseases: ["COVID-19"], level: "low", safety: "Sangat Aman", precautions: ["Masker", "Cuci tangan"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Pasar Rebo", phone: "(021) 3456789"},
      {id: 2, name: "RS Pasar Rebo", phone: "(021) 4567890"},
      {id: 3, name: "Klinik Pasar Rebo", phone: "(021) 5678901"}
    ],
    warning: null
  },

  // --- Kepulauan Seribu (2 kecamatan) ---
  {id: 43, lat: -5.6145, lng: 106.6300, name: "Kepulauan Seribu Utara", diseases: ["Diare"], level: "medium", safety: "Aman", precautions: ["Air bersih", "Kebersihan makanan"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Pulau Seribu Utara", phone: "(021) 6789012"},
      {id: 2, name: "RS Pulau Seribu", phone: "(021) 7890123"},
      {id: 3, name: "Klinik Pulau Seribu", phone: "(021) 8901234"}
    ],
    warning: {
      temperature: 33.5,
      message: "Waspada penyakit menular melalui air dan makanan, pastikan kebersihan."
    }
  },
  {id: 44, lat: -5.6145, lng: 106.6300, name: "Kepulauan Seribu Selatan", diseases: ["Influenza"], level: "low", safety: "Sangat Aman", precautions: ["Istirahat cukup", "Vitamin"],
    emergencyContacts: [
      {id: 1, name: "Puskesmas Pulau Seribu Selatan", phone: "(021) 9012345"},
      {id: 2, name: "RS Pulau Seribu", phone: "(021) 0123456"},
      {id: 3, name: "Klinik Pulau Seribu", phone: "(021) 1234567"}
    ],
    warning: null
  }
];

// Data default untuk emergency contacts
export const defaultEmergencyContacts = [
  {id: 1, name: "Puskesmas Terdekat", phone: "(021) 7654321"},
  {id: 2, name: "Rumah Sakit Rujukan", phone: "(021) 1234567"},
  {id: 3, name: "Ambulans", phone: "119"}
];

// Data default untuk warning
export const defaultWarning = {
  temperature: 34.2,
  message: "Shivering, Confusion, Drowsiness. Seek warm shelter immediately."
};
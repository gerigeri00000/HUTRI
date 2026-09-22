// DATA SIMULASI - Monitoring Ekonomi HUT Nunukan 2026

export const kpiData = {
  totalPengunjung: 25430,
  rataRataPengeluaran: 175000,
  estimasiTotalTransaksi: 4380000000,
  jumlahUsaha: 185,
};

export const trenPengunjungHarian = [
  { tanggal: "29 Sep", jumlah: 850 },
  { tanggal: "30 Sep", jumlah: 1200 },
  { tanggal: "1 Okt", jumlah: 1450 },
  { tanggal: "2 Okt", jumlah: 2100 },
  { tanggal: "3 Okt", jumlah: 1800 },
  { tanggal: "4 Okt", jumlah: 2300 },
  { tanggal: "5 Okt", jumlah: 2800 },
  { tanggal: "6 Okt", jumlah: 2500 },
  { tanggal: "7 Okt", jumlah: 1900 },
  { tanggal: "8 Okt", jumlah: 1600 },
  { tanggal: "9 Okt", jumlah: 2200 },
  { tanggal: "10 Okt", jumlah: 2700 },
  { tanggal: "11 Okt", jumlah: 1500 },
];

export const estimasiTransaksiHarian = [
  { tanggal: "29 Sep", nilai: 148750000 },
  { tanggal: "30 Sep", nilai: 210000000 },
  { tanggal: "1 Okt", nilai: 253750000 },
  { tanggal: "2 Okt", nilai: 367500000 },
  { tanggal: "3 Okt", nilai: 315000000 },
  { tanggal: "4 Okt", nilai: 402500000 },
  { tanggal: "5 Okt", nilai: 490000000 },
  { tanggal: "6 Okt", nilai: 437500000 },
  { tanggal: "7 Okt", nilai: 332500000 },
  { tanggal: "8 Okt", nilai: 280000000 },
  { tanggal: "9 Okt", nilai: 385000000 },
  { tanggal: "10 Okt", nilai: 472500000 },
  { tanggal: "11 Okt", nilai: 262500000 },
];

export const komposisiTransaksi = [
  { kategori: "Kuliner", nilai: 1800000000, persen: 41 },
  { kategori: "Hotel", nilai: 800000000, persen: 18 },
  { kategori: "Transportasi", nilai: 600000000, persen: 14 },
  { kategori: "Belanja", nilai: 700000000, persen: 16 },
  { kategori: "Hiburan", nilai: 480000000, persen: 11 },
];

export const jamKunjungan = [
  { jam: "06:00", jumlah: 120 },
  { jam: "08:00", jumlah: 340 },
  { jam: "10:00", jumlah: 580 },
  { jam: "12:00", jumlah: 920 },
  { jam: "14:00", jumlah: 1150 },
  { jam: "16:00", jumlah: 1380 },
  { jam: "18:00", jumlah: 1200 },
  { jam: "20:00", jumlah: 850 },
  { jam: "22:00", jumlah: 420 },
];

export const ringkasanHariIni = {
  pengunjung: 3250,
  estimasiTransaksi: 560000000,
  lokasiTerpadat: "Alun-Alun Nunukan",
  usahaAktif: 75,
};

export const monitoringPengunjungList = [
  {
    id: 1,
    tanggal: "02 Oktober 2026",
    lokasi: "Alun-Alun Nunukan",
    jumlahMasuk: 4250,
    jumlahKeluar: 3800,
    status: "Aktif",
  },
  {
    id: 2,
    tanggal: "02 Oktober 2026",
    lokasi: "Pantai Sei Pancang",
    jumlahMasuk: 1850,
    jumlahKeluar: 1650,
    status: "Aktif",
  },
  {
    id: 3,
    tanggal: "01 Oktober 2026",
    lokasi: "Alun-Alun Nunukan",
    jumlahMasuk: 3920,
    jumlahKeluar: 3750,
    status: "Selesai",
  },
  {
    id: 4,
    tanggal: "01 Oktober 2026",
    lokasi: "Taman Kota",
    jumlahMasuk: 2100,
    jumlahKeluar: 1980,
    status: "Selesai",
  },
  {
    id: 5,
    tanggal: "30 September 2026",
    lokasi: "Pantai Sei Pancang",
    jumlahMasuk: 1560,
    jumlahKeluar: 1490,
    status: "Selesai",
  },
];

export const aktivitasUsahaList = [
  {
    id: 1,
    namaUsaha: "Warung Kopi Pagi",
    kategori: "Kuliner",
    lokasi: "Alun-Alun Nunukan",
    status: "Aktif",
    estimasiTransaksi: 12500000,
  },
  {
    id: 2,
    namaUsaha: "Tenda UMKM Kerajinan Lokal",
    kategori: "UMKM",
    lokasi: "Alun-Alun Nunukan",
    status: "Aktif",
    estimasiTransaksi: 8200000,
  },
  {
    id: 3,
    namaUsaha: "Stand Makanan Tradisional",
    kategori: "Kuliner",
    lokasi: "Pantai Sei Pancang",
    status: "Aktif",
    estimasiTransaksi: 15800000,
  },
  {
    id: 4,
    namaUsaha: "Mini Market 24 Jam",
    kategori: "Retail",
    lokasi: "Taman Kota",
    status: "Aktif",
    estimasiTransaksi: 22000000,
  },
  {
    id: 5,
    namaUsaha: "Booth Permainan Anak",
    kategori: "Hiburan",
    lokasi: "Alun-Alun Nunukan",
    status: "Aktif",
    estimasiTransaksi: 9500000,
  },
  {
    id: 6,
    namaUsaha: "Kedai Es Kelapa",
    kategori: "Kuliner",
    lokasi: "Pantai Sei Pancang",
    status: "Nonaktif",
    estimasiTransaksi: 0,
  },
];

export const hotelList = [
  {
    id: 1,
    namaHotel: "Hotel Nunukan Plaza",
    jumlahKamar: 45,
    hunian: 42,
    status: "Penuh",
    okupansi: 93,
  },
  {
    id: 2,
    namaHotel: "Penginapan Pantai Indah",
    jumlahKamar: 28,
    hunian: 24,
    status: "Tersedia",
    okupansi: 86,
  },
  {
    id: 3,
    namaHotel: "Hotel Borneo Inn",
    jumlahKamar: 36,
    hunian: 35,
    status: "Penuh",
    okupansi: 97,
  },
  {
    id: 4,
    namaHotel: "Wisma Sejahtera",
    jumlahKamar: 18,
    hunian: 14,
    status: "Tersedia",
    okupansi: 78,
  },
  {
    id: 5,
    namaHotel: "Hotel Kalimantan",
    jumlahKamar: 52,
    hunian: 48,
    status: "Tersedia",
    okupansi: 92,
  },
];

export const okupansiHotelTren = [
  { tanggal: "29 Sep", okupansi: 45 },
  { tanggal: "30 Sep", okupansi: 62 },
  { tanggal: "1 Okt", okupansi: 78 },
  { tanggal: "2 Okt", okupansi: 89 },
  { tanggal: "3 Okt", okupansi: 91 },
  { tanggal: "4 Okt", okupansi: 94 },
  { tanggal: "5 Okt", okupansi: 96 },
  { tanggal: "6 Okt", okupansi: 93 },
  { tanggal: "7 Okt", okupansi: 88 },
  { tanggal: "8 Okt", okupansi: 82 },
  { tanggal: "9 Okt", okupansi: 87 },
  { tanggal: "10 Okt", okupansi: 90 },
];

export const lokasiMonitoring = [
  {
    id: 1,
    nama: "Alun-Alun Nunukan",
    lat: 4.1333,
    lng: 117.6667,
    tipe: "utama",
    pengunjungSekarang: 1250,
  },
  {
    id: 2,
    nama: "Pantai Sei Pancang",
    lat: 4.1450,
    lng: 117.6800,
    tipe: "utama",
    pengunjungSekarang: 680,
  },
  {
    id: 3,
    nama: "Taman Kota",
    lat: 4.1280,
    lng: 117.6720,
    tipe: "utama",
    pengunjungSekarang: 420,
  },
  {
    id: 4,
    nama: "Counter Point 1",
    lat: 4.1340,
    lng: 117.6690,
    tipe: "counter",
    pengunjungSekarang: 0,
  },
  {
    id: 5,
    nama: "Counter Point 2",
    lat: 4.1300,
    lng: 117.6750,
    tipe: "counter",
    pengunjungSekarang: 0,
  },
];

export const analisisEkonomi = {
  estimasiTotal: 4380000000,
  komponen: [
    { nama: "Kuliner", nilai: 1800000000 },
    { nama: "Hotel", nilai: 800000000 },
    { nama: "Transportasi", nilai: 600000000 },
    { nama: "Belanja", nilai: 700000000 },
    { nama: "Hiburan", nilai: 480000000 },
  ],
  catatan:
    "Nilai transaksi merupakan estimasi berdasarkan data lapangan dan bukan nilai kontribusi PDRB.",
};

export const formatRupiah = (angka: number): string => {
  if (angka >= 1000000000) {
    return `Rp${(angka / 1000000000).toFixed(2)} M`;
  } else if (angka >= 1000000) {
    return `Rp${(angka / 1000000).toFixed(0)} Juta`;
  } else {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  }
};

export const formatAngka = (angka: number): string => {
  return new Intl.NumberFormat("id-ID").format(angka);
};

export const profile = {
  name: "Ibnu Arif",
  credentials: "S.Kom., M.Kom.",
  role: "Dosen Informatika, Universitas Tanjungpura",
  location: "Pontianak, Kalimantan Barat, Indonesia",
  emailPrimary: "ibnuarif@informatika.untan.ac.id",
  linkedin: "https://www.linkedin.com/in/ibnu-arif-71b55921a/",
  scholar:
    "https://scholar.google.co.id/citations?user=kEUT8RgAAAAJ&hl=id",
  hero: "Dosen Informatika & pengembang — membangun aplikasi imersif dan web, dengan minat pada teknologi untuk pendidikan dan pelestarian budaya Kalimantan Barat.",
  about:
    "Saya dosen Informatika di Universitas Tanjungpura yang membangun kompetensi secara konsisten dari jenjang Diploma hingga Magister. Sebagai dosen yang baru memulai perjalanan akademik, saya tertarik mendalami ilmu komputasi (computational science) dan bagaimana pendekatan ini dapat menjawab persoalan nyata secara kreatif. Fokus saya pada pengembangan sistem, aplikasi berbasis web, dan teknologi imersif seperti Augmented Reality — termasuk bagaimana teknologi imersif mampu mengubah pengalaman pengguna dan menghadirkan solusi baru di berbagai bidang — dengan minat khusus pada pemanfaatan teknologi untuk pendidikan dan pelestarian budaya Kalimantan Barat.",
  aboutSecondary:
    "Selain mengembangkan sistem, saya mengampu mata kuliah di bidang pengembangan sistem dan pemrograman, dengan komitmen menghadirkan pembelajaran yang menjembatani teori dan praktik — membangun kemampuan teknis sekaligus cara berpikir kreatif pada mahasiswa.",
};

export type ProjectStatus = "selesai" | "berkembang";

export interface Project {
  id: string;
  name: string;
  displayName?: string;
  group: "ar" | "web";
  platform?: string;
  tech: string[];
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  linkState: "screenshot-only";
  screenshotLabel: string;
}

export const projects: Project[] = [
  {
    id: "gerhana-ar",
    name: "Gerhana AR",
    group: "ar",
    platform: "Android (Mobile)",
    tech: ["Unity", "Vuforia (Image Target)", "Blender"],
    description:
      "Media pembelajaran berbasis Augmented Reality untuk memvisualisasikan proses gerhana matahari dan bulan secara imersif dan interaktif (materi IPA). Berasal dari proyek skripsi.",
    status: "selesai",
    statusLabel: "Selesai — dapat dijalankan",
    linkState: "screenshot-only",
    screenshotLabel: "Dokumentasi",
  },
  {
    id: "pontianak-ar",
    name: "Pontianak-AR",
    group: "ar",
    platform: "Android (Mobile)",
    tech: ["Unity", "Augmented Reality", "Gamifikasi"],
    description:
      "Aplikasi yang memadukan AR dan gamifikasi untuk mengeksplorasi objek wisata cagar budaya Kota Pontianak — mis. Tugu Khatulistiwa, Istana Kadriah, Rumah Radakng.",
    status: "selesai",
    statusLabel: "Selesai — dapat dijalankan",
    linkState: "screenshot-only",
    screenshotLabel: "Dokumentasi",
  },
  {
    id: "tenun-sambas",
    name: "Ensiklopedia Tenun Sambas",
    displayName: "Ensiklopedia Tenun Melayu",
    group: "web",
    tech: ["Web"],
    description:
      "Platform digital dokumentasi motif dan warisan budaya tenun Sambas/Melayu — mis. motif Pucuk Rebung, Awan Larat, Corak Insang.",
    status: "berkembang",
    statusLabel: "Dalam pengembangan",
    linkState: "screenshot-only",
    screenshotLabel: "Dalam pengembangan",
  },
  {
    id: "citra-rasa-kuliner",
    name: "Citra Rasa Kuliner Kalbar",
    group: "web",
    tech: ["Web"],
    description:
      "Website ensiklopedia kuliner tradisional Kalimantan Barat — mis. Bubur Pedas Sambas, Sotong Pangkong, Chai Kwe.",
    status: "berkembang",
    statusLabel: "Dalam pengembangan",
    linkState: "screenshot-only",
    screenshotLabel: "Dalam pengembangan",
  },
  {
    id: "mini-museum",
    name: "Mini Museum Kalimantan Barat",
    displayName: "Museum Mini",
    group: "web",
    tech: ["Web"],
    description:
      "Platform museum digital interaktif berisi sejarah, etnis, kebudayaan, dan landmark Kalimantan Barat.",
    status: "berkembang",
    statusLabel: "Dalam pengembangan",
    linkState: "screenshot-only",
    screenshotLabel: "Dalam pengembangan",
  },
];

export interface Grant {
  id: string;
  title: string;
  scheme: string;
  year: string;
  role: "Ketua" | "Anggota";
  status: string;
}

export const grants: Grant[] = [
  {
    id: "sig-pangan",
    title:
      "Analisis Kesesuaian Lahan Komoditas Pertanian Unggulan Berbasis SIG untuk Ketahanan Pangan Kabupaten Kubu Raya",
    scheme: "Penelitian Dosen Muda (PDM) — Universitas Tanjungpura",
    year: "2026",
    role: "Ketua",
    status: "Sedang berjalan · Diseminasi November 2026",
  },
  {
    id: "aksara-rupa",
    title:
      "Ragam Hias dan Warisan Kebudayaan Melayu Kota Pontianak: Aksara Rupa sebagai Ensiklopedia Digital Interaktif",
    scheme: "Dana IndonesiaRaya — Kementerian Kebudayaan RI",
    year: "2026",
    role: "Ketua",
    status: "Didanai 2026",
  },
  {
    id: "sagu-sambas",
    title:
      "Festival Budaya Sagu Sambas: Merawat Warisan, Memberdayakan Ekonomi Lokal, dan Memperkuat Jejaring Serantau",
    scheme: "Dana IndonesiaRaya — Kementerian Kebudayaan RI",
    year: "2026",
    role: "Anggota",
    status: "Didanai 2026",
  },
];

export interface Publication {
  authors: string;
  year: string;
  title: string;
  venue: string;
}

export const publications: Publication[] = [
  {
    authors: "Rangga, B., Arif, I., & Utomo, K.P.",
    year: "2026",
    title: "Klasifikasi Tutupan Lahan dengan YOLO dan Data Citra Udara dari Drone.",
    venue: "JEPIN (Jurnal Edukasi dan Penelitian Informatika), 12(1), 33–38.",
  },
  {
    authors: "Rangga, B., Rupita, R., Arif, I., Mandala, Y., Zulkarnain, Z., Palureng, R.W.N., dkk.",
    year: "2025",
    title:
      "Preventive Legal Education and Digital Literacy on the Dangers of Online Gambling for Students of Kapuas Pontianak Private High School.",
    venue: "International Journal of Public Devotion, 8(1), 79–87.",
  },
  {
    authors: "Mandala, Y., Fatimah, S., Wardani, S.F., Arif, I., & Gustriansyah, E.",
    year: "2025",
    title:
      "Analisis Permendikbudristek RI Nomor 2 Tahun 2024 tentang SSBOPT: Implikasi terhadap Administrasi Bisnis Perguruan Tinggi Negeri.",
    venue: "Jurnal Administrasi Bisnis Terapan, 7(2).",
  },
  {
    authors: "Arif, I., & Mandala, Y.",
    year: "2025",
    title: "Customer Relationship Management (CRM) pada Usaha Layanan Ojek Online.",
    venue: "Information Management for Educators and Professionals, 10(1), 43–52.",
  },
  {
    authors: "Arif, I., Zulkarnain, I., Artha Octaviyana, R., Tsanauddin Farid, M., dkk.",
    year: "2024",
    title:
      "Pelatihan Penggunaan Aplikasi Adobe Photoshop MGMP Seni Budaya Tingkat SMP Kabupaten Mempawah.",
    venue: "Jurnal Pengabdian Masyarakat dan Inovasi, 4(2), 217–222.",
  },
];

export interface CommunityService {
  title: string;
  detail: string;
  place: string;
  year: string;
}

export const communityService: CommunityService[] = [
  {
    title: "Pelatihan Penggunaan AI, Desain Grafis, dan Aplikasi Statistik",
    detail: 'Materi "Etika Pemanfaatan Generative AI di Dunia Kampus"',
    place: "Fakultas Pertanian, Universitas Tanjungpura, Pontianak",
    year: "November 2025",
  },
  {
    title: "Pelatihan Pembuatan Soal dan Kuis Digital Otomatis dengan Bantuan AI untuk Guru",
    detail: "",
    place: "Entikong",
    year: "2025",
  },
  {
    title: "Edukasi Hukum Preventif & Literasi Digital tentang Bahaya Judi Online bagi Siswa",
    detail: "Perspektif teknologi informasi tentang manipulasi sistem judi online",
    place: "SMA Kapuas Pontianak",
    year: "2024–2025",
  },
  {
    title: "Pelatihan MGMP Seni Budaya Tingkat SMP Kabupaten Mempawah",
    detail: "Pemanfaatan teknologi digital untuk guru — terdokumentasi dalam publikasi pengabdian",
    place: "Kabupaten Mempawah",
    year: "2024",
  },
];

export const experience = {
  role: "Desain Grafis — Kodingmu.id",
  detail:
    "Mengerjakan dan mengkurasi kebutuhan desain grafis untuk platform Kodingmu.id, baik untuk kebutuhan pada website maupun kegiatan eksternal tim.",
};

export interface EducationEntry {
  degree: string;
  institution: string;
  years: string;
  focus: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Magister Komputer (M.Kom)",
    institution: "Universitas Atma Jaya Yogyakarta",
    years: "2022–2023",
    focus: "Machine Learning, Artificial Neural Networks",
  },
  {
    degree: "Sarjana Komputer (S.Kom)",
    institution: "Universitas Teknologi Digital Indonesia (dahulu STMIK Akakom), Yogyakarta",
    years: "2019–2021",
    focus: "Pengembangan Sistem / Media Pembelajaran",
  },
  {
    degree: "Ahli Madya Komputer (A.Md.Kom)",
    institution: "Politeknik Negeri Pontianak",
    years: "2016–2019",
    focus: "Teknik Informatika",
  },
];

export const certification = {
  title: "Certified Programmer / Software Development (C.Pro)",
  issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
  validity: "Diterbitkan Januari 2025 · berlaku hingga Januari 2028",
};

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Pengembangan",
    items: ["Software Development", "Aplikasi Web", "Sistem Informasi"],
  },
  {
    label: "Teknologi Imersif",
    items: ["Augmented Reality", "Unity", "Vuforia"],
  },
  {
    label: "Data & AI",
    items: ["Machine Learning", "Artificial Neural Networks", "SIG (Sistem Informasi Geografis)"],
  },
  {
    label: "Desain",
    items: ["Graphic Design", "UI/UX"],
  },
];

export const nav = [
  { id: "tentang", label: "Tentang" },
  { id: "karya", label: "Karya & Proyek" },
  { id: "hibah", label: "Hibah" },
  { id: "publikasi", label: "Publikasi" },
  { id: "pengabdian", label: "Pengabdian" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "kontak", label: "Kontak" },
];

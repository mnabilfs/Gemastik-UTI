import React from "react";
import { HiLink, HiOutlineMail } from "react-icons/hi";
import {
  SiClaude,
  SiOpenai,
  SiGooglegemini,
  SiPerplexity,
} from "react-icons/si";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import Navbar from "../components/Navbar.jsx";
import GeminiIcon from "../assets/gemini-icon.svg";
import ChatGPTPic from "../assets/chatgpt_pic.jpg";
import QwenPic from "../assets/qwen_pic.jpg";
import ClaudePic from "../assets/claude_pic.jpg";
import GeminiPic from "../assets/gemini_pic.jpg";
import PhotoProfile1 from "../assets/pp_0.jpg";
import PhotoProfile2 from "../assets/pp_1.jpg";

// Data tiruan untuk card
const relatedPostsData = [
  {
    imgSrc: ChatGPTPic,
    date: "1 Mei 2025",
    title:
      "Cara memilih niche blog yang menarik, memikat pengunjung, dan menghasilkan uang",
    description:
      "Niche blog adalah topik spesifik yang akan Anda bahas. Niche yang tepat akan membantu Anda fokus dalam membuat konten...",
    author: "Muhammad Nabil Farras Sulthan",
  },
  {
    imgSrc: ClaudePic, // Ganti dengan path gambar Anda
    date: "1 Mei 2025",
    title:
      "Cara memilih niche blog yang menarik, memikat pengunjung, dan menghasilkan uang",
    description:
      "Memilih niche blog adalah salah satu langkah penting yang akan menentukan keberhasilan blog Anda. Niche yang tepat...",
    author: "Muhammad Nabil Farras Sulthan",
  },
  {
    imgSrc: QwenPic, // Ganti dengan path gambar Anda
    date: "1 Mei 2025",
    title:
      "Cara memilih niche blog yang menarik, memikat pengunjung, dan menghasilkan uang",
    description:
      "Memilih niche blog adalah salah satu langkah penting yang akan menentukan keberhasilan blog Anda. Niche yang tepat...",
    author: "Muhammad Nabil Farras Sulthan",
  },
];

const ArticleHeader = () => {
  return (
    <section className="bg-white border-gray-200 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Baris Meta: Tag, Tanggal, Penulis */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
          <a
            href="https://gemini.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 w-fit cursor-pointer bg-white border border-gray-300 text-gray-800 font-medium rounded-lg px-3 py-1 hover:bg-gray-50 transition-all">
              <img
                src={GeminiIcon}
                alt="Gemini"
                className="w-4 h-4 rounded-full object-cover"
              />
              Gemini AI
            </div>
          </a>
          <span className="text-sm text-gray-600 ">Nov 1, 2025</span>
          <span className="text-sm text-gray-600 ">M. Nabil Farras S.</span>
        </div>

        {/* Judul Utama Artikel */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 py-8 mb-4">
          Apa itu Gemini AI? Pengertian Gemini AI, Keunikan, dan Penggunaan yang
          tepat
        </h1>

        {/* Baris Bawah: Ringkasan dan Bagikan */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Kiri: Dapatkan ringkasan */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 ">
              Dapatkan ringkasan:
            </span>
            <div className="flex items-center gap-2 text-gray-600 ">
              <SiOpenai className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <SiClaude className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <SiGooglegemini className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <SiPerplexity className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            </div>
          </div>

          {/* Kanan: Bagikan */}
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium text-gray-700 ">Share:</div>
            <div className="flex items-center gap-3 text-gray-600 ">
              <a
                href="#"
                aria-label="Copy link"
                className="hover:text-blue-600"
              >
                <HiLink className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Share by email"
                className="hover:text-blue-600"
              >
                <HiOutlineMail className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Share on Facebook"
                className="hover:text-blue-600"
              >
                <BsFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Share on LinkedIn"
                className="hover:text-blue-600"
              >
                <BsLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Komponen untuk Gambar Utama (Thumbnail Video)
const FeaturedImage = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <img
      src={GeminiPic}
      alt="Gemini All Features Explained"
      className="w-full h-auto rounded-lg shadow-md"
    />
  </div>
);

// Komponen untuk 3 Card Terkait
const RelatedPosts = () => (
  <>
    <div className="flex justify-center px-4 py-12 sm:px-6 lg:px-8 bg-blue-50 mt-20">
      <h2 className="text-3xl font-semibold text-gray-900 tracking-widest">
        Artikel Terkait
      </h2>
    </div>
    <section className="py-12 bg-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPostsData.map((post, key) => (
            <div
              key={key}
              className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4"
            >
              <img
                src={post.imgSrc}
                alt={post.title}
                className="rounded-lg mb-4"
              />
              <p className="text-sm text-blue-900 py-3 font-medium">
                {post.date}
              </p>
              <h5 className="text-md font-semibold text-gray-900 pb-3">
                {post.title}
              </h5>
              <p className="text-gray-700 mb-2 text-sm pb-3">
                {post.description}
              </p>
              <a
                href="#"
                className="text-blue-900 hover:underline text-sm font-medium"
              >
                Oleh {post.author}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

// Komponen untuk Konten Artikel Utama
const ArticleContent = () => (
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose lg:prose-xl">
    <h2 className="text-3xl font-bold mb-4 text-blue-900">
      Apa itu Gemini AI?
    </h2>
    <p className="mb-6">
      <strong>Gemini AI</strong> adalah model kecerdasan buatan (AI) yang
      dikembangkan oleh
      <span className="text-blue-700 font-medium"> Google DeepMind</span>.
      Gemini dirancang untuk menjadi sistem multimodal generasi baru, yang
      berarti mampu memahami dan memproses berbagai bentuk data seperti teks,
      gambar, audio, dan video secara bersamaan. Tujuan utama dari Gemini adalah
      menciptakan asisten digital yang tidak hanya pintar secara linguistik,
      tetapi juga memiliki kemampuan penalaran dan pemahaman kontekstual yang
      mendalam.
    </p>
    <p className="mb-6">
      Tidak seperti chatbot konvensional, Gemini AI dibangun dengan kemampuan
      analisis mendalam yang dapat meniru cara berpikir manusia dalam memecahkan
      masalah kompleks. Dengan integrasi ke dalam ekosistem Google, Gemini AI
      memiliki potensi besar untuk membantu pengguna di berbagai bidang mulai
      dari riset, pendidikan, pengembangan software, hingga kreativitas digital.
    </p>
    {/* === SEJARAH GEMINI AI === */}
    <h2 className="text-3xl font-bold mb-4 text-blue-900">Sejarah Gemini AI</h2>
    <p className="mb-6">
      Gemini AI pertama kali diumumkan oleh Google pada{" "}
      <strong>Desember 2023</strong> sebagai penerus dari proyek AI sebelumnya
      yang bernama <em>Bard</em>. Setelah akuisisi tim DeepMind ke dalam
      struktur riset utama Google, mereka menggabungkan kekuatan teknologi{" "}
      <strong>Large Language Model (LLM)</strong> dengan algoritma penalaran
      ilmiah milik DeepMind.
    </p>
    <p className="mb-6">
      Versi awal Gemini, yaitu <strong>Gemini 1</strong>, menjadi landasan untuk
      pengembangan versi lebih lanjut seperti Gemini 1.5 dan Gemini 2.0. Setiap
      versi baru membawa peningkatan signifikan dalam kemampuan reasoning,
      efisiensi komputasi, dan pemahaman konteks. Saat ini, Gemini telah
      diintegrasikan ke dalam berbagai layanan Google seperti Gmail, Docs,
      YouTube, dan Android, menjadikannya bagian penting dari transformasi AI
      Google.
    </p>
    {/* === KEUNIKAN GEMINI SAAT INI === */}
    <h2 className="text-3xl font-bold mb-4 text-blue-900">
      Keunikan Gemini yang Ada Saat Ini
    </h2>
    <p className="mb-6">
      Keunggulan Gemini AI terletak pada kemampuannya untuk bekerja secara
      multimodal dan interaktif. Artinya, Gemini tidak hanya membaca teks,
      tetapi juga dapat memahami gambar, menjelaskan video, bahkan menafsirkan
      grafik atau data numerik secara langsung. Hal ini membuat Gemini jauh
      lebih fleksibel dibandingkan model AI berbasis teks murni seperti ChatGPT
      versi awal.
    </p>
    <p className="mb-6">
      Selain itu, Gemini juga didesain untuk bekerja lintas platform — baik di
      perangkat seluler maupun desktop. Gemini dapat digunakan sebagai asisten
      AI di sistem operasi Android, membantu pengguna mengatur jadwal, mencari
      informasi, hingga meringkas dokumen panjang hanya dengan satu perintah
      suara.
    </p>
    <p className="mb-6">
      Dalam konteks etika, Google juga menekankan transparansi dan keamanan data
      pengguna pada setiap pengembangan Gemini. Setiap interaksi disimpan dan
      diproses dengan standar privasi tinggi yang mengikuti pedoman
      internasional.
    </p>
    {/* === STRUKTUR GEMINI AI === */}
    <h2 className="text-3xl font-bold mb-4 text-blue-900">
      Struktur Gemini AI
    </h2>
    <p className="mb-6">
      Secara teknis, Gemini AI dibangun di atas arsitektur{" "}
      <strong>Transformer</strong> generasi terbaru yang dioptimalkan untuk
      pemrosesan paralel. Struktur intinya terdiri dari beberapa lapisan model
      bahasa besar (LLM) yang bekerja berdampingan dengan modul visual dan
      sistem reasoning.
    </p>
    <p className="mb-6">Komponen utamanya meliputi:</p>
    <ol className="list-decimal ml-6 mb-6 space-y-2">
      <li>
        <strong>Language Understanding Module</strong> — menangani pemrosesan
        teks dan konteks linguistik.
      </li>
      <li>
        <strong>Vision Processing Unit</strong> — bertanggung jawab untuk
        pengenalan gambar dan video.
      </li>
      <li>
        <strong>Reasoning Core</strong> — pusat logika yang memungkinkan Gemini
        memecahkan masalah dan mengambil keputusan.
      </li>
      <li>
        <strong>Knowledge Graph Integration</strong> — sistem penghubung antara
        data real-time dan informasi yang telah dilatih.
      </li>
    </ol>
    <p className="mb-6">
      Kombinasi ini membuat Gemini AI dapat beradaptasi dengan berbagai skenario
      pemakaian, mulai dari menjawab pertanyaan pengguna, menganalisis laporan,
      hingga menghasilkan konten kreatif.
    </p>
    {/* === FUNGSI DAN MANFAAT === */}
    <h2 className="text-3xl font-bold mb-4 text-blue-900">
      Fungsi Gemini AI dan Manfaatnya
    </h2>
    <p className="mb-6">
      Fungsi utama Gemini AI adalah membantu manusia menyelesaikan tugas
      kompleks dengan cepat dan efisien. Dalam kehidupan sehari-hari, Gemini
      dapat menjadi asisten digital cerdas yang membantu meringkas teks,
      memberikan saran, hingga menciptakan ide-ide baru berdasarkan konteks
      pengguna.
    </p>
    <p className="mb-6">
      Dalam dunia profesional, Gemini AI banyak digunakan untuk:
    </p>
    <ul className="list-disc ml-6 mb-6 space-y-2">
      <li>Analisis data bisnis dan pembuatan laporan otomatis.</li>
      <li>
        Pendamping riset ilmiah dengan kemampuan membaca literatur akademik.
      </li>
      <li>
        Asisten pengembangan perangkat lunak melalui pemahaman kode dan
        debugging.
      </li>
      <li>
        Peningkatan efisiensi komunikasi dan layanan pelanggan berbasis AI.
      </li>
    </ul>
    <h2 className="text-3xl font-bold mb-4 text-blue-900">Kesimpulan</h2>
    <p className="mb-6">
      <strong>Gemini AI</strong> merupakan langkah besar dalam evolusi teknologi
      kecerdasan buatan. Dengan kemampuan multimodal, reasoning tingkat lanjut,
      dan integrasi ekosistem Google, Gemini bukan sekadar chatbot — melainkan
      fondasi masa depan kolaborasi manusia dan mesin.
    </p>
    <p className="mb-6">
      Keunggulan Gemini terletak pada kemampuannya memahami berbagai format
      data, berpikir secara kontekstual, dan memberikan solusi yang lebih
      manusiawi. Ke depan, peran Gemini AI diprediksi akan semakin luas: dari
      dunia pendidikan hingga industri kreatif, menjadikannya salah satu inovasi
      AI paling berpengaruh dalam dekade ini.
    </p>
  </article>
);

// Komponen untuk Kotak Penulis
const AuthorBox = () => (
  <section className="max-w-4xl mx-auto bg-blue-50 rounded-xl px-4 sm:px-6 lg:px-8 py-12 shadow-sm border border-blue-100 my-20">
    <div className="flex items-center space-x-5 mb-4">
      <img
        className="w-16 h-16 rounded-full object-cover"
        src={PhotoProfile1}
        alt="Foto Muhammad Nabil"
      />
      <div>
        <p className="text-sm text-blue-700 font-semibold mb-1">Penulis</p>
        <h3 className="text-xl font-bold text-blue-900 leading-tight">
          Muhammad Nabil Farras Sulthan
        </h3>
      </div>
    </div>

    <p className="text-gray-700 leading-relaxed">
      Nabil sudah berpengalaman selama 10 tahun sebagai linguist dan 5 tahun
      sebagai{" "}
      <span className="font-semibold">Content Marketing Specialist</span> di
      Hostinger. Ia suka mengikuti tren teknologi, digital marketing, dan
      belajar bahasa. Melalui tutorial Hostinger ini, Nabil ingin berbagi
      informasi dan membantu pembaca mengatasi masalah yang dialami. Kenali
      Nabil lebih dekat di{" "}
      <a href="#" className="text-blue-700 font-semibold hover:underline">
        LinkedIn
      </a>
      .
    </p>

    <p className="mt-4 text-sm text-blue-700 font-semibold hover:underline cursor-pointer">
      Tutorial lain dari Muhammad Nabil Farras Sulthan
    </p>
  </section>
);

// Komponen untuk Tag Terkait
const QuestionFAQ = () => (
  <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
    <h2 className="text-3xl font-bold mb-6 text-blue-900">
      Pertanyaan yang Sering Diajukan
    </h2>

    <div id="accordion-open" data-accordion="open">
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  gap-3"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
        >
          <span class="flex items-center">
            <svg
              class="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>{" "}
            Apa perbedaan Gemini AI dengan ChatGPT?
          </span>
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-1"
        class="hidden"
        aria-labelledby="accordion-open-heading-1"
      >
        <div class="p-5 border border-b-0 border-gray-200 ">
          <p class="mb-2 text-gray-500 ">
            Gemini AI dan ChatGPT sama-sama merupakan model kecerdasan buatan
            berbasis bahasa, namun dikembangkan oleh perusahaan yang berbeda.
            Gemini AI dikembangkan oleh Google DeepMind, sedangkan ChatGPT
            dikembangkan oleh OpenAI.
          </p>
          <p class="text-gray-500 ">
            Keunggulan Gemini AI adalah kemampuannya memahami multimodal data —
            tidak hanya teks, tetapi juga gambar, suara, hingga kode
            pemrograman. Selain itu, Gemini terintegrasi langsung dengan
            ekosistem Google, seperti Search, Docs, dan YouTube, yang membuatnya
            lebih praktis digunakan dalam kehidupan sehari-hari.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200   gap-3"
          data-accordion-target="#accordion-open-body-2"
          aria-expanded="false"
          aria-controls="accordion-open-body-2"
        >
          <span class="flex items-center">
            <svg
              class="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Bagaimana cara kerja sistem rekomendasi Gemini AI?
          </span>
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-2"
        class="hidden"
        aria-labelledby="accordion-open-heading-2"
      >
        <div class="p-5 border border-b-0 border-gray-200 ">
          <p class="mb-2 text-gray-500 ">
            Gemini AI menggunakan gabungan teknologi machine learning, deep
            learning, dan natural language processing (NLP) untuk memahami
            konteks pengguna.
          </p>
          <p class="text-gray-500 ">
            Saat kamu memberikan pertanyaan atau perintah, sistem akan
            menganalisis input tersebut dan mencocokkannya dengan miliaran data
            pelatihan untuk menghasilkan respons yang paling relevan. Selain
            itu, Gemini AI juga memanfaatkan reinforcement learning untuk terus
            belajar dari umpan balik pengguna, sehingga semakin lama performanya
            semakin akurat dan kontekstual.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 gap-3"
          data-accordion-target="#accordion-open-body-3"
          aria-expanded="false"
          aria-controls="accordion-open-body-3"
        >
          <span class="flex items-center">
            <svg
              class="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>{" "}
            Apakah data pengguna aman saat menggunakan Gemini AI?
          </span>
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-3"
        class="hidden"
        aria-labelledby="accordion-open-heading-3"
      >
        <div class="p-5 border border-t-0 border-gray-200 ">
          <p class="mb-2 text-gray-500 ">
            Ya, Google menerapkan standar keamanan tingkat tinggi untuk
            melindungi data pengguna dalam penggunaan Gemini AI. Informasi
            pribadi tidak disimpan secara permanen tanpa izin pengguna dan
            diproses menggunakan sistem enkripsi end-to-end.
          </p>
          <p class="mb-2 text-gray-500 ">
            Google juga menyediakan pengaturan privasi transparan, sehingga
            pengguna dapat mengontrol data apa saja yang dibagikan dan digunakan
            untuk pelatihan model. Dengan begitu, interaksi dengan Gemini AI
            tetap aman dan sesuai dengan kebijakan privasi yang ketat.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Komponen untuk Bagian Komentar
const Comments = () => (
  <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h2 className="text-3xl font-bold mb-4 text-blue-900">Komentar</h2>

    {/* Daftar Komentar */}
    <div className="space-y-6">
      {/* Komentar 1 */}
      <article className="p-4 text-base bg-white rounded-lg ">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <img
              className="mr-4 w-8 h-8 rounded-full object-cover"
              src={PhotoProfile2}
              alt="Foto Shen"
            />
            <div className="flex flex-col">
              <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 ">
                Shen
              </p>
              <p className="inline-flex items-center mr-3 text-sm font-regular text-gray-900">
                2 Nov 2025
              </p>
            </div>
          </div>
        </footer>
        <p className="text-gray-600 ">
          Halo, saya sedang mencari informasi mengenai AI, dan tulisan kakak
          diatas selain memberikan informasi juga jadi menginspirasi saya untuk
          lebih memperdalam dunia AI.
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline cursor-pointer font-medium"
          >
            BALAS
          </button>
        </div>
      </article>

      {/* Komentar 2 (Balasan) */}
      <article className="p-4 ml-6 lg:ml-12 text-base bg-white rounded-lg ">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <img
              className="mr-2 w-8 h-8 rounded-full object-cover"
              src={PhotoProfile1}
              alt="Foto Muhammad Nabil"
            />
            <div className="flex flex-col">
              <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 ">
                Muhammad Nabil Farras Sulthan
              </p>
              <p className="inline-flex items-center mr-3 text-sm font-regular text-gray-900">
                2 Nov 2025
              </p>
            </div>
          </div>
        </footer>
        <p className="text-gray-600 ">Halo, senang bisa membantu.</p>

        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline cursor-pointer font-medium"
          >
            BALAS
          </button>
        </div>
      </article>
    </div>

    {/* Form Komentar */}
    <h3 className="text-3xl font-bold mb-4 text-blue-900 mt-15">
      Tinggalkan Komentar
    </h3>

    <form className="space-y-5">
      {/* Komentar */}
      <textarea
        id="comment"
        placeholder="Komentar*"
        required
        rows={5}
        className="w-full text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-700 focus:border-blue-700 p-3 outline-none"
      ></textarea>

      {/* Nama */}
      <input
        type="text"
        id="name"
        placeholder="Nama*"
        required
        className="w-full text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-700 focus:border-blue-700 p-3 outline-none"
      />

      {/* Email */}
      <input
        type="email"
        id="email"
        placeholder="Email*"
        required
        className="w-full text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-700 focus:border-blue-700 p-3 outline-none"
      />

      {/* Checkbox */}
      <div className="flex items-start space-x-2 text-sm text-gray-700">
        <input
          type="checkbox"
          id="agree"
          required
          className="mt-1 accent-blue-800 w-4 h-4"
        />
        <label htmlFor="agree" className="leading-snug">
          Dengan menggunakan formulir ini, maka Anda setuju bahwa data pribadi
          Anda akan diproses sesuai dengan{" "}
          <a href="#" className="text-blue-700 font-semibold hover:underline">
            Kebijakan Privasi
          </a>{" "}
          kami.
        </label>
      </div>

      {/* Tombol */}
      <button
        type="submit"
        className="bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-full px-10 py-3 text-base cursor-pointer transition-all"
      >
        Kirim
      </button>
    </form>
  </section>
);

// Komponen Utama Halaman Blog
export default function Blog() {
  return (
    <main className="bg-white">
      <Navbar />
      <ArticleHeader />
      <FeaturedImage />
      <ArticleContent />
      <QuestionFAQ />
      <RelatedPosts />
      <AuthorBox />
      <Comments />
    </main>
  );
}

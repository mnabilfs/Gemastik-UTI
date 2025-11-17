import React from "react";
import { HiLink, HiOutlineMail } from "react-icons/hi";
import {
  SiClaude,
  SiOpenai,
  SiGooglegemini,
  SiPerplexity,
} from "react-icons/si";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import ClaudeIcon from "../assets/claude-icon.svg";
import ChatGPTPic from "../assets/chatgpt_pic.jpg";
import QwenPic from "../assets/qwen_pic.jpg";
import DeepseekPic from "../assets/deepseek_pic.jpg";
import ClaudePic from "../assets/claude_pic1.png";
import PhotoProfile1 from "../assets/pp_3.jpg";
import PhotoProfile2 from "../assets/pp_1.jpg";
import PhotoProfile3 from "../assets/pp_2.jpg";

const relatedPostsData = [
  {
    imgSrc: ChatGPTPic,
    date: "November 3, 2025",
    title: "Evolusi ChatGPT: Dari GPT-3 ke GPT-5",
    description:
      "ChatGPT terus berevolusi dari sekadar chatbot menjadi asisten pintar yang mampu memahami konteks, menulis kode, dan melakukan analisis kompleks. Versi GPT-5 membawa peningkatan besar pada akurasi dan gaya percakapan.",
    author: "Muhammad Nabil Farras Sulthan",
    link: "/blog/chatgpt-ai",
  },
  {
    imgSrc: DeepseekPic, 
    date: "November 3, 2025",
    title: "DeepSeek AI: Kecepatan, Efisiensi, dan Ketelitian dari Model Cina",
    description:
      "DeepSeek dikenal sebagai AI yang sangat cepat, ringan, dan kuat dalam reasoning teknis. Artikel ini mengulas bagaimana DeepSeek menjadi pilihan banyak developer berkat efisiensi komputasi dan kemampuan analisisnya yang akurat.",
    author: "Muhammad Zacky Maulana",
    link: "/blog/deepseek-ai",
  },
  {
    imgSrc: QwenPic, 
    date: "November 5, 2025",
    title: "Qwen AI: Inovasi Open-Source dari Alibaba",
    description:
      "Qwen AI menjadi sorotan berkat kemampuannya yang kuat dan sifatnya yang terbuka bagi pengembang. Pelajari bagaimana Qwen menantang dominasi model AI besar dengan performa efisien dan dukungan komunitas luas.",
    author: "Rikza Ahmad Nur Muhammad",
    link: "/blog/qwen-ai",
  },
];

const ArticleHeader = () => {
  return (
    <section className="bg-white border-gray-200 ">
      <div className="max-w-4xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center mb-6 gap-x-4 gap-y-2">
          <a
            href="https://claude.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 px-3 py-1 font-medium text-gray-800 transition-all bg-white border border-gray-300 rounded-lg cursor-pointer w-fit hover:bg-gray-50">
              <img
                src={ClaudeIcon}
                alt="Gemini"
                className="object-cover w-4 h-4 rounded-full"
              />
              Claude AI
            </div>
          </a>
          <span className="text-sm text-gray-600 ">Nov 5, 2025</span>
          <span className="text-sm text-gray-600 ">M. Zacky Maulana</span>
        </div>

        <h1 className="py-8 mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Kenapa Banyak Orang Memilih Claude? Kebiasaan Pengguna AI Modern dan
          Kekuatan Claude dalam Produktivitas
        </h1>

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
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

const FeaturedImage = () => (
  <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
    <img
      src={ClaudePic}
      alt="Gemini All Features Explained"
      className="w-full h-auto rounded-lg shadow-md"
    />
  </div>
);

const RelatedPosts = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="flex justify-center px-4 py-12 mt-20 sm:px-6 lg:px-8 bg-blue-50">
        <h2 className="text-3xl font-semibold tracking-widest text-gray-900">
          Artikel Terkait
        </h2>
      </div>
      <section className="py-12 bg-blue-200">
        <div className="px-4 mx-auto bg-blue-200 max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {relatedPostsData.map((post, key) => (
              <div
                key={key}
                className="max-w-sm p-4 transition-all duration-300 transform bg-white border border-gray-200 shadow cursor-pointer rounded-xl hover:scale-105 hover:shadow-lg active:scale-100"
                onClick={() => handleClick(post.link)}
              >
                <img
                  src={post.imgSrc}
                  alt={post.title}
                  className="mb-4 rounded-lg"
                />
                <p className="py-3 text-sm font-medium text-blue-900">
                  {post.date}
                </p>
                <h5 className="pb-3 font-semibold text-gray-900 text-md">
                  {post.title}
                </h5>
                <p className="pb-3 mb-2 text-sm text-gray-700">
                  {post.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-900 hover:underline"
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
};

const ArticleContent = () => (
  <article className="max-w-4xl px-4 py-12 mx-auto prose sm:px-6 lg:px-8 lg:prose-xl">
    <h2 className="mb-4 text-3xl font-bold text-blue-900">
      Mengapa Claude Banyak Digunakan oleh Developer, Penulis, dan Knowledge
      Worker?
    </h2>
    <p className="mb-6">
      <strong>Claude AI</strong> adalah model kecerdasan buatan yang
      dikembangkan oleh
      <span className="font-medium text-blue-700"> Anthropic</span>, terkenal
      karena clean output, kemampuan reasoning tinggi, serta kualitas tulisan
      yang stabil dan profesional. Jika Gemini unggul di multimodal dan
      ekosistem Google, maka Claude bersinar sebagai AI yang terasa lebih
      “manusiawi”, terstruktur, dan super helpful untuk pekerjaan teknis maupun
      kreatif.
    </p>
    <p className="mb-6">
      Di era ketika produktivitas semakin bergantung pada kecerdasan buatan,
      Claude menjadi salah satu alat favorit karena mampu menghasilkan jawaban
      yang rapi, fokus, dan mudah dipahami — sesuatu yang sangat dihargai oleh
      developer, mahasiswa, maupun profesional.
    </p>
    {/* === SEJARAH GEMINI AI === */}
    <h2 className="mb-4 text-3xl font-bold text-blue-900">
      Apa yang Sebenarnya Paling Sering Digunakan Orang Saat Memakai Claude?
    </h2>
    <p className="mb-6">
      Berdasarkan kebiasaan pengguna AI saat ini, berikut adalah beberapa hal
      yang paling sering dicari ketika membuka Claude:
    </p>
    <ol className="pl-6 mb-6 space-y-8 list-decimal">
      {/* 1 */}
      <li>
        <h3 className="text-xl font-semibold text-gray-900">
          Membuat dan Membersihkan Kode (Clean Code Vibes)
        </h3>
        <p>
          Banyak developer memilih Claude karena output kodenya rapi, mudah
          dibaca, dan mengikuti best-practice. Jawaban Claude cenderung bebas
          dari noise atau penjelasan berlebihan sehingga memudahkan integrasi
          langsung ke proyek.
        </p>

        <p className="mt-2 font-medium">Karakteristik utama:</p>
        <ul className="pl-5 mt-1 space-y-1 text-sm text-gray-700 list-disc">
          <li>Rapi dan mudah dibaca</li>
          <li>Mengikuti best-practice</li>
          <li>Bebas dari penjelasan berlebihan</li>
          <li>Struktur langkah demi langkah</li>
        </ul>

        <p className="mt-2">
          Claude sangat jago membuat fungsi yang jelas lengkap dokumentasi,
          melakukan refactoring kode besar, menjelaskan struktur program tanpa
          membuatnya rumit, dan menulis pseudo-code sebelum implementasi.
          <em className="block mt-2">
            “Kalau mau kode bersih, ke Claude saja.”
          </em>
        </p>
      </li>

      {/* 2 */}
      <li>
        <h3 className="text-xl font-semibold text-gray-900">
          Membantu Debugging Secara Logis
        </h3>
        <p>
          Claude sering dipakai untuk membaca error panjang, menjelaskan akar
          masalah dengan reasoning kuat, serta menawarkan solusi alternatif yang
          tidak mengubah gaya coding asli tim.
        </p>

        <ul className="pl-5 mt-2 space-y-1 text-sm text-gray-700 list-disc">
          <li>Membaca error panjang dan kompleks</li>
          <li>Menjelaskan akar masalah dan sebabnya</li>
          <li>Memberi solusi yang praktis dan dapat diandalkan</li>
          <li>Rekomendasi pencegahan di masa depan</li>
        </ul>

        <p className="mt-2">
          Pengguna menyukai Claude karena ia menjelaskan bukan hanya “apa” tapi
          juga “kenapa” dan “bagaimana menghindarinya”.
        </p>
      </li>

      {/* 3 */}
      <li>
        <h3 className="text-xl font-semibold text-gray-900">
          Menulis Konten Serius: Laporan, Esai, Proposal
        </h3>
        <p>
          Claude punya tone profesional yang stabil — cocok untuk membuat
          laporan ilmiah, esai, analisis, dokumen kerja, dan ringkasan panjang
          tanpa kehilangan struktur.
        </p>

        <ul className="pl-5 mt-2 space-y-1 text-sm text-gray-700 list-disc">
          <li>Menulis laporan akademik dan profesional</li>
          <li>Menyusun proposal dan analisis terstruktur</li>
          <li>Membuat ringkasan dokumen panjang</li>
        </ul>

        <p className="mt-2">
          Keunggulan: mampu menulis panjang tetap terstruktur dan mudah diikuti
          manusia.
        </p>
      </li>

      {/* 4 */}
      <li>
        <h3 className="text-xl font-semibold text-gray-900">
          Brainstorming & Ide Kreatif yang Lebih “Human”
        </h3>
        <p>
          Untuk brainstorming, Claude menghasilkan ide yang matang, relevan, dan
          langsung bisa dipakai — dari konsep produk sampai alur cerita dan
          branding.
        </p>

        <ul className="pl-5 mt-2 space-y-1 text-sm text-gray-700 list-disc">
          <li>Ide startup dan konsep produk</li>
          <li>Alur cerita dan penulisan kreatif</li>
          <li>Konsep branding dan nama produk</li>
          <li>Solusi desain sistem yang praktis</li>
        </ul>

        <p className="mt-2">
          Gaya ide yang tidak berlebihan dan terstruktur membuat Claude ideal
          sebagai partner kreatif.
        </p>
      </li>

      {/* 5 */}
      <li>
        <h3 className="text-xl font-semibold text-gray-900">
          Membuat Dokumentasi yang Sederhana tapi Lengkap
        </h3>
        <p>
          Banyak tim memakai Claude untuk dokumentasi—API docs, SOP, penjelasan
          library, arsitektur sistem, dan ringkasan rapat. Claude bukan sekadar
          menulis ulang; dia merancang dokumentasi agar mudah dimengerti
          manusia.
        </p>

        <ul className="pl-5 mt-2 space-y-1 text-sm text-gray-700 list-disc">
          <li>Dokumentasi API dan library</li>
          <li>SOP internal dan proses kerja</li>
          <li>Arsitektur sistem dan catatan teknis</li>
        </ul>
      </li>

      {/* 6 */}
      <li>
        <h3 className="text-xl font-semibold text-gray-900">
          Menggunakan Claude sebagai Partner Belajar
        </h3>
        <p>
          Pelajar dan pembelajar mandiri menyukai Claude karena kemampuannya
          menjelaskan secara sabar, step-by-step, dan menyesuaikan tingkat
          teknis sesuai permintaan.
        </p>

        <ul className="pl-5 mt-2 space-y-1 text-sm text-gray-700 list-disc">
          <li>Penjelasan dari basic hingga advanced</li>
          <li>Subject: ML, matematika, pemrograman, sejarah, ekonomi</li>
          <li>Gaya seperti “guru privat” yang sabar</li>
        </ul>

        <p className="mt-2">
          Claude cocok untuk belajar konsep rumit dengan pendekatan yang mudah
          diikuti.
        </p>
      </li>
    </ol>

    {/* Kesimpulan */}
    <h2 className="mb-4 text-3xl font-bold text-blue-900">Kesimpulan</h2>
    <p className="mb-6">
      <strong>Claude AI</strong> bukan hanya AI untuk menjawab pertanyaan — dia
      menjadi partner berpikir yang <strong> bersih, rapi, dan efisien</strong>.
      Banyak orang menggunakannya karena:
    </p>
    <ul className="pl-5 mt-2 mb-6 space-y-1 text-sm text-gray-700 list-disc">
      <li>vibe coding yang clean dan lengkap</li>
      <li>reasoning yang kuat dan logis</li>
      <li>hasil yang rapi dan profesional</li>
      <li>kemampuan menulis panjang tanpa “kelebihan bumbu”</li>
    </ul>
    <p className="mb-6">
      Dalam dunia yang serba cepat, Claude membantu pengguna tetap fokus,
      produktif, dan kreatif. Itulah sebabnya Claude kini menjadi salah satu AI
      yang paling disukai oleh developer, penulis, mahasiswa, hingga profesional
      bisnis.
    </p>
  </article>
);

// Komponen untuk Kotak Penulis
const AuthorBox = () => (
  <section className="max-w-4xl px-4 py-12 mx-auto my-20 border border-blue-100 shadow-sm bg-blue-50 rounded-xl sm:px-6 lg:px-8">
    <div className="flex items-center mb-4 space-x-5">
      <img
        className="object-cover w-16 h-16 rounded-full"
        src={PhotoProfile1}
        alt="Foto Muhammad Nabil"
      />
      <div>
        <p className="mb-1 text-sm font-semibold text-blue-700">Penulis</p>
        <h3 className="text-xl font-bold leading-tight text-blue-900">
          Muhammad Zacky Maulana
        </h3>
      </div>
    </div>

    <p className="leading-relaxed text-gray-700">
      Muhammad Zacky Maulana telah berkecimpung di dunia teknologi dan penulisan
      konten selama lebih dari 8 tahun. Berawal dari ketertarikannya pada
      pemrograman dan UX writing, Zacky kemudian mengembangkan karier sebagai
      <span className="font-semibold"> Technical Writer</span> dan{" "}
      <span className="font-semibold">Product Content Specialist</span> di
      berbagai perusahaan digital. Ia memiliki minat besar pada perkembangan
      AI, pengembangan software, dan strategi konten yang berorientasi pada
      pengguna. Melalui artikel dan tutorial ini, Zacky ingin membantu pembaca
      memahami teknologi dengan cara yang sederhana, praktis, dan mudah
      diterapkan dalam kehidupan sehari-hari. Ingin mengenal Zacky lebih jauh?
      Kamu bisa terhubung dengannya melalui{" "}
      <a href="#" className="font-semibold text-blue-700 hover:underline">
        LinkedIn
      </a>
      .
    </p>

    <p className="mt-4 text-sm font-semibold text-blue-700 cursor-pointer hover:underline">
      Tutorial lain dari Muhammad Zacky Maulana
    </p>
  </section>
);

// Komponen untuk Tag Terkait
const QuestionFAQ = () => (
  <section className="max-w-4xl px-4 py-2 mx-auto sm:px-6 lg:px-8">
    <h2 className="mb-6 text-3xl font-bold text-blue-900">
      Pertanyaan yang Sering Diajukan
    </h2>

    <div id="accordion-open" data-accordion="open">
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-gray-700 border hover:cursor-pointer border-gray-200 rounded-t-xl gap-3 bg-white hover:bg-gray-50 focus:bg-white active:bg-white !bg-white data-[active]:!bg-white transition-all"
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
            Apa kelebihan utama Claude dibanding AI lain seperti ChatGPT atau
            Gemini?
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
            Claude dikenal dengan kekuatan reasoning-nya yang sangat stabil dan
            mendalam. Banyak pengguna memilih Claude karena hasil tulisannya
            lebih rapi, profesional, dan tidak “berlebihan”. Untuk coding,
            Claude juga sering dianggap memiliki clean code vibes — struktur
            jelas, komentar tepat, dan tidak terlalu banyak noise.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full hover:cursor-pointer p-5 font-medium text-gray-700 border border-gray-200 rounded-t-xl gap-3 bg-white hover:bg-gray-50 focus:bg-white active:bg-white !bg-white data-[active]:!bg-white transition-all"
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
            Apakah Claude bagus untuk coding dan debugging?
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
            Ya, Claude sangat populer di kalangan developer. Pengguna
            menyukainya karena Claude dapat menjelaskan error dengan logika yang
            kuat, memperbaiki kode tanpa mengubah gaya coding, serta memberikan
            solusi yang bersih dan terstruktur. Bahkan untuk penjelasan sistem
            atau pseudo-code, Claude biasanya sangat presisi dan mudah dipahami.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium hover:cursor-pointer text-gray-700 border border-gray-200 rounded-t-xl gap-3 bg-white hover:bg-gray-50 focus:bg-white active:bg-white !bg-white data-[active]:!bg-white transition-all"
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
            Apakah Claude aman digunakan untuk dokumen kerja atau tugas sekolah?
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
            Claude cukup terpercaya untuk penulisan profesional karena tone-nya
            stabil, formal, dan tidak mudah “halusinasi panjang”. Untuk laporan,
            proposal, esai, atau dokumen kerja, Claude mampu menjaga struktur
            tetap rapi dari awal hingga akhir. Namun, seperti AI lainnya, tetap
            penting untuk memeriksa kembali fakta dan data yang diberikan.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Comments = () => {
  const commentSectionRef = useRef(null);
  const [lastUserName, setLastUserName] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Shen",
      date: "2 Nov 2025",
      message:
        "Halo, saya sedang mencari informasi mengenai AI, dan tulisan kakak diatas selain memberikan informasi juga jadi menginspirasi saya untuk lebih memperdalam dunia AI.",
      avatar: PhotoProfile2,
      replies: [
        {
          id: 2,
          name: "Muhammad Zacky Maulana",
          date: "2 Nov 2025",
          message: "Halo, senang bisa membantu.",
          avatar: PhotoProfile1,
        },
      ],
    },
  ]);

  // State untuk form komentar baru
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });

  // State untuk reply
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");

  // Fungsi handle input komentar utama
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setNewComment({
      ...newComment,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  // Kirim komentar utama
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !newComment.name ||
      !newComment.email ||
      !newComment.message ||
      !newComment.agree
    ) {
      alert("Harap isi semua kolom dan setujui kebijakan privasi.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      name: newComment.name,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      message: newComment.message,
      avatar: PhotoProfile3,
      replies: [],
    };

    // Tambahkan di atas komentar lain
    setComments([newEntry, ...comments]);
    setLastUserName(newComment.name);

    // Reset form
    setNewComment({ name: "", email: "", message: "", agree: false });
  };

  // Kirim balasan
  const handleReplySubmit = (e, parentId) => {
    e.preventDefault();

    if (!replyMessage) return alert("Balasan tidak boleh kosong!");

    const newReply = {
      id: Date.now(),
      name: lastUserName || "User",
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      message: replyMessage,
      avatar: PhotoProfile3,
    };

    // Tambahkan balasan ke komentar yang sesuai
    const updated = comments.map((c) =>
      c.id === parentId ? { ...c, replies: [...c.replies, newReply] } : c
    );

    setComments(updated);
    setReplyMessage("");
    setReplyingTo(null);

    // Scroll otomatis ke area komentar
    setTimeout(() => {
      commentSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  return (
    <section className="max-w-4xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
      <h2 className="mb-4 text-3xl font-bold text-blue-900">Komentar</h2>

      {/* Daftar Komentar */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id}>
            {/* Komentar Utama */}
            <article className="p-4 text-base bg-white border border-gray-100 rounded-lg">
              <footer className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <img
                    className="object-cover w-8 h-8 mr-4 rounded-full"
                    src={comment.avatar}
                    alt={`Foto ${comment.name}`}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-900">
                      {comment.name}
                    </p>
                    <p className="text-sm text-gray-600">{comment.date}</p>
                  </div>
                </div>
              </footer>
              <p className="text-gray-700">{comment.message}</p>

              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  onClick={() =>
                    setReplyingTo(replyingTo === comment.id ? null : comment.id)
                  }
                  className="text-sm font-medium text-gray-500 cursor-pointer hover:underline"
                >
                  BALAS
                </button>
              </div>

              {replyingTo === comment.id && (
                <form
                  onSubmit={(e) => handleReplySubmit(e, comment.id)}
                  className="mt-4 space-y-3"
                >
                  <textarea
                    rows={3}
                    placeholder="Tulis balasan..."
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    className="w-full p-2 text-black bg-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-700"
                  ></textarea>
                  <button
                    type="submit"
                    className="px-6 py-2 text-sm font-semibold text-white bg-blue-900 rounded-full hover:bg-blue-800 hover:cursor-pointer"
                  >
                    Kirim Balasan
                  </button>
                </form>
              )}
            </article>

            {comment.replies?.length > 0 && (
              <div className="mt-3 ml-6 space-y-4 lg:ml-12">
                {comment.replies.map((reply) => (
                  <article
                    key={reply.id}
                    className="p-4 text-base bg-white border border-gray-100 rounded-lg"
                  >
                    <footer className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <img
                          className="object-cover w-8 h-8 mr-2 rounded-full"
                          src={reply.avatar}
                          alt={`Foto ${reply.name}`}
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-semibold text-gray-900">
                            {reply.name}
                          </p>
                          <p className="text-sm text-gray-600">{reply.date}</p>
                        </div>
                      </div>
                    </footer>
                    <p className="text-gray-700">{reply.message}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <h3 className="mt-12 mb-4 text-3xl font-bold text-blue-900">
        Tinggalkan Komentar
      </h3>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <textarea
          id="message"
          placeholder="Komentar*"
          required
          rows={5}
          value={newComment.message}
          onChange={handleChange}
          className="w-full p-3 text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-700"
        ></textarea>

        <input
          type="text"
          id="name"
          placeholder="Nama*"
          required
          value={newComment.name}
          onChange={handleChange}
          className="w-full p-3 text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-700"
        />

        <input
          type="email"
          id="email"
          placeholder="Email*"
          required
          value={newComment.email}
          onChange={handleChange}
          className="w-full p-3 text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-700"
        />

        <div className="flex items-start space-x-2 text-sm text-gray-700">
          <input
            type="checkbox"
            id="agree"
            checked={newComment.agree}
            onChange={handleChange}
            className="w-4 h-4 mt-1 accent-blue-800 hover:cursor-pointer"
          />
          <label htmlFor="agree" className="leading-snug">
            Dengan menggunakan formulir ini, maka Anda setuju bahwa data pribadi
            Anda akan diproses sesuai dengan{" "}
            <a href="#" className="font-semibold text-blue-700 hover:underline">
              Kebijakan Privasi
            </a>{" "}
            kami.
          </label>
        </div>

        <button
          type="submit"
          className="px-10 py-3 text-base font-semibold text-white bg-blue-900 rounded-full hover:bg-blue-800 hover:cursor-pointer"
        >
          Kirim
        </button>
      </form>
    </section>
  );
};

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

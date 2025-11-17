import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "../assets/avatar.jpg";

// --- Icon SVGs (untuk ditaruh di dalam komponen) ---

// Ikon untuk 'lihat password' (Mata)
const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

// Ikon untuk 'edit' (Pensil)
const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);


// --- Komponen Halaman Utama ---
export default function SettingsPage() {
  return (
    // Latar belakang halaman
    <div className="min-h-screen bg-gray-100">
      {/* 1. Navbar Anda di bagian atas (full-width) */}
      <Navbar />
      
      {/* Kontainer utama yang menengahkan konten */}
      <div className="p-4 sm:p-8">
        
        {/* 2. Satu Kontainer Putih untuk SEMUA pengaturan */}
        <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md sm:p-8">
          
          {/* === BAGIAN PROFILE (Gambar 2) === */}
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-800">Profile</h2>
            <p className="mb-6 text-gray-500">
              Kelola avatar dan data profile kamu
            </p>

            <form className="space-y-6">
              {/* Avatar */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Avatar
                </label>
                <div className="relative w-24 h-24">
                  <img
                    className="object-cover w-24 h-24 rounded-full"
                    src={Avatar} // Placeholder avatar
                    alt="Avatar"
                  />
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 p-2 text-white bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" // UBAH: teal -> blue
                  >
                    <EditIcon/>
                  </button>
                </div>
              </div>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="mnabilfs"
                  className="w-full px-4 py-2 text-gray-500 bg-gray-100 border border-gray-200 rounded-md"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="mnabilfs22@gmail.com"
                  className="w-full px-4 py-2 text-gray-500 bg-gray-100 border border-gray-200 rounded-md"
                />
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="full_name"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  defaultValue="Muhammad Nabil Farras Sulthan"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" // UBAH: teal -> blue
                />
                <p className="mt-2 text-xs text-gray-500">
                  Pastikan nama lengkap kamu sesuai dengan KTP atau dokumen resmi
                  lainnya.
                </p>
              </div>

              {/* Tombol Simpan */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-5 py-2 text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" // UBAH: teal -> blue
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
          
          {/* === PEMISAH === */}
          <hr className="my-8 border-gray-200" />

          {/* === BAGIAN UBAH PASSWORD (Gambar 1) === */}
          <div>
            <div className="flex flex-col gap-8 lg:flex-row">
              
              {/* Bagian Kiri: Form */}
              <div className="flex-1">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">
                  Ubah Password
                </h2>
                <p className="mb-6 text-gray-500">
                  Ubah Password dengan memasukkan password lama dan password baru
                </p>

                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="old_password"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Password Lama
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="old_password"
                        placeholder="Masukkan password lama"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" // UBAH: teal -> blue
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                        <EyeIcon />
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="new_password"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Password Baru
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="new_password"
                        placeholder="Masukkan password baru"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" // UBAH: teal -> blue
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                        <EyeIcon />
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirm_password"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Konfirmasi Password Baru
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="confirm_password"
                        placeholder="Masukkan konfirmasi password baru"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" // UBAH: teal -> blue
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                        <EyeIcon />
                      </span>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="px-5 py-2 text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" // UBAH: teal -> blue
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>

              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
// src/pages/Kontak.jsx
import React, { useState } from "react";
import Navbar_LandingPage from "../components/Navbar_LandingPages";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import KontakImage from "../assets/Kontak2.png";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.agree
    ) {
      alert(
        "Harap isi semua kolom yang wajib diisi dan setujui kebijakan privasi."
      );
      return;
    }

    // Simulasi pengiriman form
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form setelah 3 detik
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        agree: false,
      });
    }, 3000);
  };

  // WhatsApp handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "6289527400005";
    const message = "Halo, saya ingin bertanya tentang Human After Tech...";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar_LandingPage />

      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Hubungi <span className="text-blue-600">Kami</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Punya pertanyaan? Kami siap membantu Anda!
          </p>

          {/* Decorative Image */}
          <div className="mt-8 flex justify-center">
            <img
              src={KontakImage}
              alt="Contact Illustration"
              className="rounded-2xl shadow-xl object-cover"
              style={{ width: "600px", height: "300px" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h2>
                <p className="text-gray-600 mb-8">
                  Jangan ragu untuk menghubungi kami. Tim kami akan merespons
                  sesegera mungkin.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* WhatsApp */}
                <div
                  onClick={handleWhatsAppClick}
                  className="flex items-start gap-4 p-5 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-green-600 font-medium">
                      +62 2895-2740-0005
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Klik untuk chat langsung
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              {isSubmitted ? (
                // Success Message
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <CheckCircle className="w-20 h-20 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-gray-600">
                    Terima kasih telah menghubungi kami. Kami akan segera
                    merespons pesan Anda.
                  </p>
                </div>
              ) : (
                // Contact Form
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Kirim Pesan
                  </h2>

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nama Lengkap <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Masukkan nama lengkap Anda"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 text-black placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="email@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 text-black placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Topik pesan Anda"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 text-black placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Pesan <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 text-black placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Privacy Agreement */}
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="w-4 h-4 mt-1 accent-blue-600 hover:cursor-pointer"
                    />
                    <label
                      htmlFor="agree"
                      className="text-sm text-gray-700 leading-snug"
                    >
                      Saya setuju bahwa data pribadi saya akan diproses sesuai
                      dengan{" "}
                      <a
                        href="#"
                        className="font-semibold text-blue-700 hover:underline"
                      >
                        Kebijakan Privasi
                      </a>{" "}
                      kami. <span className="text-red-600">*</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
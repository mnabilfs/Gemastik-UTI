import React, { useState } from "react";
import {
  MapPin,
  ExternalLink,
  Calendar,
  Edit2,
  Camera,
  BookOpen,
  Users,
  Heart,
} from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "../components/Navbar";
import Avatar from "../assets/avatar.jpg";

const Account = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const blogPosts = [
    {
      id: 1,
      title: "Sora AI: Masa Depan Video Generative",
      excerpt:
        "Sora AI mampu menghasilkan video realistis dari prompt teks sederhana. Teknologi ini mulai mengubah cara kreator membuat konten visual.",
      date: "10 November 2025",
      readTime: "5 min",
      likes: 234,
      comments: 18,
      image:
        "https://cdn.ftvnews.com.tw/manasystem/FileData/News/19931769-90c3-4c40-8dc3-ec8a39c24457.jpg",
    },
    {
      id: 2,
      title: "Notion AI: Asisten Cerdas untuk Produktivitas",
      excerpt:
        "Notion AI membuat penulisan, peringkasan, dan ideasi jadi jauh lebih cepat. Cocok untuk pelajar, pekerja, dan kreator yang ingin efisiensi.",
      date: "5 November 2025",
      readTime: "8 min",
      likes: 456,
      comments: 32,
      image:
        "https://preview.redd.it/what-are-your-thoughts-on-notion-ai-has-it-truly-simplified-v0-2telgdckvbmc1.jpg?width=400&format=pjpg&auto=webp&s=ca8fca67ac9c39e086571875be24b2988cf3af5a",
    },
    {
      id: 3,
      title: "Midjourney: Evolusi Seni Digital dengan AI",
      excerpt:
        "Midjourney menghadirkan gambar berkualitas tinggi hanya dari deskripsi teks. Seniman dan desainer kini dapat membuat konsep visual jauh lebih cepat.",
      date: "28 Oktober 2025",
      readTime: "12 min",
      likes: 789,
      comments: 56,
      image:
        "https://assets.eweek.com/uploads/2024/09/ew_20240925-midjourney-review.png?w=1024",
    },
  ];

  const stats = [
    { label: "Posts", value: "48", icon: BookOpen },
    { label: "Followers", value: "2.4K", icon: Users },
    { label: "Following", value: "186", icon: Users },
    { label: "Likes", value: "12.5K", icon: Heart },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {/* Cover Image */}
        <div className="relative h-64 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
          <button className="absolute flex items-center px-4 py-2 space-x-2 text-black transition bg-white rounded-lg top-4 right-4 bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 hover:cursor-pointer">
            <Camera className="w-4 h-4" />
            <span>Edit Cover</span>
          </button>
        </div>

        {/* Profile Info Section */}
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="relative mb-6 -mt-20">
            <div className="p-6 bg-white shadow-lg rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-end md:space-x-6">
                {/* Profile Picture */}
                <div className="relative mb-4 -mt-20 md:mb-0">
                  <div className="w-32 h-32 overflow-hidden border-4 border-white rounded-full shadow-xl">
                    <img
                      src={Avatar}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Name and Bio */}
                <div className="flex-1">
                  <div className="flex flex-col mb-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">
                        Muhammad Nabil Farras S.
                      </h1>
                      <p className="text-gray-600">@mnabilfs22</p>
                    </div>
                    <div className="flex mt-3 space-x-3 md:mt-0">
                      <button className="flex items-center px-6 py-2 space-x-2 font-semibold text-gray-700 transition bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                        <Edit2 className="w-4 h-4" />
                        <span>Edit Profile</span>
                      </button>
                    </div>
                  </div>

                  <p className="max-w-2xl mb-4 text-gray-700">
                    Full-stack developer yang passionate dengan teknologi web
                    modern. Suka berbagi pengetahuan melalui blog dan membantu
                    komunitas developer Indonesia berkembang. ✨
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Malang, Indonesia</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <a href="#" className="text-blue-500 hover:underline">
                        mnabilfs22.dev
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Joined March 2023</span>
                    </div>
                  </div>

                  <div className="flex mt-4 space-x-4">
                    <a
                      href="#"
                      className="text-gray-600 transition hover:text-blue-500"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 transition hover:text-gray-900"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 transition hover:text-blue-600"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 transition hover:text-red-500"
                    >
                      <MdEmail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 text-center transition bg-white shadow rounded-xl hover:shadow-lg"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="mb-6 bg-white shadow rounded-xl">
            <div className="border-b border-gray-200">
              <nav className="flex px-6 space-x-8">
                {["posts", "about", "followers"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-2 font-semibold capitalize transition cursor-pointer ${
                      activeTab === tab
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "posts" && (
                <div className="space-y-6">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="overflow-hidden transition bg-gray-50 rounded-xl hover:shadow-md"
                    >
                      <div className="md:flex">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="object-cover w-full h-48 md:w-48"
                        />
                        <div className="flex-1 p-6">
                          <h3 className="mb-2 text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-500">
                            {post.title}
                          </h3>
                          <p className="mb-4 text-gray-600">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime} read</span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center space-x-1">
                                <Heart className="w-4 h-4" />
                                <span>{post.likes}</span>
                              </span>
                              <span>{post.comments} comments</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "about" && (
                <div className="prose max-w-none">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Tentang Saya
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Halo! Saya adalah seorang full-stack developer dengan
                    pengalaman lebih dari 5 tahun dalam membangun aplikasi web
                    modern. Saya passionate dengan teknologi seperti React,
                    Node.js, dan cloud computing.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Melalui blog ini, saya berbagi pengalaman, tutorial, dan
                    tips seputar web development. Saya percaya bahwa berbagi
                    pengetahuan adalah cara terbaik untuk belajar dan membantu
                    komunitas developer tumbuh bersama.
                  </p>
                  <h4 className="mt-6 mb-3 text-lg font-bold text-gray-900">
                    Keahlian
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "React",
                      "Node.js",
                      "TypeScript",
                      "Next.js",
                      "Tailwind CSS",
                      "MongoDB",
                      "PostgreSQL",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "followers" && (
                <div className="py-12 text-center text-gray-500">
                  <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p>Daftar followers akan ditampilkan di sini</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

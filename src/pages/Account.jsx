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

const Account = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isFollowing, setIsFollowing] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Memulai Perjalanan sebagai Developer",
      excerpt:
        "Bagaimana saya memulai karir sebagai developer dan pelajaran yang saya dapatkan...",
      date: "10 November 2025",
      readTime: "5 min",
      likes: 234,
      comments: 18,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Tips Produktivitas untuk Developer",
      excerpt:
        "Beberapa tips dan trik yang membantu saya meningkatkan produktivitas dalam coding...",
      date: "5 November 2025",
      readTime: "8 min",
      likes: 456,
      comments: 32,
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Belajar React dari Nol",
      excerpt:
        "Panduan lengkap untuk pemula yang ingin belajar React JavaScript...",
      date: "28 Oktober 2025",
      readTime: "12 min",
      likes: 789,
      comments: 56,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
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
        <Navbar/>
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
                  <div className="flex items-center justify-center w-32 h-32 text-4xl font-bold text-white border-4 border-white rounded-full shadow-xl bg-gradient-to-br from-purple-400 to-blue-500">
                    MN
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 text-white transition bg-blue-500 rounded-full shadow-lg hover:bg-blue-600">
                    <Camera className="w-4 h-4" />
                  </button>
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
                      <button
                        onClick={() => setIsFollowing(!isFollowing)}
                        className={`px-6 py-2 rounded-lg font-semibold transition ${
                          isFollowing
                            ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        {isFollowing ? "Following" : "Follow"}
                      </button>
                      <button className="flex items-center px-6 py-2 space-x-2 font-semibold text-gray-700 transition bg-gray-100 rounded-lg hover:bg-gray-200">
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
                    className={`py-4 px-2 font-semibold capitalize transition ${
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

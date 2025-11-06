import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

// 🟢 import ikon
import iconHome from '../assets/iconHome.png';
import iconBlog from '../assets/iconBlog.png';
import iconInternship from '../assets/iconInternship.png';
import iconWorkshop from '../assets/iconWorkshop.png';
import iconChat from '../assets/iconChat.png';
import iconRecommend from '../assets/iconRecommend.png';
import iconAccount from '../assets/iconAccount.png';
import toggleIcon from '../assets/toggleIcon.png'; // tombol gulir sidebar

// 🟢placeholder umum untuk gambar dan author
import placeholder from '../assets/placeholder.png';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate('/notfound');
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f8f9fc' }}>
      <Navbar />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <div
          style={{
            width: isCollapsed ? '80px' : '220px',
            backgroundColor: '#eaf1fb',
            transition: 'width 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: isCollapsed ? 'center' : 'flex-start',
            padding: '20px 10px',
            boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
            height: '100%',
            overflowY: 'auto',
            position: 'sticky',
            top: 0,
          }}
        >
          {/* Tombol Toggle */}
          <button
            onClick={toggleSidebar}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '20px',
              padding: 0,
            }}
          >
            <img
              src={toggleIcon}
              alt="toggle sidebar"
              style={{
                width: '40px',
                height: '40px',
                transition: 'transform 0.3s ease',
                transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </button>

          {/* Menu Sidebar */}
          {/* 🟢 GANTI DI SINI: kamu bisa ubah label dan ikon satu per satu */}
          {[
            { label: 'Home', icon: iconHome },
            { label: 'Blog', icon: iconBlog },
            { label: 'Internship', icon: iconInternship },
            { label: 'Workshop', icon: iconWorkshop },
            { label: 'Chat', icon: iconChat },
            { label: 'Recommendation', icon: iconRecommend },
            { label: 'Account', icon: iconAccount },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => navigate('/notfound')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                backgroundColor: item.label === 'Recommendation' ? '#d4eaf8' : 'transparent',
                border: 'none',
                padding: '10px',
                borderRadius: '8px',
                marginBottom: '8px',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dce6f7')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  item.label === 'Recommendation' ? '#d4eaf8' : 'transparent')
              }
            >
              <img
                src={item.icon}
                alt={`${item.label} icon`}
                style={{
                  width: '25px',
                  height: '25px',
                  marginRight: isCollapsed ? '0' : '10px',
                  objectFit: 'contain',
                }}
              />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </div>

        {/* Konten Utama */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '30px' }}>
          {/* Section: Kategori Teratas */}
          <section style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2>Kategori Teratas</h2>
              <div
                style={{
                  backgroundColor: '#e0e0e0',
                  borderRadius: '20px',
                  padding: '2px 10px',
                  fontSize: '14px',
                }}
              >
                3
              </div>
            </div>

            <div style={{ display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap' }}>
              {['AI', 'GPT', 'NLP'].map((category, index) => (
                <div
                  key={index}
                  onClick={handleCategoryClick}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    width: '150px',
                    height: '150px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <img src={placeholder} alt={category} style={{ width: '50px', height: '50px' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{category}</p>
                  <p style={{ fontSize: '12px', color: '#666' }}>{Math.floor(Math.random() * 30 + 10)} articles</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Rekomendasi */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2>Rekomendasi</h2>
              <div
                style={{
                  backgroundColor: '#e0e0e0',
                  borderRadius: '20px',
                  padding: '2px 10px',
                  fontSize: '14px',
                }}
              >
                6
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px',
                marginTop: '20px',
              }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onClick={() => navigate('/notfound')}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={placeholder}
                      alt="placeholder"
                      style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        color: '#fff',
                        fontSize: '12px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      AI
                    </div>
                  </div>

                  <div style={{ padding: '15px', flex: 1 }}>
                    <h4>Judul Artikel Placeholder</h4>
                    <p style={{ fontSize: '13px', color: '#555' }}>
                      Deskripsi singkat artikel akan ditampilkan di sini sebagai placeholder sementara.
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#f1f1f1',
                      padding: '10px 15px',
                      borderTop: '1px solid #ddd',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                    }}
                  >
                    <img
                      src={placeholder}
                      alt="author"
                      style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        marginRight: '10px',
                        objectFit: 'cover',
                      }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Bambang</span>
                      <span style={{ fontSize: '12px', color: '#777' }}>09 July 2025</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

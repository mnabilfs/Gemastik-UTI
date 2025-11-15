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

import Logo_GPT from '../assets/Logo_GPT.png';
import iconAI from '../assets/iconAI.png';
import iconNLP from '../assets/iconNLP.png';

// 🟢placeholder umum untuk gambar dan author
import DbAI from '../assets/DbAI.png';
import DbAIVenti from '../assets/DbAIVenti.jpg';
import DbGaming from '../assets/DbGaming.jpg';
import DbGPT from '../assets/DbGPT.png';
import DbNLP from '../assets/DbNLP.jpg';
import DbUMKM from '../assets/DbUMKM.png';

//import placeholder from '../assets/placeholder.png';
// import placeholder from '../assets/placeholder.png';
import DbZAccount_male from '../assets/DbZAccount_male.png';
import DbZDevilAngelpfp from '../assets/DbZDevilAngelpfp.jpg';
import DbZSubarupfp from '../assets/DbZSubarupfp.jpg';
import DbZZlogopfpp from '../assets/DbZZlogopfp.jpg';

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
              onClick={() => navigate('/internship')}
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

            {/* ====== DAFTAR KATEGORI ====== */}
            <div style={{ display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap' }}>
              
              {/* 🧠 KATEGORI 1: AI */}
              <div
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
                {/* Ganti placeholder.png dengan logo kategori AI */}
                <img src={iconAI} alt="AI" style={{ width: '50px', height: '50px' }} />
                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>AI</p>
                <p style={{ fontSize: '12px', color: '#666' }}>25 articles</p>
              </div>

              {/* 💬 KATEGORI 2: GPT */}
              <div
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
                {/* Ganti placeholder.png dengan logo kategori GPT */}
                <img src={Logo_GPT} alt="GPT" style={{ width: '50px', height: '50px' }} />
                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>GPT</p>
                <p style={{ fontSize: '12px', color: '#666' }}>18 articles</p>
              </div>

              {/* 🗣️ KATEGORI 3: NLP */}
              <div
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
                {/* Ganti placeholder.png dengan logo kategori NLP */}
                <img src={iconNLP} alt="NLP" style={{ width: '50px', height: '50px' }} />
                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>NLP</p>
                <p style={{ fontSize: '12px', color: '#666' }}>14 articles</p>
              </div>

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

              {/* 📰 Artikel 1 */}
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: 'scale(1)',                 // ★ DITAMBAHKAN
                  transition: 'transform 0.25s ease',   // ★ DITAMBAHKAN
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}  // ★ DITAMBAHKAN
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}     // ★ DITAMBAHKAN
                onClick={() => navigate('/notfound')}
              >
                <div style={{ position: 'relative' }}>
                  <img src={DbAIVenti} alt="artikel-1" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    fontSize: '12px',
                    padding: '3px 8px',
                    borderRadius: '6px',
                  }}>AI</div>
                </div>
                <div style={{ padding: '15px', flex: 1 }}>
                  <h4>Playing a game with help of AI</h4>
                  <p style={{ fontSize: '13px', color: '#555' }}>
                    Pelajari cara Ai merevolusi dunia game dalam memberikan bantuan informasi dan strategi.
                  </p>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1',
                  padding: '10px 15px', borderTop: '1px solid #ddd',
                  borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px',
                }}>
                  <img src={DbZZlogopfpp} alt="author-1" style={{
                    width: '35px', height: '35px', borderRadius: '50%',
                    marginRight: '10px', objectFit: 'cover',
                  }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Muhammad Zacky Maulana</span>
                    <span style={{ fontSize: '12px', color: '#777' }}>09 July 2025</span>
                  </div>
                </div>
              </div>

              {/* 📰 Artikel 2 */}
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: 'scale(1)',                 // ★ DITAMBAHKAN
                  transition: 'transform 0.25s ease',   // ★ DITAMBAHKAN
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}  // ★ DITAMBAHKAN
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}     // ★ DITAMBAHKAN
                onClick={() => navigate('/notfound')}
              >
                <div style={{ position: 'relative' }}>
                  <img src={DbAI} alt="artikel-2" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: '8px', left: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#fff',
                    fontSize: '12px', padding: '3px 8px', borderRadius: '6px',
                  }}>AI</div>
                </div>
                <div style={{ padding: '15px', flex: 1 }}>
                  <h4>AI  dalam kurikulum sekolah</h4>
                  <p style={{ fontSize: '13px', color: '#555' }}>
                    Ide menghadirkan AI ke sekolah bukanlah hal buruk. Di era digital ini, keterampilan teknologi adalah kebutuhan pokok dan harus bertahap.
                  </p>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1',
                  padding: '10px 15px', borderTop: '1px solid #ddd',
                  borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px',
                }}>
                  <img src={DbZAccount_male} alt="author-2" style={{
                    width: '35px', height: '35px', borderRadius: '50%',
                    marginRight: '10px', objectFit: 'cover',
                  }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Siti</span>
                    <span style={{ fontSize: '12px', color: '#777' }}>10 July 2025</span>
                  </div>
                </div>
              </div>

              {/* 📰 Artikel 3 */}
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: 'scale(1)',                 // ★ DITAMBAHKAN
                  transition: 'transform 0.25s ease',   // ★ DITAMBAHKAN
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}  // ★ DITAMBAHKAN
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}     // ★ DITAMBAHKAN
                onClick={() => navigate('/notfound')}
              >
                <div style={{ position: 'relative' }}>
                  <img src={DbGPT} alt="artikel-3" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: '8px', left: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#fff',
                    fontSize: '12px', padding: '3px 8px', borderRadius: '6px',
                  }}>GPT</div>
                </div>
                <div style={{ padding: '15px', flex: 1 }}>
                  <h4>Apakah Chat GPT Bagus?</h4>
                  <p style={{ fontSize: '13px', color: '#555' }}>
                    Chat GPT bagus atau tidak tergantung pada bagaimana dan dalam konteks apa teknologi ini digunakan.
                  </p>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1',
                  padding: '10px 15px', borderTop: '1px solid #ddd',
                  borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px',
                }}>
                  <img src={DbZAccount_male} alt="author-3" style={{
                    width: '35px', height: '35px', borderRadius: '50%',
                    marginRight: '10px', objectFit: 'cover',
                  }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Andi</span>
                    <span style={{ fontSize: '12px', color: '#777' }}>11 July 2025</span>
                  </div>
                </div>
              </div>

              {/* 📰 Artikel 4 */}
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: 'scale(1)',                 // ★ DITAMBAHKAN
                  transition: 'transform 0.25s ease',   // ★ DITAMBAHKAN
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}  // ★ DITAMBAHKAN
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}     // ★ DITAMBAHKAN
                onClick={() => navigate('/notfound')}
              >
                <div style={{ position: 'relative' }}>
                  <img src={DbNLP} alt="artikel-4" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: '8px', left: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#fff',
                    fontSize: '12px', padding: '3px 8px', borderRadius: '6px',
                  }}>NLP</div>
                </div>
                <div style={{ padding: '15px', flex: 1 }}>
                  <h4>Natural Language Processing (NLP) dalam AI</h4>
                  <p style={{ fontSize: '13px', color: '#555' }}>
                    Dalam era digital yang semakin mengutamakan komunikasi berbasis teks dan suara, NLP menjadi elemen vital.
                  </p>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1',
                  padding: '10px 15px', borderTop: '1px solid #ddd',
                  borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px',
                }}>
                  <img src={DbZDevilAngelpfp} alt="author-4" style={{
                    width: '35px', height: '35px', borderRadius: '50%',
                    marginRight: '10px', objectFit: 'cover',
                  }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>GreatMoonAroma</span>
                    <span style={{ fontSize: '12px', color: '#777' }}>12 July 2025</span>
                  </div>
                </div>
              </div>

              {/* 📰 Artikel 5 */}
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: 'scale(1)',                 // ★ DITAMBAHKAN
                  transition: 'transform 0.25s ease',   // ★ DITAMBAHKAN
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}  // ★ DITAMBAHKAN
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}     // ★ DITAMBAHKAN
                onClick={() => navigate('/notfound')}
              >
                <div style={{ position: 'relative' }}>
                  <img src={DbGaming} alt="artikel-5" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: '8px', left: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#fff',
                    fontSize: '12px', padding: '3px 8px', borderRadius: '6px',
                  }}>Gaming</div>
                </div>
                <div style={{ padding: '15px', flex: 1 }}>
                  <h4>Evolution of AI in Gaming</h4>
                  <p style={{ fontSize: '13px', color: '#555' }}>
                    perusahaan sekarang berfokus di pengembangan agen AI yang belajar berdasarkan perilaku pemain yang membuat interaksi game dinamis
                  </p>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1',
                  padding: '10px 15px', borderTop: '1px solid #ddd',
                  borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px',
                }}>
                  <img src={DbZAccount_male} alt="author-5" style={{
                    width: '35px', height: '35px', borderRadius: '50%',
                    marginRight: '10px', objectFit: 'cover',
                  }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Teguh</span>
                    <span style={{ fontSize: '12px', color: '#777' }}>13 July 2025</span>
                  </div>
                </div>
              </div>

              {/* 📰 Artikel 6 */}
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transform: 'scale(1)',                 // ★ DITAMBAHKAN
                  transition: 'transform 0.25s ease',   // ★ DITAMBAHKAN
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}  // ★ DITAMBAHKAN
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}     // ★ DITAMBAHKAN
                onClick={() => navigate('/notfound')}
              >
                <div style={{ position: 'relative' }}>
                  <img src={DbUMKM} alt="artikel-6" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: '8px', left: '8px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#fff',
                    fontSize: '12px', padding: '3px 8px', borderRadius: '6px',
                  }}>UMKM</div>
                </div>
                <div style={{ padding: '15px', flex: 1 }}>
                  <h4>AI Untuk Industri Kreatif</h4>
                  <p style={{ fontSize: '13px', color: '#555' }}>
                    sejak diluncurkan aplikasi desain yang dapat membuat bentuk wajah dan orang. AI bisa dimanfaatkan pada bidang industri kreatif
                  </p>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1',
                  padding: '10px 15px', borderTop: '1px solid #ddd',
                  borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px',
                }}>
                  <img src={DbZSubarupfp} alt="author-6" style={{
                    width: '35px', height: '35px', borderRadius: '50%',
                    marginRight: '10px', objectFit: 'cover',
                  }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Aoirun</span>
                    <span style={{ fontSize: '12px', color: '#777' }}>14 July 2025</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '40px',
                gap: '15px',
              }}
            >
              {/* Tombol nomor 1 */}
              <div
                 onClick={() => window.location.reload()}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.backgroundColor = '#e6e6e6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                1
              </div>

              {/* Tombol panah ">" */}
              <div
                 onClick={() => window.location.reload()}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.backgroundColor = '#e6e6e6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                &gt;
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

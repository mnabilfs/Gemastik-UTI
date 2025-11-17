// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../assets/Logo1.png";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.password) {
      newErrors.password = "Password harus diisi";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      const userData = {
        name: "User Demo",
        email: formData.email,
        loginAt: new Date().toISOString(),
      };
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("isLoggedIn", "true");

      setIsLoading(false);
      navigate("/home");
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      overflow: 'hidden',
      margin: 0,
      padding: 0
    }}>
      {/* Left Side - Form */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '60%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        boxSizing: 'border-box',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        {/* Solid Background - warna asli */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom right, #3B82F6, #2563EB, #1D4ED8)'
        }}></div>

        {/* Batik Pattern 1 - Motif Kawung */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50m-15 0a15 15 0 1 1 30 0a15 15 0 1 1 -30 0M50 0m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0M50 100m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0M0 50m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0M100 50m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>

        {/* Batik Pattern 2 - Motif Parang */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60 Q30 40 60 60 T120 60' stroke='%23ffffff' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 0 Q30 -20 60 0 T120 0' stroke='%23ffffff' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 120 Q30 100 60 120 T120 120' stroke='%23ffffff' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          backgroundPosition: '10px 10px'
        }}></div>

        {/* Subtle texture dots */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.6) 0.5px, transparent 0.5px)`,
          backgroundSize: '20px 20px'
        }}></div>

        <div style={{
          position: 'relative',
          width: '448px',
          minWidth: '448px',
          maxWidth: '448px',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          boxShadow: '0px 7px 4px 0px rgba(0, 0, 0, 0.3)',
          padding: '40px',
          boxSizing: 'border-box',
          zIndex: 2
        }}>
          {/* Logo */}
          <div style={{ 
            position: 'relative',
            top: -15,
            left: -30,
            width: '220px',
            height: '220px',
            marginBottom: '-70px',
            overflow: 'visible'
          }}>
            <img 
              src={Logo} 
              alt="Logo" 
              style={{
                position: 'absolute',
                top: -15,
                left: -30,
                width: '220px',
                height: '220px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>

          {/* Header Text */}
          <div style={{ 
            position: 'relative',
            marginBottom: '32px',
            width: '100%'
          }}>
            <h2 
              style={{
                position: 'relative',
                top: 0,
                left: 0,
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: '35px',
                lineHeight: '42px',
                color: '#0077FF',
                WebkitTextStroke: '0.3px rgba(0, 0, 0, 0.5)',
                margin: '0 0 8px 0',
                padding: 0
              }}
            >
              Masuk
            </h2>
            <p 
              style={{
                position: 'relative',
                top: 0,
                left: 0,
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '15px',
                lineHeight: '21px',
                color: '#000000',
                WebkitTextStroke: '0.3px rgba(0, 119, 255, 0.5)',
                margin: 0,
                padding: 0
              }}
            >
              Selamat datang di Human After Tech
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            {/* Email Field */}
            <div style={{ 
              position: 'relative',
              marginBottom: '20px',
              width: '368px',
              height: 'auto'
            }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                style={{
                  position: 'relative',
                  top: 0,
                  left: 0,
                  width: '368px',
                  minWidth: '368px',
                  maxWidth: '368px',
                  height: '52px',
                  minHeight: '52px',
                  maxHeight: '52px',
                  padding: '14px 20px',
                  backgroundColor: '#EFEEEE',
                  borderRadius: '20px',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '24px',
                  border: 'none',
                  outline: errors.email ? '2px solid #EF4444' : 'none',
                  boxSizing: 'border-box',
                  display: 'block'
                }}
              />
              {errors.email && (
                <p style={{ 
                  position: 'relative',
                  top: 0,
                  left: 0,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#EF4444', 
                  fontFamily: 'Poppins', 
                  fontWeight: 400,
                  margin: '4px 0 0 0',
                  padding: 0,
                  width: '368px'
                }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div style={{ 
              position: 'relative',
              marginBottom: '20px',
              width: '368px',
              height: 'auto'
            }}>
              <div style={{ 
                position: 'relative',
                width: '368px',
                minWidth: '368px',
                maxWidth: '368px',
                height: '52px',
                minHeight: '52px',
                maxHeight: '52px'
              }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '368px',
                    minWidth: '368px',
                    maxWidth: '368px',
                    height: '52px',
                    minHeight: '52px',
                    maxHeight: '52px',
                    padding: '14px 50px 14px 20px',
                    backgroundColor: '#EFEEEE',
                    borderRadius: '20px',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '24px',
                    border: 'none',
                    outline: errors.password ? '2px solid #EF4444' : 'none',
                    boxSizing: 'border-box',
                    display: 'block'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '20px',
                    height: '20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#6B7280',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    zIndex: 2
                  }}
                >
                  {showPassword ? (
                    <EyeOff style={{ width: '20px', height: '20px' }} />
                  ) : (
                    <Eye style={{ width: '20px', height: '20px' }} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p style={{ 
                  position: 'relative',
                  top: 0,
                  left: 0,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#EF4444', 
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  margin: '4px 0 0 0',
                  padding: 0,
                  width: '368px'
                }}>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div style={{ 
              position: 'relative',
              textAlign: 'right', 
              width: '368px',
              minWidth: '368px',
              maxWidth: '368px',
              height: 'auto',
              marginBottom: '20px'
            }}>
              <button
                type="button"
                onClick={() => alert("Fitur lupa password belum tersedia")}
                style={{
                  position: 'relative',
                  background: 'none',
                  border: 'none',
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#0077FF',
                  fontWeight: 500,
                  fontFamily: 'Poppins',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  padding: 0
                }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                Lupa Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                position: 'relative',
                top: 0,
                left: 0,
                width: '368px',
                minWidth: '368px',
                maxWidth: '368px',
                height: '52px',
                minHeight: '52px',
                maxHeight: '52px',
                backgroundColor: '#0077FF',
                borderRadius: '20px',
                fontFamily: 'Poppins',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '27px',
                border: 'none',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.5 : 1,
                transition: 'opacity 0.3s, transform 0.2s',
                boxSizing: 'border-box',
                display: 'block',
                marginBottom: '20px'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.opacity = '0.9';
                  e.target.style.transform = 'scale(1.01)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.opacity = '1';
                  e.target.style.transform = 'scale(1)';
                }
              }}
            >
              {isLoading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          {/* Register Link */}
          <p style={{ 
            position: 'relative',
            top: 0,
            left: 0,
            textAlign: 'center', 
            color: '#000000',
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            width: '368px',
            minWidth: '368px',
            maxWidth: '368px',
            margin: 0,
            padding: 0
          }}>
            Belum memiliki akun?{" "}
            <button
              onClick={() => navigate("/register")}
              style={{
                position: 'relative',
                background: 'none',
                border: 'none',
                color: '#0077FF',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                fontFamily: 'Poppins',
                cursor: 'pointer',
                textDecoration: 'none',
                padding: 0
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Registrasi
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Logo Besar */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9FAFB',
        padding: 0,
        boxSizing: 'border-box',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        {/* Batik Pattern 1 - Motif Kawung untuk sisi kanan */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230077FF' fill-opacity='1'%3E%3Cpath d='M50 50m-15 0a15 15 0 1 1 30 0a15 15 0 1 1 -30 0M50 0m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0M50 100m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0M0 50m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0M100 50m-8 0a8 8 0 1 1 16 0a8 8 0 1 1 -16 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          zIndex: 0
        }}></div>

        {/* Batik Pattern 2 - Motif Parang untuk sisi kanan */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60 Q30 40 60 60 T120 60' stroke='%230077FF' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 0 Q30 -20 60 0 T120 0' stroke='%230077FF' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 120 Q30 100 60 120 T120 120' stroke='%230077FF' stroke-width='1.5' fill='none' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          backgroundPosition: '10px 10px',
          zIndex: 0
        }}></div>

        {/* Subtle texture dots untuk sisi kanan */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          backgroundImage: `radial-gradient(circle, rgba(0, 119, 255, 0.6) 0.5px, transparent 0.5px)`,
          backgroundSize: '20px 20px',
          zIndex: 0
        }}></div>

        {/* Tulisan Website dengan Animasi Fade-in-out */}
        <h2 className="fade-in-out" style={{
          position: 'relative',
          top: '60px',
          fontFamily: 'Poppins',
          fontWeight: 800,
          fontSize: '48px',
          lineHeight: '1',
          color: '#0077FF',
          WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)',
          margin: '0 0 20px 0',
          textAlign: 'center',
          animationDelay: '0s',
          zIndex: 1
        }}>
          HAT
        </h2>

        {/* Logo Container */}
        <div style={{ 
          position: 'relative',
          width: '512px',
          height: '512px',
          maxWidth: '512px',
          maxHeight: '512px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '-40px 0',
          zIndex: 1
        }}>
          <img 
            src={Logo} 
            alt="Logo Besar" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              maxWidth: '512px',
              maxHeight: '512px',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Tulisan Terpercaya dengan Animasi Fade-in-out (delay 4s agar muncul setelah Website hilang) */}
        <h2 className="fade-in-out" style={{
          position: 'relative',
          top: '-60px',
          fontFamily: 'Poppins',
          fontWeight: 800,
          fontSize: '48px',
          lineHeight: '1',
          color: '#0077FF',
          WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)',
          margin: '20px 0 0 0',
          textAlign: 'center',
          animationDelay: '4s',
          zIndex: 1
        }}>
          Terpercaya
        </h2>
      </div>
    </div>
  );
};

export default Login;
export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      
      {/* Card User */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <h4>Muhammad Nabil Farras Sulthan</h4>
        <p style={{ color: "gray" }}>mahasiswa</p>
      </div>

      {/* Grid dashboard */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* Statistik Membaca */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Statistik Membaca</h3>
          <img
            src="/statistik.png"
            alt="chart"
            style={{ width: "100%", marginTop: "10px" }}
          />
        </div>

        {/* Progress Learning Hub */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Progress Learning Hub</h3>
          <div style={{ marginTop: "10px" }}>
            <p>Total Bacaan Minggu Ini</p>
            <div
              style={{
                background: "#d1d5db",
                height: "10px",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  background: "#3b82f6",
                  width: "60%",
                  height: "10px",
                  borderRadius: "8px",
                }}
              />
            </div>
            <p>15/25</p>
          </div>
        </div>

        {/* Top AI The Week */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Top AI The Week</h3>
          <ol>
            <li>Jasper AI</li>
            <li>ChatGPT</li>
            <li>Midjourney</li>
          </ol>
        </div>

        {/* Berita AI */}
        <div>
          <h3>Berita AI Terkini</h3>
          <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            <img src="/berita1.png" style={{ width: "300px" }} />
            <img src="/berita2.png" style={{ width: "300px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

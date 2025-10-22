// =========================
// 🌿 ENHANCED SMOOTH ANIMATIONS - FIXED LOADING
// =========================

let isLoading = false;

function bukaSurat() {
  if (isLoading) return;
  isLoading = true;
  
  const envelope = document.getElementById('mainEnvelope');
  const mainContent = document.querySelector('.max-w-md');

  // Animasi klik
  envelope.style.animation = 'none';
  envelope.style.transform = 'scale(0.92) rotate(-3deg)';
  envelope.style.filter = 'brightness(0.9) drop-shadow(0 15px 30px rgba(16, 185, 129, 0.4))';
  
  // Hapus loading yang sudah ada
  const existingLoading = document.getElementById('loadingOverlay');
  if (existingLoading) existingLoading.remove();
  
  // Buat ripple effect
  createGentleRipple();
  
  // Show loading dengan delay
  setTimeout(() => {
    createLoadingOverlay();
    
    // Sembunyikan main content
    if (mainContent) {
      mainContent.style.opacity = '0';
      mainContent.style.pointerEvents = 'none';
    }
  }, 300);
  
  // Navigate
  setTimeout(() => {
    window.location.href = "surat.html";
  }, 1200);
}

function createLoadingOverlay() {
  const loadingOverlay = document.createElement('div');
  loadingOverlay.id = 'loadingOverlay';
  
  // INLINE STYLES - tidak pakai class CSS
  loadingOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(209, 250, 229, 0.98), rgba(167, 243, 208, 0.95));
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.5s ease;
  `;
  
  loadingOverlay.innerHTML = `
    <div style="text-align: center;">
      <img 
        src="assets/logo-ppmb.png"
        alt="Kotak Surat Hati"
        style="width: 6rem; height: 6rem; margin: 0 auto 1rem; opacity: 0.9;">
      <div>
        <p style="color: #065f46; font-weight: 500; font-size: 1.125rem; margin: 0 0 0.5rem 0;">
          Membuka Surat...
        </p>
        <p style="color: #059669; font-size: 0.875rem; margin: 0;">
          Hai Rootz!
        </p>
      </div>
    </div>
  `;
  
  document.body.appendChild(loadingOverlay);
  
  // Trigger animation
  setTimeout(() => {
    loadingOverlay.style.opacity = '1';
  }, 10);
}

function createGentleRipple() {
  const envelope = document.getElementById('mainEnvelope');
  const container = envelope.parentElement;
  
  const ripple = document.createElement('div');
  ripple.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: gentleRipple 0.8s ease-out;
    pointer-events: none;
    z-index: 5;
  `;
  
  container.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 800);
}

// Enhanced interactivity
document.addEventListener('DOMContentLoaded', function() {
  const envelope = document.getElementById('mainEnvelope');
  
  if (!envelope) return;

  // Mouse enter - gentle scale and glow
  envelope.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.filter = 'drop-shadow(0 25px 50px rgba(16, 185, 129, 0.25)) brightness(1.02)';
  });
  
  // Mouse leave - smooth return
  envelope.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.filter = 'drop-shadow(0 20px 40px rgba(16, 185, 129, 0.2)) brightness(1)';
  });
  
  // Touch device support
  envelope.addEventListener('touchstart', function() {
    this.style.transform = 'scale(0.98)';
  }, { passive: true });
  
  envelope.addEventListener('touchend', function() {
    this.style.transform = 'scale(1)';
  }, { passive: true });
  
  // Keyboard support
  envelope.addEventListener('focus', function() {
    this.style.transform = 'scale(1.05)';
  });
  
  envelope.addEventListener('blur', function() {
    this.style.transform = 'scale(1)';
  });
});

// Add ripple animation ke CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes gentleRipple {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0.6;
    }
    100% {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyle);

// =========================
// 💚 FUNGSI UNTUK SURAT.HTML
// =========================

// Data surat dengan foto dan pesan
const suratList = [
  {
    nama: "Sarah",
    foto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    pesan: "Hari ini aku ingin mengingatkanmu bahwa kamu adalah seseorang yang sangat berharga. Setiap langkah yang kamu ambil, setiap keputusan yang kamu buat, semuanya membawamu pada perjalanan yang unik. Jangan pernah meragukan dirimu sendiri karena di balik semua keraguan itu, ada potensi besar yang menantimu. Teruslah berjalan, meski pelan, yang penting konsisten. Aku percaya padamu. Pernahkah kamu merasa lelah dengan semua rutinitas? Aku juga. Tapi kemudian aku sadar, dalam kelelahan itu ada pelajaran tentang ketangguhan. Setiap bangun pagi adalah kesempatan baru untuk mencoba, untuk belajar, untuk tumbuh. Jangan biarkan kelelahan menghentikanmu. Istirahatlah sejenak, tapi jangan menyerah. Kamu lebih kuat dari yang kamu kira. Bahkan di saat-saat tersulit sekalipun, ada kekuatan dalam dirimu yang belum sepenuhnya kamu eksplor."
  },
  {
    nama: "Rizky Pratama",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    pesan: "Pernahkah kamu merasa lelah dengan semua rutinitas? Aku juga. Tapi kemudian aku sadar, dalam kelelahan itu ada pelajaran tentang ketangguhan. Setiap bangun pagi adalah kesempatan baru untuk mencoba, untuk belajar, untuk tumbuh. Jangan biarkan kelelahan menghentikanmu. Istirahatlah sejenak, tapi jangan menyerah. Kamu lebih kuat dari yang kamu kira. Bahkan di saat-saat tersulit sekalipun, ada kekuatan dalam dirimu yang belum sepenuhnya kamu eksplor. Progress tidak selalu linear. Ada hari-hari di mana kita merasa stuck, seolah tidak ada kemajuan. Tapi percayalah, setiap usaha kecil yang kita lakukan setiap hari akan terakumulasi menjadi sesuatu yang besar."
  },
  {
    nama: "Dewi Lestari",
    foto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    pesan: "Terkadang kita terlalu sibuk mencari kebahagiaan di tempat jauh, sampai lupa bahwa kebahagiaan bisa ditemukan dalam hal-hal kecil. Secangkir kopi hangat di pagi hari, senyuman dari orang asing, bunga yang mekar di tepi jalan, atau bahkan bisa bernapas dengan lega. Hari ini, cobalah untuk lebih mindful. Perhatikan hal-hal kecil di sekitarmu. Syukuri setiap momen. Hidup ini singkat, mari kita isi dengan hal-hal yang berarti dan berharga bagi jiwa kita."
  },
  {
    nama: "Ahmad Fauzi",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    pesan: "Aku ingin berbagi sesuatu yang baru saja kupelajari: Progress tidak selalu linear. Ada hari-hari di mana kita merasa stuck, seolah tidak ada kemajuan. Tapi percayalah, setiap usaha kecil yang kita lakukan setiap hari akan terakumulasi menjadi sesuatu yang besar. Seperti tetesan air yang terus menerus bisa melubangi batu. Jadi, jangan berhenti. Terus menetes. Konsistensi adalah kunci dari segala kesuksesan yang berkelanjutan."
  },
  {
    nama: "Maya Sari",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    pesan: "Untuk semua yang sedang berjuang dengan rasa cemasnya: Kamu tidak sendirian. Rasa cemas itu seperti awan yang lewat, datang dan pergi. Ia tidak mendefinisikanmu. Latihlah untuk bernapas dalam-dalam, untuk grounding diri, untuk mengingat bahwa kamu aman pada saat ini. Jika hari ini berat, istirahatlah. Besok adalah hari baru dengan energi baru. Kamu bisa melewati ini. Percayalah pada proses pemulihan dirimu sendiri."
  },
  {
    nama: "Budi Santoso",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    pesan: "Pernah dengar tentang 'the compound effect'? Hal-hal kecil yang dilakukan secara konsisten akan memberikan hasil yang besar dalam jangka panjang. Membaca 10 halaman sehari, berjalan 15 menit, menulis jurnal 5 menit - semuanya terlihat kecil, tapi dalam setahun akan memberikan dampak yang signifikan. Mulailah dari yang kecil, lakukan secara konsisten, dan lihat keajaiban yang terjadi dalam hidupmu secara bertahap namun pasti."
  }
];

// =========================
// 📦 MEMUAT DAFTAR SURAT
// =========================
function muatSurat() {
  const container = document.getElementById("daftar-surat");
  const loading = document.getElementById("loadingSurat");
  if (!container) return;

  // Tampilkan overlay loading
  if (loading) {
    loading.style.opacity = "1";
    loading.style.pointerEvents = "all";
  }

  // Generate kartu surat dengan sedikit delay agar lembut
  setTimeout(() => {
    suratList.forEach((surat, index) => {
      const card = document.createElement("div");
      card.className = "surat-card";
      card.style.animationDelay = `${index * 0.1}s`;

      const panjangPesan = surat.pesan.length > 250;
      const kelasPesan = panjangPesan ? "panjang" : "";

      card.innerHTML = `
        <div class="surat-header">
          <img src="${surat.foto}" alt="${surat.nama}" class="foto-pengirim"
            onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'">
          <div>
            <h3 class="nama-pengirim">${surat.nama}</h3>
          </div>
        </div>
        <div class="isi-surat ${kelasPesan}">${surat.pesan}</div>
        ${panjangPesan ? `
          <button class="tombol-baca" onclick="bukaModal('${escapeQuotes(surat.nama)}', '${escapeQuotes(surat.foto)}', '${escapeQuotes(surat.pesan)}')">
            Baca Selengkapnya
          </button>` : ""}
        <div class="surat-footer">Pesan dari hati 💚</div>
      `;
      container.appendChild(card);
    });

    // Sembunyikan loading dengan transisi lembut
    if (loading) {
      loading.style.transition = "opacity 0.6s ease";
      loading.style.opacity = "0";
      setTimeout(() => (loading.style.display = "none"), 600);
    }
  }, 1200);
}

// Escape agar kutip tunggal tidak rusak di onclick
function escapeQuotes(text) {
  return text.replace(/'/g, "\\'").replace(/"/g, "&quot;");
}

// =========================
// 💌 MODAL SURAT - FIXED SCROLL
// =========================
function bukaModal(nama, foto, pesan) {
  // Hapus modal yang sudah ada
  const existingModal = document.querySelector('.modal-overlay');
  if (existingModal) existingModal.remove();

  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.innerHTML = `
    <div class="modal-content">
      <button class="tombol-tutup" onclick="tutupModal(this)">×</button>
      <div class="modal-header">
        <img src="${foto}" alt="${nama}" class="modal-foto"
          onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'">
        <h3 class="modal-nama">${nama}</h3>
      </div>
      <div class="modal-pesan">${pesan}</div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  setTimeout(() => modalOverlay.classList.add("active"), 10);

  // Close modal on overlay click dan ESC key
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) tutupModal(modalOverlay);
  });

  document.addEventListener("keydown", function closeOnEscape(e) {
    if (e.key === "Escape") {
      tutupModal(modalOverlay);
      document.removeEventListener("keydown", closeOnEscape);
    }
  });
}

function tutupModal(el) {
  const modalOverlay = el.closest ? el.closest(".modal-overlay") : el;
  modalOverlay.classList.remove("active");
  setTimeout(() => {
    if (modalOverlay.parentElement) {
      modalOverlay.remove();
    }
  }, 300);
}

// =========================
// 🔙 TOMBOL KEMBALI
// =========================
function kembaliKeIndex() {
  document.body.style.opacity = "0";
  document.body.style.transform = "scale(0.98)";
  document.body.style.transition = "all 0.5s ease";
  setTimeout(() => {
    window.location.href = "index.html";
  }, 600);
}

// =========================
// INITIALIZATION SURAT.HTML
// =========================
document.addEventListener("DOMContentLoaded", () => {
  // Kalau ini halaman surat
  if (document.getElementById("daftar-surat")) {
    muatSurat();
  }
});
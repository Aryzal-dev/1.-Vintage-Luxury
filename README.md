# Vintage Luxury — Romantic Wedding Invitation Template
### Premium Digital Wedding Invitation for **dipernikahankita**

Website undangan pernikahan digital berkonsep **Vintage Luxury – Romantic Wedding Stationery**, dirancang secara khusus berdasarkan gambar referensi dengan kesesuaian visual 85–90%, ditambah kualitas desain modern, interaktif, responsif, dan elegan.

---

## ✨ Fitur & Struktur Halaman

1. **Section 01 — Cover Page (Vintage Envelope & Wax Seal)**
   - Background Deep Espresso (`#29190F`) dengan double frame Antique Gold.
   - Ornamen buket bunga kering (*dried floral arrangement*) pada sudut kiri atas dan kanan bawah.
   - Desain amplop klasik dengan segel lilin emas (*gold wax seal*).
   - Animasi interaktif saat amplop dibuka (3D flap open, golden confetti burst, letter slide-out).
   - Pemutaran musik latar otomatis setelah undangan dibuka.

2. **Section 02 — Home Page (Luxury Wedding Stationery Collage)**
   - Layout *editorial scrapbook* mewah dengan perpaduan Deep Espresso dan Warm Ivory.
   - Foto utama *arch portrait*, kartu tanggal pernikahan, dan kartu nama kedua mempelai.
   - Tiga tombol navigasi cepat: *Our Story*, *Details*, *Gallery*.
   - Strip foto momen romantis, badge stempel RSVP, dan badge detail acara.
   - **Countdown Timer Otomatis** (Hari : Jam : Menit : Detik) yang berjalan *real-time*.

3. **Section 03 — Our Love Story (Romantic Editorial Timeline)**
   - Background Warm Ivory (`#F7F0E3`) dengan aksen tekstur kertas vintage.
   - Judul *"OUR LOVE STORY"* & subtitle *"Every love tale is a forever"*.
   - 3 kartu milestone bergaya polaroid klasik (*The First Meeting*, *First Date*, *The Proposal*).
   - Narasi editorial romantis dengan ornamen pemisah emas.

4. **Section 04 — Event Details (Classic Vintage Line-Art)**
   - 4 ilustrasi *line-art* klasik kustom:
     - **Location** (Wedding Arch) dengan tombol *"VIEW ADDRESS"* membuka Google Maps.
     - **Date** (Desk Calendar) dengan tombol *"SAVE DATE"* integrasi Google Calendar.
     - **Ceremony** (Akad / Pemberkatan) dengan waktu dan detail lokasi.
     - **Reception** (Resepsi) dengan waktu dan jam pesta.

5. **Section 05 — RSVP Page (Luxury Dark Chocolate Card)**
   - Background Dark Chocolate (`#3B2519`) dengan ornamen floral emas.
   - Header amplop *"Please Respond By JULY 15, 2027"* dengan stempel wax seal.
   - Formulir Warm Ivory: Nama, Nomor WhatsApp, Pilihan Hadir (*Joyfully Accepts*) / Tidak Hadir (*Regretfully Declines*), Jumlah Tamu, dan Ucapan/Doa.
   - Validasi form, efek selebrasi confetti, serta penyimpanan data (localStorage & API ready).
   - Feed ucapan & doa (*Wedding Wishes*) interaktif.

6. **Section 06 — Our Gallery (Editorial Photography & Lightbox)**
   - Grid galeri foto dengan sudut membulat (*rounded corners*) dan *fine gold border*.
   - **Interactive Lightbox Modal**: Klik foto mana pun untuk memperbesar (*fullscreen* zoom) lengkap dengan navigasi *Next/Prev*.
   - Kutipan penutup: *"EVERY PICTURE REMINDS US how lucky we are."*

7. **Wedding Gift / Amplop Digital**
   - Nomor rekening BCA & Mandiri dengan fitur **1-Click Copy to Clipboard**.

8. **Music Player & Footer**
   - Floating music player dengan animasi putaran piringan hitam/vinyl dan tombol Play/Pause.
   - Ucapan terima kasih, inisial mempelai, dan *branding* resmi **dipernikahankita**.

---

## 🎨 Palet Warna & Tipografi

| Nama Warna | Kode HEX | Penggunaan |
| :--- | :--- | :--- |
| **Deep Espresso** | `#29190F` | Background Cover, Footer, Vignette |
| **Dark Chocolate** | `#3B2519` | Background RSVP, Header |
| **Warm Ivory** | `#F7F0E3` | Background Konten, Formulir RSVP |
| **Champagne Gold** | `#C5A46D` | Aksen Ornamen, Highlight, Confetti |
| **Antique Gold** | `#A78650` | Border, Stempel Lilin, Tipografi Judul |
| **Soft Beige** | `#E8D9C2` | Border Sekunder, Kartu |
| **Muted Brown** | `#80664D` | Teks Deskriptif, Label |

**Font Families:**
- Heading: `Playfair Display` & `Cormorant Garamond`
- Script/Calligraphy: `Great Vibes`
- Body/UI Text: `Montserrat`

---

## ⚙️ Kustomisasi Data Pasangan

Seluruh konten undangan dapat diubah dengan mudah tanpa menyentuh kode komponen di:
👉 `src/data/invitationData.js`

Contoh parameter yang dapat diubah:
- Nama mempelai pria & wanita
- Tanggal & jam pernikahan (format ISO untuk countdown otomatis)
- Lokasi & URL Google Maps
- URL foto-foto pernikahan
- Cerita cinta (*milestones*)
- Nomor rekening untuk amplop digital
- URL lagu latar (*background music*)

---

## 🚀 Cara Menjalankan Proyek

1. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka di browser: `http://localhost:3000`

2. **Build untuk Production:**
   ```bash
   npm run build
   ```
   File siap di-deploy akan dihasilkan di folder `dist/`.

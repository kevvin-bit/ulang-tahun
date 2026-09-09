// Memilih elemen tombol dan pesan rahasia berdasarkan ID-nya di HTML
const surpriseBtn = document.getElementById('surpriseBtn');
const hiddenMessage = document.getElementById('hiddenMessage');

// Menambahkan aksi 'click' pada tombol kejutan
surpriseBtn.addEventListener('click', function() {
    // 1. Mengubah status pesan rahasia agar terlihat di layar
    if (hiddenMessage.style.display === 'block') {
        hiddenMessage.style.display = 'none';
        surpriseBtn.textContent = 'Klik Untuk Kejutan! 🎁';
    } else {
        hiddenMessage.style.display = 'block';
        surpriseBtn.textContent = 'Tutup Kejutan ❌';
        
        // 2. Menjalankan efek hujan balon/emoji ke udara
        createConfetti();
    }
});

// Fungsi untuk membuat animasi emoji yang berjatuhan (efek konfeti)
function createConfetti() {
    const emojis = ['🎉', '🎂', '🎈', '✨', '💖', '🎁'];
    
    for (let i = 0; i < 20; i++) {
        // Membuat elemen span baru untuk setiap emoji
        const confetti = document.createElement('span');
        
        // Memilih emoji secara acak dari list
        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Mengatur posisi awal dan gaya CSS secara acak menggunakan JS
        confetti.style.position = 'fixed';
        confetti.style.top = '-20px';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.fontSize = Math.random() * 20 + 20 + 'px';
        confetti.style.zIndex = '999';
        confetti.style.pointerEvents = 'none'; // Agar tidak mengganggu klik di layar
        
        // Animasi pergerakan menggunakan CSS Web Animations API
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 3000, // Durasi jatuh 3-5 detik
            easing: 'ease-out'
        });

        // Menambahkan elemen ke dalam dokumen HTML
        document.body.appendChild(confetti);

        // Menghapus elemen dari memori setelah animasi selesai agar ringan
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

//pesan



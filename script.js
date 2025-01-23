document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Menampilkan pesan konfirmasi
    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.\n\nEmail: ${email}\nPesan: ${message}`);

    // Mengosongkan formulir setelah pengiriman
    document.getElementById('contactForm').reset();
});
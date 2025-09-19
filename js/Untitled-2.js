// Mendapatkan elemen popup dan tombol buka/tutup
var popup = document.getElementById("cartPopup");
var btn = document.getElementById("openCart");
var span = document.getElementById("closeCart");

// Membuka popup saat tombol ditekan
btn.onclick = function() {
    popup.style.display = "block";
}

// Menutup popup saat tombol 'x' ditekan
span.onclick = function() {
    popup.style.display = "none";
}

// Menutup popup saat klik di luar popup
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

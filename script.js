// Fungsi untuk membuat elemen dapat digerakkan
function makeElementDraggable(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  // Menambahkan event listener untuk sentuhan (touch)
  elmnt.addEventListener('touchstart', touchstart, false);

  function touchstart(e) {
    e = e || window.event;
    e.preventDefault();
    // Mengambil posisi awal sentuhan
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    // Menambahkan event listener untuk sentuhan bergerak dan berhenti
    document.addEventListener('touchend', touchend, false);
    document.addEventListener('touchmove', touchmove, false);
  }

  function touchmove(e) {
    e = e || window.event;
    e.preventDefault();
    // Menghitung perubahan posisi sentuhan
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.touches[0].clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    // Menyesuaikan posisi elemen
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function touchend() {
    // Menghapus event listener saat sentuhan berhenti
    document.removeEventListener('touchend', touchend, false);
    document.removeEventListener('touchmove', touchmove, false);
  }
}

// Mengambil elemen yang ingin digerakkan
var moon = document.getElementById("moon");

// Membuat elemen tersebut dapat digerakkan
makeElementDraggable(moon);

const form = document.getElementById('helpForm');
const masalahTerkait = document.getElementById('problemList');
const deskripsiMasalah = document.getElementById('deskripsiMasalah');
const persetujuan = document.getElementById('persetujuan');
const submitButton = document.getElementById('submitButton');
const validationMessage = document.getElementById('validationMessage');

submitButton.addEventListener('click', function () {
    if (problemList.value === "" || deskripsiMasalah.value === "" || !persetujuan.checked) {
        validationMessage.textContent = "Harap pilih masalah terkait, isi deskripsi masalah, dan centang persetujuan.";
    } else {
        alert("Pengajuan telah terkirim, mohon menunggu maksimal 24 jam");
        form.reset();
        validationMessage.textContent = "";
    }
});
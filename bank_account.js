let saldo = 0;

function updateSaldoDisplay() {
  let saldoElement = document.getElementById("saldo");
  saldoElement.textContent = `saldo Anda Tersedia: $${saldo.toFixed(2)}`;
}

function tambahSaldo() {
  let tambahan = parseFloat(prompt("masukkan jumlah saldo :"));

  if (!isNaN(tambahan) && tambahan > 0) {
    saldo += tambahan;
    updateSaldoDisplay();
    alert(`saldo berhasil . Saldo saat ini: $${saldo}`);
  } else {
    alert("isi yang bener ngapa cok.");
  }
  console.log(tambahan);
}

function kurangiSaldo() {
  let pengurangan = parseFloat(prompt("masukkan jumlah yang mau dipake:"));

  if (!isNaN(pengurangan) && pengurangan > 0 && pengurangan <= saldo) {
    saldo -= pengurangan;
    updateSaldoDisplay();
    alert(`saldo kurang. saldo saat ini: $${saldo}`);
  } else {
    alert("jumlah saldo ga bener .");
  }
  console.log(pengurangan);
}

updateSaldoDisplay();

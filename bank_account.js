let saldo = 0;

function updateSaldoDisplay() {
  let saldoElement = document.getElementById("saldo");
  saldoElement.textContent = `Saldo Anda Tersedia: $${saldo.toFixed(2)}`;
}

function tambahSaldo() {
  let tambahan = parseFloat(prompt("Masukkan jumlah saldo :"));

  if (!isNaN(tambahan) && tambahan > 0) {
    saldo += tambahan;
    updateSaldoDisplay();
    alert(`Saldo berhasil . Saldo saat ini: $${saldo}`);
  } else {
    alert("Isi yang bener ngapa cok.");
  }
  console.log(tambahan);
}

function kurangiSaldo() {
  let pengurangan = parseFloat(prompt("Masukkan jumlah yang mau dipake:"));

  if (!isNaN(pengurangan) && pengurangan > 0 && pengurangan <= saldo) {
    saldo -= pengurangan;
    updateSaldoDisplay();
    alert(`Saldo kurang. Saldo saat ini: $${saldo}`);
  } else {
    alert("Jumlah saldo ga bener .");
  }
  console.log(pengurangan);
}

updateSaldoDisplay();
